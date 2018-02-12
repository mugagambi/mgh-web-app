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
      this.$router.push({name: 'UpdateCenter', params: {id: row.id}})
    },
    handleDelete: function (index, row) {
      const r = confirm('Are you sure you want to remove this product?')
      if (r === true) {
        this.removeProduct(row.id).then(() => {
          this.$notify({
            title: 'Success',
            message: 'Product removed',
            type: 'success',
            duration: 10000
          })
        })
      }
    },
    handleAdd () {
      this.$router.push({ path: 'products/add' })
    }
  }
}
