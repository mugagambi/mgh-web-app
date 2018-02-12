import AggregationCustomForm from './form'
import { mapActions } from 'vuex'
export default {
  components: {
    AggregationCustomForm
  },
  data () {
    return {
      loading: false,
      form: {},
      add: false
    }
  },
  created () {
    const aggregationProduct = this.$store.getters.getAggregationProductById(this.$route.params.id)
    if (!aggregationProduct) {
      this.$notify({
        title: 'Error',
        message: 'Aggregation Center Product not found',
        type: 'error',
        duration: 10000
      })
      return this.$router.push({ path: '/aggregation-products' })
    }
    this.form = { ...aggregationProduct }
  },
  methods: {
    ...mapActions(['updateAggregationProduct']),
    update (form) {
      this.loading = true
      this.updateAggregationProduct(form)
        .then(() => {
          this.loading = false
          this.$notify({
            title: 'Success',
            message: 'Aggregation Center Product updated',
            type: 'success',
            duration: 10000
          })
          this.$router.push({ path: '/aggregation-products' })
        })
        .catch(() => (this.loading = false))
    }
  }
}
