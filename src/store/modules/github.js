import {
  SET_TABRESULT,
  SET_LOADING
} from '../mutation-types'

const state = {
  tabResult: [],
  loading: false
}

function setTabResult (valeur) {
  return { type: SET_TABRESULT, valeur }
}

function setLoading (valeur) {
  return { type: SET_LOADING, valeur }
}

const getters = {
  tabResult: state => state.tabResult,
  loading: state => state.loading
}

const actions = {
  getTabResult ({ commit }) {
    commit(setLoading(true))
    fetch('https://github-trending-api.now.sh/repositories')
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        const trie = myJson.filter((element) => {
          return element.language
        })
        commit(setTabResult(trie))
        commit(setLoading(false))
      })
  }
}

const mutations = {
  [SET_TABRESULT] (state, payload) {
    state.tabResult = payload.valeur
  },
  [SET_LOADING] (state, payload) {
    state.loading = payload.valeur
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
