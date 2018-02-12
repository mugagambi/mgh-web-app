import {
  fetchAggregationProducts,
  addAggregationProduct,
  removeAggregationProduct,
  updateAggregationProduct
} from '../../http/Aggregation-Products'
// initial state
const state = {
  aggregationProducts: []
}

// getters
const getters = {
  allAgggregationProducts: state => state.aggregationProducts,
  getAggregationProductById: state => id => {
    return state.aggregationProducts.find(aggregationProduct => aggregationProduct.id === id)
  }
}

// mutation-types
const FETCH_AGGREGATIONPRODUCTS = 'FETCH_AGGREGATIONPRODUCTS'
const ADD_AGGREGATION = 'ADD_AGGREGATION'
const REMOVE_CENTER = 'REMOVE_CENTER'
const UPDATE_CENTER = 'UPDATE_CENTER'

// actions
const actions = {
  async fetchAggregationProducts ({ commit, state }, aggregationProducts) {
    await fetchAggregationProducts().then(response =>
      commit(FETCH_AGGREGATIONPRODUCTS, response)
    )
  },
  async addAggregationProduct ({ commit, state }, aggregationProduct) {
    await addAggregationProduct(aggregationProduct).then(response =>
      commit(ADD_AGGREGATION, response)
    )
  },
  async removeAggregationProduct ({ commit, state }, id) {
    await removeAggregationProduct(id).then(response =>
      commit(REMOVE_CENTER, id)
    )
  },
  async updateAggregationProduct ({ commit, state }, form) {
    await updateAggregationProduct(form.id, form).then(response => {
      commit(UPDATE_CENTER, response)
    })
  }
}
// mutations
const mutations = {
  [FETCH_AGGREGATIONPRODUCTS] (state, aggregationProducts) {
    state.aggregationProducts = aggregationProducts
  },
  [ADD_AGGREGATION] (state, aggregationProduct) {
    state.aggregationProducts.push(aggregationProduct)
  },
  [REMOVE_CENTER] (state, id) {
    state.aggregationProducts = state.aggregationProducts.filter(c => c.id !== id)
  },
  [UPDATE_CENTER] (state, aggregationProduct) {
    const index = state.aggregationProducts.findIndex(c => c.id === aggregationProduct.id)
    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.aggregationProducts.splice(index, 1, aggregationProduct)
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
