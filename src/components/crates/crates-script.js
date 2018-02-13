import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },
  created () {
    if (this.$store.getters.allCrateTypes.length === 0) {
      this.fetchCrateTpes()
    }
    this.loading = true
    this.fetchCratesAction()
      .then(() => (this.loading = false))
      .catch(() => (this.loading = false))
  },
  computed: mapGetters({
    tableData: 'allCrates'
  }),
  methods: {
    ...mapActions(['fetchCratesAction', 'removeCrateTypeAction', 'fetchCrateTpes']),
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
