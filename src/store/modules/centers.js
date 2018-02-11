import {
  fetchAggregationCenters,
  addAggregationCenters,
  removeAggregationCenter
} from '../../http/Aggregation-Centers'
// initial state
const state = {
  centers: []
}

// getters
const getters = {
  allCenters: state => state.centers
}

// mutation-types
const FETCH_CENTERS = 'FETCH_CENTERS'
const ADD_CENTER = 'ADD_CENTER'
const REMOVE_CENTER = 'REMOVE_CENTER'

// actions
const actions = {
  async fetchCenters ({ commit, state }, centers) {
    await fetchAggregationCenters().then(response =>
      commit(FETCH_CENTERS, response)
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
  }
}
// mutations
const mutations = {
  [FETCH_CENTERS] (state, centers) {
    state.centers = centers
  },
  [ADD_CENTER] (state, center) {
    state.centers.push(center)
  },
  [REMOVE_CENTER] (state, id) {
    state.centers = state.centers.filter(c => c.id !== id)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
