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
    products: [
      {
        title: "Ноутбук Apple MacBook Pro 13\" M1 256GB 2020 (MYD82UA/A)",
        imageUrl1: "apple_macbook_pro_13__m1_1.jpg",
        imageUrl2: "apple_macbook_pro_13__m1_256gb_2020_space_gray_images_20678895611.jpg",
        imageUrl3: "apple_macbook_pro_13__m1_256gb_2020_space_gray_images_20678895481.jpg",
        star: "4,2",
        testimonials: "9 отзывов",
        term: "879876",
        available: "13",
        priceCurrent: 47999,
        priceOld: "53 999",
        article: "T1"
      },
      {
        title: "Ноутбук Apple MacBook Pro 16\" 512GB 2019 (MVVJ2UA/A)",
        imageUrl1: "191882146_images_17171766102.jpg",
        imageUrl2: "apple_macbook_pro_13__m1_256gb_2020_space_gray_images_20678895611.jpg",
        imageUrl3: "191882146_images_17171767068.jpg",
        star: "4,4",
        testimonials: "11 отзывов",
        term: "879877",
        available: "6",
        priceCurrent: 82999,
        priceOld: "91 999",
        article: "T2"
      },
      {
        title: "Ноутбук Apple MacBook Pro 13\" Retina 1TB 2020 (MWP52UA/A)",
        imageUrl1: "copy_apple_mwp42ua_a_5eb1a14de2e3e_images_18103535749.jpg",
        imageUrl2: "copy_apple_mwp42ua_a_5eb1a14de2e3e_images_18103535905.jpg",
        imageUrl3: "copy_apple_mwp42ua_a_5eb1a14de2e3e_images_18103535827.jpg",
        star: "4,1",
        testimonials: "14 отзывов",
        term: "879878",
        available: "8",
        priceCurrent: 70999,
        priceOld: "78 999",
        article: "T3"
      },
      {
        title: "Ноутбук Apple MacBook Pro 13\" Retina 512GB 2020 (MWP42UA/A)",
        imageUrl1: "apple_mwp42ua_a_images_18103004533.jpg",
        imageUrl2: "apple_mwp42ua_a_images_18103011733333.jpg",
        imageUrl3: "apple_mwp42ua_a_images_181030045333.jpg",
        star: "4,7",
        testimonials: "9 отзывов",
        term: "879879",
        available: "9",
        priceCurrent: 63999,
        priceOld: "70 999",
        article: "T4"
      },
      {
        title: "Ноутбук Apple MacBook Air 13\" 256GB 2020 (MWTJ2)",
        imageUrl1: "apple_macbook_air_2020_256_space_gray_images_17747545453.jpg",
        imageUrl2: "apple_macbook_air_2020_256_space_gray_images_17747548123.jpg",
        imageUrl3: "apple_macbook_air_2020_256_space_gray_images_17747546119.jpg",
        star: "4,6",
        testimonials: "105 отзывов",
        term: "879880",
        available: "3",
        priceCurrent: 29999,
        priceOld: "33 999",
        article: "T5"
      },
      {
        title: "Ноутбук Apple MacBook Pro 16\" 1TB 2019 (MVVM2UA/A)",
        imageUrl1: "191882167_images_17171766242.jpg",
        imageUrl2: "macbook-2.jpg",
        imageUrl3: "191882167_images_17171767733.jpg",
        star: "4,9",
        testimonials: "35 отзывов",
        term: "879881",
        available: "2",
        priceCurrent: 95999,
        priceOld: "105 999",
        article: "T6"
      },
      {
        title: "Ноутбук Apple MacBook Pro 16\" 1TB 2019 (MVVM2UA/A)",
        imageUrl1: "apple_muhp2_images_17178612585.jpg",
        imageUrl2: "191882174_images_17171768517.jpg",
        imageUrl3: "apple_muhp2_images_17178612984.jpg",
        star: "5",
        testimonials: "8 отзывов",
        term: "879882",
        available: "7",
        priceCurrent: 39999,
        priceOld: "42 999",
        article: "T7"
      },
      {
        title: "Ноутбук Apple MacBook Pro 13\" M1 512GB 2020 (MYD92UA/A)",
        imageUrl1: "apple_macbook_pro_13__m1_1.jpg",
        imageUrl2: "apple_macbook_pro_13__m1_256gb_2020_space_gray_images_20678895611.jpg",
        imageUrl3: "apple_macbook_pro_13__m1_256gb_2020_space_gray_images_20678895481.jpg",
        star: "5",
        testimonials: "1 отзыв",
        term: "879883",
        available: "7",
        priceCurrent: 55999,
        priceOld: "59 999",
        article: "T8"
      },
      {
        title: "Ноутбук Apple MacBook Pro 13\" Retina 256GB 2020 (MXK32UA/A)",
        imageUrl1: "copy_apple_mwp42ua_a_5eb1a14de2e3e_images_18103535749.jpg",
        imageUrl2: "apple_mxk32_a_images_18103270801.jpg",
        imageUrl3: "copy_apple_mwp42ua_a_5eb1a14de2e3e_images_18103535827.jpg",
        star: "4,8",
        testimonials: "35 отзывов",
        term: "879884",
        available: "4",
        priceCurrent: 43999,
        priceOld: "49 999",
        article: "T9"
      },
    ],
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
      if(state.card.length) {
        let isProductExists = false;
        state.card.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++
          }
        });
        if(!isProductExists) {
          state.card.push(product)
        }
      } else {
        state.card.push(product)
      }
    },
    REMOVE_FROM_CARD: (state, index) => {
      state.card.splice(index, 1)
    },
    INCREMENT: (state, index) => {
      if (state.card[index].available > state.card[index].quantity) {
        state.card[index].quantity++;
      }
    },
    DECREMENT: (state, index) => {
      if(state.card[index].quantity > 1) {
        state.card[index].quantity--;
      }
    },
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
    DELETE_FROM_CARD({commit}, index) {
      commit('REMOVE_FROM_CARD', index)
    },

    INCREMENT_CARD_ITEM({commit}, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_CARD_ITEM({commit}, index) {
      commit('DECREMENT', index)
    }
  },
  getters: {
    users: s => s.users,
    tasks: s => s.tasks,
    profiles: s => s.profiles,
    profileById: s => id => s.profiles.find(t => t.id === id),
    taskById: s => id => s.tasks.find(t => t.id === id),

    CARD: s => s.card,
    PRODUCTS: s => s.products
  }
})

