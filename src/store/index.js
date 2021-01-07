import Vue from 'vue'
import Vuex from 'vuex'

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
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    createProfile(state, profile) {
      state.profiles.push(profile);

      localStorage.setItem('profiles', JSON.stringify(state.profiles))
    },
    createUser(state, user) {
      state.users.push(user);

      localStorage.setItem('users', JSON.stringify(state.users))
    },
    updateTask(state, {id, description, date}) {
      const tasks = state.tasks.concat();

      const idx = tasks.findIndex(t => t.id === id);
      const task = tasks[idx];

      const status = new Date(date) > new Date() ? 'active' : 'outdated';

      tasks[idx] = {...task, date, description, status};

      state.tasks = tasks;
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateProfile(state, {id, description}) {
      const profiles = state.profiles.concat();

      const idx = profiles.findIndex(t => t.id === id);
      const profile = profiles[idx];


      profiles[idx] = {...profile, description};

      state.profiles = profiles;
      localStorage.setItem('profiles', JSON.stringify(state.profiles))
    },
    completeTask(state, id) {
      const idx = state.tasks.findIndex(t => t.id === id);
      state.tasks[idx].status = 'completed';
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },

    SET_CARD: (state, product) => {
      state.card.push(product)
    }
  },
  actions: {
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
  },
  getters: {
    users: s => s.users,
    tasks: s => s.tasks,
    profiles: s => s.profiles,
    profileById: s => id => s.profiles.find(t => t.id === id),
    taskById: s => id => s.tasks.find(t => t.id === id),

    CARD: s => s.card,
  }
})

