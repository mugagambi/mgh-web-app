import {
  fetchCrateTpes,
  addCrateType,
  removeCrateType,
  updateCrateType
} from '../../http/Crate-types'
// initial state
const state = {
  crateTypes: []
}

// getters
const getters = {
  allCrateTypes: state => state.crateTypes,
  getCrateTypeById: state => id => {
    return state.crateTypes.find(crateType => crateType.id === id)
  }
}

// mutation-types
const FETCH_CRATE_TYPES = 'FETCH_CRATE_TYPES'
const ADD_CRATE_TYPE = 'ADD_CRATE_TYPE'
const REMOVE_CRATE_TYPE = 'REMOVE_CRATE_TYPE'
const UPDATE_CRATE_TYPE = 'UPDATE_CRATE_TYPE'

// actions
const actions = {
  async fetchCrateTpes ({ commit, state }, crateTypes) {
    await fetchCrateTpes().then(response => commit(FETCH_CRATE_TYPES, response))
  },
  async addCrateTypeAction ({ commit, state }, crateType) {
    await addCrateType(crateType).then(response => commit(ADD_CRATE_TYPE, response))
  },
  async removeCrateTypeAction ({ commit, state }, id) {
    await removeCrateType(id).then(response => commit(REMOVE_CRATE_TYPE, id))
  },
  async updateCrateTypeAction ({ commit, state }, form) {
    await updateCrateType(form.id, form).then(response => {
      commit(UPDATE_CRATE_TYPE, response)
    })
  }
}
// mutations
const mutations = {
  [FETCH_CRATE_TYPES] (state, crateTypes) {
    state.crateTypes = crateTypes
  },
  [ADD_CRATE_TYPE] (state, crateType) {
    state.crateTypes.push(crateType)
  },
  [REMOVE_CRATE_TYPE] (state, id) {
    state.crateTypes = state.crateTypes.filter(t => t.id !== id)
  },
  [UPDATE_CRATE_TYPE] (state, crateType) {
    const index = state.crateTypes.findIndex(t => t.id === crateType.id)
    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.crateTypes.splice(index, 1, crateType)
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
