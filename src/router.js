import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Residential from './views/Residential.vue'
import Commercial from './views/Commercial.vue'
import Booking from './views/Booking.vue'

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
      path: '/residential',
      name: 'residential',
      component: Residential
    },
    {
      path: '/commercial',
      name: 'commercial',
      component: Commercial
    },
    {
      path: '/powerwash',
      name: 'Powerwash',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "commercial" */ './components/common/Powerwash.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      component: Booking
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
      path: '/contact',
      name: 'ContactUs',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/common/ContactUs.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import(/* webpackChunkName: "privacy" */ './views/Privacy.vue')
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import(/* webpackChunkName: "terms" */ './views/Terms.vue')
    }
  ]
})
