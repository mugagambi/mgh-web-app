export default {
  name: 'sidebar',
  methods: {
    handleAggregation: function () {
      this.$router.push({ path: '/centers' })
    },
    handleProducts: function () {
      this.$router.push({ path: '/products' })
    },
    handleAggregationProducts: function () {
      this.$router.push({ path: '/aggregation-products' })
    },
    handleCrateTypes: function () {
      this.$router.push({ path: '/crate-types' })
    }
  }
}
