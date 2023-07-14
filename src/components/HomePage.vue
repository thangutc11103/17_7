<template>
    <div>
        <h1>Home</h1>
        <p v-if="isAuthenticated">Welcome! You are logged in.</p>
        <div v-else>
            <p>Please login to access this page.</p>
            <router-link to="/login">LOGIN</router-link>
        </div>
        <button @click="logout" v-if="isAuthenticated">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      isAuthenticated() {
        return localStorage.getItem('isAuthenticated') === 'true';
      },
    },
    methods: {
      logout() {
        localStorage.removeItem('isAuthenticated');
      },
    },
  };
  </script>
  