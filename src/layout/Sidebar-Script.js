export default {
  name: 'sidebar',
  methods: {
    handleAggregation: function () {
      this.$router.push({ path: '/centers' })
    },
    handleProducts: function () {
      this.$router.push({ path: '/products' })
    }
  }
}
