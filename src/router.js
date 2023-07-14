import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomePage.vue'
import Dashboard from './components/DashboardEg.vue'
import Login from './components/LoginEg.vue'
import store from './store'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    if (!store.state.isLoggedIn) {
      // Người dùng chưa đăng nhập, chuyển hướng về trang đăng nhập
      next('/login')
    } else {
      // Người dùng đã đăng nhập, cho phép truy cập vào trang Dashboard
      next()
    }
  } else {
    // Route không yêu cầu xác thực đăng nhập, cho phép truy cập bình thường
    next()
  }
})

export default router
