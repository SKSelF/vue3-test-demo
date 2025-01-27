import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/mobile',
      name: 'mobile',
      component: () => import('@/views/mobile/MobileLayout.vue'),
      redirect: '/mobile/home',
      children: [
        {
          path: '/mobile/home',
          name: 'mobile-home',
          component: () => import('@/views/mobile/MobileHome.vue')
        }
      ]
    }
  ]
})

export default router
