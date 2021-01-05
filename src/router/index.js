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
      path: '/registration',
      name: 'registration',
      component: () => import('../views/Registration.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth !== "yes" || userAuth === "no") {
          next()
        } else {
          next('/profile')
        }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileAllModuls.vue'),
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
