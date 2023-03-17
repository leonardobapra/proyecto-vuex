import { createStore } from 'vuex'
import { getUser } from '@/api'
import { COMMIT_UPDATE_USERNAME } from '@/common'
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
    [COMMIT_UPDATE_USERNAME](state, username) {
      state.username = username
    }
  },
  actions: {
    async updateUsername({ commit, state }, username) {
      console.log('entra', state)
      const user = await getUser(1)
      console.log(user)
      commit(COMMIT_UPDATE_USERNAME, user.username)
    }
  }
})

export default store