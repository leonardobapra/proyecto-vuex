import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
        username: 'Diana.Nerd2'
    }
  },
  getters: {
    firstName: (state) => (c) => {
      return state.username.split('').join(c)
    }
  },
  mutations: {
    updateUsername(state, username) {
      state.username = username
    }
  },
  actions: {
    updateUsername({ commit, state }, username) {
      console.log('entra', state)
      commit('updateUsername', username)
    }
  }
})

export default store