import ProductCustomForm from './form'
import { mapActions } from 'vuex'
export default {
  components: {
    ProductCustomForm
  },
  data () {
    return {
      loading: false,
      form: {},
      add: false
    }
  },
  created () {
    const center = this.$store.getters.getProductById(this.$route.params.id)
    if (!center) {
      this.$notify({
        title: 'Error',
        message: 'Product not found',
        type: 'error',
        duration: 10000
      })
      return this.$router.push({ path: '/products' })
    }
    this.form = { ...center }
  },
  methods: {
    ...mapActions(['updateProduct']),
    update (form) {
      this.loading = true
      this.updateProduct(form)
        .then(() => {
          this.loading = false
          this.$notify({
            title: 'Success',
            message: 'Product updated',
            type: 'success',
            duration: 10000
          })
          this.$router.push({ path: '/products' })
        })
        .catch(() => (this.loading = false))
    }
  }
}
