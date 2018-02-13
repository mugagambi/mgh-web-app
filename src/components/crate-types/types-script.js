import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },
  created () {
    this.loading = true
    this.fetchCrateTpes()
      .then(() => (this.loading = false))
      .catch(() => (this.loading = false))
  },
  computed: mapGetters({
    tableData: 'allCrateTypes'
  }),
  methods: {
    ...mapActions(['fetchCrateTpes', 'removeCrateTypeAction']),
    handleEdit: function (index, row) {
      this.$router.push({ name: 'UpdateCrateType', params: { id: row.id } })
    },
    handleDelete: function (index, row) {
      this.$confirm(
        'This will permanently remove the Crate Type. Continue?',
        'Warning',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }
      )
        .then(() => {
          this.removeCrateTypeAction(row.id).then(() => {
            this.$message({
              type: 'success',
              message: 'Crate Type removed'
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
      this.$router.push({ path: '/crate-types/add' })
    }
  }
}
