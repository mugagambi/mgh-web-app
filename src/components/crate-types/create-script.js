import TypeCustomForm from './form'
import { mapActions } from 'vuex'
export default {
  components: {
    TypeCustomForm
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions(['addCrateTypeAction']),
    add (form) {
      this.loading = true
      this.addCrateTypeAction(form)
        .then(() => {
          this.loading = false
          this.$notify({
            title: 'Success',
            message: 'Crate Type added',
            type: 'success',
            duration: 10000
          })
          this.$router.push({ path: '/crate-types' })
        })
        .catch(() => (this.loading = false))
    }
  }
}
