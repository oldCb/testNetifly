import { AJOUTER_TASK, SUPPRIMER_TASK } from '../mutation-types'

const state = {
  list: []
}

function ajouterTask (value) {
  return { type: AJOUTER_TASK, value }
}

function supprimerTask (value) {
  return { type: SUPPRIMER_TASK, value }
}

const getters = {
  list: state => state.list
}

const actions = {
  ajouter ({ commit }, value) {
    commit(ajouterTask(value))
  },
  supprimer ({ commit }, value) {
    commit(supprimerTask(value))
  }
}

const mutations = {
  [AJOUTER_TASK] (state, payload) {
    state.list.push({
      name: payload.value,
      completed: false
    })
  },
  [SUPPRIMER_TASK] (state, payload) {
    state.list.splice(payload.value, 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
