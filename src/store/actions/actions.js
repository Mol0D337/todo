export default {
  createTask({commit}, task) {
    commit('createTask', task)
  },
  createProfile({commit}, profile) {
    commit('createProfile', profile)
  },
  createUser({commit}, user) {
    commit('createUser', user)
  },
  updateTask({commit}, task) {
    commit('updateTask', task)
  },
  completeTask({commit}, id) {
    commit('completeTask', id)
  },
  updateProfile({commit}, profile) {
    commit('updateProfile', profile)
  },

  ADD_TO_CARD({commit}, product) {
    commit('SET_CARD', product)
  },
  DELETE_FROM_CARD({commit}, index) {
    commit('REMOVE_FROM_CARD', index)
  },

  INCREMENT_CARD_ITEM({commit}, index) {
    commit('INCREMENT', index)
  },
  DECREMENT_CARD_ITEM({commit}, index) {
    commit('DECREMENT', index)
  }
}
