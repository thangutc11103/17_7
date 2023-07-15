import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomePage.vue'
import HomeEg1 from './components/HomePageEg1.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/eg1',
      name: 'HomeEg1',
      component: HomeEg1
    },
  ]
})



export default router
