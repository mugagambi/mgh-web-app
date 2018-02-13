import Vue from 'vue'
import vuex from 'vuex'
import centers from './modules/centers'
import products from './modules/products'
import user from './modules/auth'
import aggregationProducts from './modules/aggregation-products'
import crateTypes from './modules/crates-types'
import Crates from './modules/crates'

Vue.use(vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new vuex.Store({
  modules: {
    centers,
    products,
    user,
    aggregationProducts,
    crateTypes,
    Crates
  },
  strict: debug
})
