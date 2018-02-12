import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },
  created () {
    this.loading = true
    this.fetchProducts()
      .then(() => (this.loading = false))
      .catch(() => (this.loading = false))
  },
  computed: mapGetters({
    tableData: 'allProducts'
  }),
  methods: {
    ...mapActions(['fetchProducts', 'removeProduct']),
    handleEdit: function (index, row) {
      this.$router.push({ name: 'UpdateProduct', params: { id: row.id } })
    },
    handleDelete: function (index, row) {
      this.$confirm(
        'This will permanently remove the Product. Continue?',
        'Warning',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }
      )
        .then(() => {
          this.removeProduct(row.id).then(() => {
            this.$message({
              type: 'success',
              message: 'Product removed'
            })
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: 'Remove canceled'
          })
        })
    },
    handleAdd () {
      this.$router.push({ path: 'products/add' })
    }
  }
}
