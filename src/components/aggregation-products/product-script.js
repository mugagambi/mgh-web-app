import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: false,
      input: ''
    }
  },
  created () {
    this.loading = true
    if (this.$store.getters.allCenters.length === 0) {
      this.fetchCenters()
    }
    if (this.$store.getters.allProducts.length === 0) {
      this.fetchProducts()
    }
    this.fetchAggregationProducts()
      .then(() => (this.loading = false))
      .catch(() => (this.loading = false))
  },
  computed: mapGetters({
    tableData: 'allAgggregationProducts'
  }),
  methods: {
    ...mapActions([
      'fetchAggregationProducts',
      'removeCenter',
      'fetchProducts',
      'fetchCenters'
    ]),
    handleEdit: function (index, row) {
      this.$router.push({ name: 'UpdateCenter', params: { id: row.id } })
    },
    handleDelete: function (index, row) {
      this.$confirm(
        'This will permanently remove this Product from the center. Continue?',
        'Warning',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }
      )
        .then(() => {
          this.removeCenter(row.id).then(() => {
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
      this.$router.push({ path: 'centers/add' })
    }
  }
}
