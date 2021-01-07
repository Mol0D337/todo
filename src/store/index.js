import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]').map(task => {
      if (new Date(task.date) < new Date()) {
        task.status = 'outdated'
      }
      return task
    }),
    profiles: JSON.parse(localStorage.getItem('profiles') || '[]').map(task => {
      return task
    }),
    users: JSON.parse(localStorage.getItem('users') || '[]').map(user => {
      return user
    }),
    card: [],
  },
  mutations,
  actions,
  getters
})

