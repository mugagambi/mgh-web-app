// initial state
const state = {
  user: {
    username: '',
    email: '',
    phone_number: '',
    first_name: '',
    last_name: '',
    last_login: '',
    token: ''
  }
}
// getters
const getters = {
  User: state => state.user
}
// mutation-types
const STORE_USER = 'STORE_USER'

// actions
const actions = {
  storeUser ({ commit, state }, user) {
    commit(STORE_USER, user)
  }
}

// mutations
const mutations = {
  [STORE_USER] (state, user) {
    state.user = { ...user }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
