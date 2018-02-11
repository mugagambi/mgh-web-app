import { fetchAggregationCenters } from '../../http/Aggregation-Centers'
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

// actions
const actions = {
  async fetchCenters ({ commit, state }, centers) {
    await fetchAggregationCenters().then(response =>
      commit(FETCH_CENTERS, response)
    )
  }
}
// mutations
const mutations = {
  [FETCH_CENTERS] (state, centers) {
    state.centers = centers
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
