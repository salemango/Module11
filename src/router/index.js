import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: 'AboutPage' */ '../views/AboutPage.vue')
    },
    {
      path: '/contact-me',
      name: 'contact-me',
      component: () => import(/* webpackChunkName: 'ContactMePage' */ '../views/ContactMe.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: 'PageNotFound' */ '../views/NotFound.vue')
    }
  ],
  linkActiveClass: 'active-link'
})

export default router