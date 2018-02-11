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
    handleEdit: function (params) {},
    handleDelete: function (index, row) {
      const r = confirm('Are you sure you want to remove this center?')
      if (r === true) {
        this.removeCenter(row.id).then(() => {
          this.$notify({
            title: 'Success',
            message: 'Aggregation center removed',
            type: 'success',
            duration: 10000
          })
        })
      }
    },
    handleAdd () {
      this.$router.push({ path: 'centers/add' })
    }
  }
}
