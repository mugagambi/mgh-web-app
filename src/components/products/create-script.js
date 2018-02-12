import ProductsCustomForm from './form'
import { mapActions } from 'vuex'
export default {
  components: {
    ProductsCustomForm
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    ...mapActions(['addProduct']),
    add (form) {
      this.loading = true
      this.addProduct(form)
        .then(() => {
          this.loading = false
          this.$notify({
            title: 'Success',
            message: 'Product added',
            type: 'success',
            duration: 10000
          })
          this.$router.push({ path: '/products' })
        })
        .catch(() => (this.loading = false))
    }
  }
}
