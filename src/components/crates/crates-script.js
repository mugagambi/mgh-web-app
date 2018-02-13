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
    ...mapActions(['fetchCratesAction', 'removeCrateAction', 'fetchCrateTpes']),
    handleEdit: function (index, row) {
      this.$router.push({ name: 'UpdateCrates', params: { id: row.id } })
    },
    handleDelete: function (index, row) {
      this.$confirm(
        'This will permanently remove the Crate. Continue?',
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
      this.$router.push({ path: '/crates/add' })
    }
  }
}
