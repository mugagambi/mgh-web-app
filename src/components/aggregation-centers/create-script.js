import CustomForm from './form'
import { mapActions } from 'vuex'
export default {
  components: {
    CustomForm
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions(['addCenter']),
    add (form) {
      this.loading = true
      this.addCenter(form)
        .then(() => {
          this.loading = false
          this.$notify({
            title: 'Success',
            message: 'Aggregation center added',
            type: 'success',
            duration: 10000
          })
          this.$router.push({ path: '/centers' })
        })
        .catch(() => (this.loading = false))
    }
  }
}
