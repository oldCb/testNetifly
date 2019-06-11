import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Exercices from './views/Exercices.vue'
import Kanye from './views/Kanye'
import Github from './views/Github'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/Exercices',
      name: 'exercices',
      component: Exercices
    },
    {
      path: '/Kanye',
      name: 'kanye',
      component: Kanye
    },
    {
      path: '/Github',
      name: 'github',
      component: Github
    }
  ]
})
