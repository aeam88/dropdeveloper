import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cursos from './views/Cursos.vue'
import Tutoriales from './views/Tutoriales.vue'
import Planes from './views/Planes.vue'
import Articulos from './views/Articulos.vue'

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
      path: '/cursos',
      name: 'cursos',
      component: Cursos
    },
    {
      path: '/tutoriales',
      name: 'tutoriales',
      component: Tutoriales
    },
    {
      path: '/planes',
      name: 'planes',
      component: Planes
    },
    {
      path: '/articulos',
      name: 'articulos',
      component: Articulos
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
