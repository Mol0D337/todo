import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/MainPage.vue')
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: () => import('../views/Quotes.vue')
    },
    {
      path: '/entry',
      name: 'entry',
      component: () => import('../views/Entry.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/Create.vue')
    },

    {
      path: '/list',
      name: 'list',
      component: () => import('../views/List.vue')
    },
    {
      path: '/task/:id',
      name: 'task',
      component: () => import('../views/Task.vue')
    }
  ]
})
