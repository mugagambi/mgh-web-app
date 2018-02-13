import TypeCustomForm from './form'
import { mapActions } from 'vuex'
export default {
  components: {
    TypeCustomForm
  },
  data () {
    return {
      loading: false,
      form: {},
      add: false
    }
  },
  created () {
    const type = this.$store.getters.getCrateTypeById(this.$route.params.id)
    if (!type) {
      this.$notify({
        title: 'Error',
        message: 'Crate Type not found',
        type: 'error',
        duration: 10000
      })
      return this.$router.push({ path: '/crate-types' })
    }
    this.form = { ...type }
  },
  methods: {
    ...mapActions(['updateCrateTypeAction']),
    update (form) {
      this.loading = true
      this.updateCrateTypeAction(form)
        .then(() => {
          this.loading = false
          this.$notify({
            title: 'Success',
            message: 'Crate Type updated',
            type: 'success',
            duration: 10000
          })
          this.$router.push({ path: '/crate-types' })
        })
        .catch(() => (this.loading = false))
    }
  }
}
