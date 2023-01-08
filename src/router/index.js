import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/starships',
    name: 'starships',
    component: () => import('../views/StarshipsView.vue')
  },
  {
    path: '/starships/:id',
    name: 'details',
    component: () => import('../views/StarshipsDetailsView.vue'),
    props: true
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('../views/CharactersView.vue')
  },
  /*{
    path: '/starships/detailsActors',
    name: 'detailsActors',
    component: () => import('../views/DetailsActorsView.vue')
  }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
