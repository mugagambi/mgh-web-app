import CrateCustomForm from './form'
import { mapActions } from 'vuex'
export default {
  components: {
    CrateCustomForm
  },
  data () {
    return {
      loading: false
    }
  },
  created () {
    if (this.$store.getters.allCrateTypes.length === 0) {
      this.fetchCrateTpes()
    }
  },
  methods: {
    ...mapActions(['addCrateAction', 'fetchCrateTpes']),
    add (form) {
      this.loading = true
      this.addCrateAction(form)
        .then(() => {
          this.loading = false
          this.$notify({
            title: 'Success',
            message: 'Crate added',
            type: 'success',
            duration: 10000
          })
          this.$router.push({ path: '/crates' })
        })
        .catch(() => (this.loading = false))
    }
  }
}
