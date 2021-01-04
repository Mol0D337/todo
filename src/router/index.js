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
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth !== "yes") {
          next()
        } else {
          next('/profile')
        }
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/Registration.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        if (userAuth !== "no") {
          next()
        } else {
          next('/profile')
        }
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
      beforeEnter: (to, from, next) => {
        const userAuth = localStorage.getItem('userAuth');
        const userProfile = localStorage.getItem('userProfile');
        if (userAuth === "yes") {
          next()
        } if (userProfile === "yes") {
          next('/profile/info')
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/profile/info',
      name: 'profileInfo',
      component: () => import('../views/ProfileInfo.vue'),
      beforeEnter: (to, from, next) => {
        const userProfile = localStorage.getItem('userProfile');
        if (userProfile === "yes") {
          next()
        } else {
          next('/login')
        }
      }
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
