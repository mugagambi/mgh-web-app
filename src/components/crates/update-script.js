import CrateCustomForm from './form'
import { mapActions } from 'vuex'
export default {
  components: {
    CrateCustomForm
  },
  data () {
    return {
      loading: false,
      form: {},
      add: false
    }
  },
  created () {
    const crate = this.$store.getters.getCrateById(this.$route.params.id)
    if (!crate) {
      this.$notify({
        title: 'Error',
        message: 'Crate not found',
        type: 'error',
        duration: 10000
      })
      return this.$router.push({ path: '/crates' })
    }
    this.form = { ...crate }
  },
  methods: {
    ...mapActions(['updateCrateAction']),
    update (form) {
      this.loading = true
      this.updateCrateAction(form)
        .then(() => {
          this.loading = false
          this.$notify({
            title: 'Success',
            message: 'crate updated',
            type: 'success',
            duration: 10000
          })
          this.$router.push({ path: '/crates' })
        })
        .catch(() => (this.loading = false))
    }
  }
}
