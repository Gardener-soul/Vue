import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import YouTubeView from '@/views/YouTubeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },{
      path: '/youtube',
      name: 'YouTube',
      component: YouTubeView
    },
  ]
})

export default router
