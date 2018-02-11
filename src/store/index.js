import Vue from 'vue'
import vuex from 'vuex'
import centers from './modules/centers'

Vue.use(vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new vuex.Store({
  modules: {
    centers
  },
  strict: debug
})
