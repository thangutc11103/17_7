<template>
    <div>
    <h2>Login</h2>
    <form @submit="login">
        <input type="text" v-model="phone" placeholder="Phone" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios';
import router from '../router';
import store from '../store';

export default {
    data() {
        return {
            phone: '',
            password: ''
        }
    },
    methods: {
        login() {
            const logLoad = {
                phone: this.phone,
                password: this.password
            };

            axios
                .post('https://api.rgvn.shop/v1/rgvn/login', logLoad)
                .then(response => {
                    if (response.data.success) {
                        const user = { phone: this.phone }
                        store.isLoggedIn = true
                        store.user = user
                        router.push('/dashboard')
                    } else {
                        console.log(response.data.message)
                    }
                })
                .catch(error => {
                    console.log(error.data.message)
                    console.error(error)
                })
        },
    },
    
};
</script>
