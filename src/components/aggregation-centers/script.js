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
    ...mapActions(['fetchCenters']),
    handleEdit: function (params) {},
    handleDelete: function () {},
    handleAdd () {
      this.$router.push({ path: 'centers/add' })
    }
  }
}
