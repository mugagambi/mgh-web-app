import {
  fetchAggregationCenters,
  addAggregationCenters,
  removeAggregationCenter,
  updateAggregationCenter
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
const UPDATE_CENTER = 'UPDATE_CENTER'

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
  },
  async updateCenter ({ commit, state }, id, data) {
    await updateAggregationCenter(id, data).then(response => {
      commit(UPDATE_CENTER, response)
    })
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
  },
  [UPDATE_CENTER] (state, center) {
    const index = state.centers.findIndex(c => c.id === center.id)
    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.centers.splice(index, 1, center)
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
