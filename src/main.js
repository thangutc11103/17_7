import { createApp } from 'vue';
import App from './App.vue';



const previousApp = createApp(App);
previousApp.unmount();
const app = createApp(App);

app.mount('#app');
