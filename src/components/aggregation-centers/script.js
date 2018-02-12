import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },
  created () {
    this.loading = true
    this.fetchCenters()
      .then(() => (this.loading = false))
      .catch(() => (this.loading = false))
  },
  computed: mapGetters({
    tableData: 'allCenters'
  }),
  methods: {
    ...mapActions(['fetchCenters', 'removeCenter']),
    handleEdit: function (index, row) {
      this.$router.push({ name: 'UpdateCenter', params: { id: row.id } })
    },
    handleDelete: function (index, row) {
      this.$confirm(
        'This will permanently remove the Center. Continue?',
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
              message: 'Aggregation center removed'
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
