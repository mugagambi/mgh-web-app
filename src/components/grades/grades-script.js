import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },
  created () {
    this.loading = true
    this.fetchGradesAction()
      .then(() => (this.loading = false))
      .catch(() => (this.loading = false))
  },
  computed: mapGetters({
    tableData: 'allGrades'
  }),
  methods: {
    ...mapActions(['fetchGradesAction', 'removeCrateAction', 'fetchCrateTpes']),
    handleEdit: function (index, row) {
      this.$router.push({ name: 'UpdateCrates', params: { id: row.id } })
    },
    handleDelete: function (index, row) {
      this.$confirm(
        'This will permanently remove the Grade. Continue?',
        'Warning',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }
      )
        .then(() => {
          this.removeCrateAction(row.id).then(() => {
            this.$message({
              type: 'success',
              message: 'Crate  removed'
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
      this.$router.push({ path: '/grades/add' })
    }
  }
}
