import {
  fetchAggregationCenters,
  addAggregationCenters
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
  }
}
// mutations
const mutations = {
  [FETCH_CENTERS] (state, centers) {
    state.centers = centers
  },
  [ADD_CENTER] (state, center) {
    state.centers.push(center)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
