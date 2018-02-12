import {
  fetchProducts,
  addProducts,
  removeProduct,
  updateAggregationCenter
} from '../../http/Products'
// initial state
const state = {
  products: []
}

// getters
const getters = {
  allProducts: state => state.products,
  getCenterById: state => id => {
    return state.products.find(product => product.id === id)
  }
}

// mutation-types
const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

// actions
const actions = {
  async fetchProducts ({ commit, state }, products) {
    await fetchProducts().then(response =>
      commit(FETCH_PRODUCTS, response)
    )
  },
  async addProduct ({ commit, state }, product) {
    await addProducts(product).then(response =>
      commit(ADD_PRODUCT, response)
    )
  },
  async removeProduct ({ commit, state }, id) {
    await removeProduct(id).then(response =>
      commit(REMOVE_PRODUCT, id)
    )
  },
  async updateCenter ({ commit, state }, form) {
    await updateAggregationCenter(form.id, form).then(response => {
      commit(UPDATE_PRODUCT, response)
    })
  }
}
// mutations
const mutations = {
  [FETCH_PRODUCTS] (state, products) {
    state.products = products
  },
  [ADD_PRODUCT] (state, product) {
    state.products.push(product)
  },
  [REMOVE_PRODUCT] (state, id) {
    state.products = state.products.filter(p => p.id !== id)
  },
  [UPDATE_PRODUCT] (state, product) {
    const index = state.products.findIndex(p => p.id === product.id)
    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.products.splice(index, 1, product)
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
