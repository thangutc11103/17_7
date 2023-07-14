import { createApp } from 'vue';
import App from './App.vue';
import router  from './router';


const previousApp = createApp(App);
previousApp.unmount();
const app = createApp(App);


app.use(router);
app.mount('#app');
