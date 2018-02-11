import CustomForm from './form'
import { mapActions } from 'vuex'
export default {
  components: {
    CustomForm
  },
  data () {
    return {
      loading: false,
      form: {},
      add: false
    }
  },
  created () {
    const center = this.$store.getters.getCenterById(this.$route.params.id)
    if (!center) {
      this.$notify({
        title: 'Error',
        message: 'Aggregation center not found',
        type: 'error',
        duration: 10000
      })
      return this.$router.push({ path: '/centers' })
    }
    this.form = { ...center }
  },
  methods: {
    ...mapActions(['updateCenter']),
    update (form) {
      this.loading = true
      this.updateCenter(form)
        .then(() => {
          this.loading = false
          this.$notify({
            title: 'Success',
            message: 'Aggregation center updated',
            type: 'success',
            duration: 10000
          })
          this.$router.push({ path: '/centers' })
        })
        .catch(() => (this.loading = false))
    }
  }
}
