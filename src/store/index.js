import Vue from 'vue'
import vuex from 'vuex'
import centers from './modules/centers'
import products from './modules/products'
import user from './modules/auth'

Vue.use(vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new vuex.Store({
  modules: {
    centers,
    products,
    user
  },
  strict: debug
})
