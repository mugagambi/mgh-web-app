import {
  fetchGrades,
  addGrade,
  removeCrateAction,
  updateCrate
} from '../../http/grades'
// initial state
const state = {
  grades: []
}

// getters
const getters = {
  allGrades: state => state.grades,
  getCrateById: state => id => {
    return state.grades.find(grade => grade.id === id)
  }
}

// mutation-types
const FETCH_GRADES = 'FETCH_GRADES'
const ADD_GRADE = 'ADD_GRADE'
const REMOVE_CRATE = 'REMOVE_CRATE'
const UPDATE_CRATE = 'UPDATE_CRATE'

// actions
const actions = {
  async fetchGradesAction ({ commit, state }, grades) {
    await fetchGrades().then(response => commit(FETCH_GRADES, response))
  },
  async addGradeAction ({ commit, state }, grade) {
    await addGrade(grade).then(response => commit(ADD_GRADE, response))
  },
  async removeCrateAction ({ commit, state }, id) {
    await removeCrateAction(id).then(response => commit(REMOVE_CRATE, id))
  },
  async updateCrateAction ({ commit, state }, form) {
    await updateCrate(form.id, form).then(response => {
      commit(UPDATE_CRATE, response)
    })
  }
}
// mutations
const mutations = {
  [FETCH_GRADES] (state, grades) {
    state.grades = grades
  },
  [ADD_GRADE] (state, grade) {
    state.grades.push(grade)
  },
  [REMOVE_CRATE] (state, id) {
    state.grades = state.grades.filter(t => t.id !== id)
  },
  [UPDATE_CRATE] (state, grade) {
    const index = state.grades.findIndex(t => t.id === grade.id)
    if (index !== -1) {
      // We need to replace the array entirely so that vue can recognize
      // the change and re-render entirely.
      // See http://vuejs.org/guide/list.html#Caveats
      state.grades.splice(index, 1, grade)
    }
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
