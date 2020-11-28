
export const state = () => ({
  user: {},
  messages: []
})

export const mutations = {
  setUser (state, user){
    state.user = user
  },
  clearData (state, user){
    state.user = {}
    state.mesages = []
  },
  setMessages (state, message) {
    state.messages.push(message)
  }
}

export const actions = {
  SOCKET_newMessage ({commit}, data) {
    console.log('message received', data)
    commit('setMessages', data)
  }
}
