import AggregationCustomForm from './form'
import { mapActions } from 'vuex'
export default {
  components: {
    AggregationCustomForm
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions(['addAggregationProduct']),
    add (form) {
      this.loading = true
      this.addAggregationProduct(form)
        .then(() => {
          this.loading = false
          this.$notify({
            title: 'Success',
            message: 'Aggregation center product added',
            type: 'success',
            duration: 10000
          })
          this.$router.push({ path: '/aggregation-products' })
        })
        .catch(() => (this.loading = false))
    }
  }
}
