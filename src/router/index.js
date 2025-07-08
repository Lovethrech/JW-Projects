import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/SignUpView.vue')
    }
  ],
})

export default router
