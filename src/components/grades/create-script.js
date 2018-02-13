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
  methods: {
    ...mapActions(['addGradeAction', 'fetchCrateTpes']),
    add (form) {
      this.loading = true
      this.addGradeAction(form)
        .then(() => {
          this.loading = false
          this.$notify({
            title: 'Success',
            message: 'Grade added',
            type: 'success',
            duration: 10000
          })
          this.$router.push({ path: '/grades' })
        })
        .catch(() => (this.loading = false))
    }
  }
}
