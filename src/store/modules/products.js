import {
  fetchProducts,
  addAggregationCenters,
  removeAggregationCenter,
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
const ADD_CENTER = 'ADD_CENTER'
const REMOVE_CENTER = 'REMOVE_CENTER'
const UPDATE_CENTER = 'UPDATE_CENTER'

// actions
const actions = {
  async fetchProducts ({ commit, state }, products) {
    await fetchProducts().then(response =>
      commit(FETCH_PRODUCTS, response)
    )
  },
  async addCenter ({ commit, state }, product) {
    await addAggregationCenters(product).then(response =>
      commit(ADD_CENTER, response)
    )
  },
  async removeCenter ({ commit, state }, id) {
    await removeAggregationCenter(id).then(response =>
      commit(REMOVE_CENTER, id)
    )
  },
  async updateCenter ({ commit, state }, form) {
    await updateAggregationCenter(form.id, form).then(response => {
      commit(UPDATE_CENTER, response)
    })
  }
}
// mutations
const mutations = {
  [FETCH_PRODUCTS] (state, products) {
    state.products = products
  },
  [ADD_CENTER] (state, product) {
    state.products.push(product)
  },
  [REMOVE_CENTER] (state, id) {
    state.products = state.products.filter(c => c.id !== id)
  },
  [UPDATE_CENTER] (state, product) {
    const index = state.products.findIndex(c => c.id === product.id)
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
