import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/starships',
    name: 'starships',
    component: () => import('../views/StarshipsView.vue'),
    //
    beforeEnter: (to, from, next) => {
      if (store.state.loggedIn === false) {
        next(false);
        store.commit("swapLoginModal");
      } else {
        next();
      }
    },
  },
  {
    path: '/starships/:id',
    name: 'details',
    component: () => import('../views/StarshipsDetailsView.vue'),
    props: true,
    //
    beforeEnter: (to, from, next) => {
      if (store.state.loggedIn === false) {
        next(false);
        store.commit("swapLoginModal");
      } else {
        next();
      }
    },
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('../views/CharactersView.vue'),
    //
    beforeEnter: (to, from, next) => {
      if (store.state.loggedIn === false) {
        next(false);
        store.commit("swapLoginModal");
      } else {
        next();
      }
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
