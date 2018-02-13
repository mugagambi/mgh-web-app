import {
  fetchCrates,
  addCrate,
  removeCrateAction,
  updateCrateType
} from '../../http/crates'
// initial state
const state = {
  crates: []
}

// getters
const getters = {
  allCrates: state => state.crates,
  getCrateById: state => id => {
    return state.crates.find(crate => crate.id === id)
  }
}

// mutation-types
const FETCH_CRATES = 'FETCH_CRATES'
const ADD_CRATE = 'ADD_CRATE'
const REMOVE_CRATE = 'REMOVE_CRATE'
const UPDATE_CRATE_TYPE = 'UPDATE_CRATE_TYPE'

// actions
const actions = {
  async fetchCratesAction ({ commit, state }, crates) {
    await fetchCrates().then(response => commit(FETCH_CRATES, response))
  },
  async addCrateAction ({ commit, state }, crate) {
    await addCrate(crate).then(response =>
      commit(ADD_CRATE, response)
    )
  },
  async removeCrateAction ({ commit, state }, id) {
    await removeCrateAction(id).then(response => commit(REMOVE_CRATE, id))
  },
  async updateCrateTypeAction ({ commit, state }, form) {
    await updateCrateType(form.id, form).then(response => {
      commit(UPDATE_CRATE_TYPE, response)
    })
  }
}
// mutations
const mutations = {
  [FETCH_CRATES] (state, crates) {
    state.crates = crates
  },
  [ADD_CRATE] (state, crate) {
    state.crates.push(crate)
  },
  [REMOVE_CRATE] (state, id) {
    state.crates = state.crates.filter(t => t.id !== id)
  },
  [UPDATE_CRATE_TYPE] (state, crate) {
    const index = state.crates.findIndex(t => t.id === crate.id)
    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.crates.splice(index, 1, crate)
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
