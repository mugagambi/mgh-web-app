import {
  fetchAggregationProducts,
  addAggregationCenters,
  removeAggregationCenter,
  updateAggregationCenter
} from '../../http/Aggregation-Products'
// initial state
const state = {
  aggregationProducts: []
}

// getters
const getters = {
  allAgggregationProducts: state => state.aggregationProducts,
  getCenterById: state => id => {
    return state.aggregationProducts.find(center => center.id === id)
  }
}

// mutation-types
const FETCH_AGGREGATIONPRODUCTS = 'FETCH_AGGREGATIONPRODUCTS'
const ADD_CENTER = 'ADD_CENTER'
const REMOVE_CENTER = 'REMOVE_CENTER'
const UPDATE_CENTER = 'UPDATE_CENTER'

// actions
const actions = {
  async fetchAggregationProducts ({ commit, state }, aggregationProducts) {
    await fetchAggregationProducts().then(response =>
      commit(FETCH_AGGREGATIONPRODUCTS, response)
    )
  },
  async addCenter ({ commit, state }, center) {
    await addAggregationCenters(center).then(response =>
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
  [FETCH_AGGREGATIONPRODUCTS] (state, aggregationProducts) {
    state.aggregationProducts = aggregationProducts
  },
  [ADD_CENTER] (state, center) {
    state.aggregationProducts.push(center)
  },
  [REMOVE_CENTER] (state, id) {
    state.aggregationProducts = state.aggregationProducts.filter(c => c.id !== id)
  },
  [UPDATE_CENTER] (state, center) {
    const index = state.aggregationProducts.findIndex(c => c.id === center.id)
    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.aggregationProducts.splice(index, 1, center)
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
