<template>
  <div>
    <h2>Dashboard</h2>
    <p>Welcome, {{ user.username }}!</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import store from '../store'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const user = store.user

    const logout = () => {
      store.isLoggedIn = false
      store.user = null
      router.push('/login')
    }

    return {
      user,
      logout
    }
  }
}
</script>
