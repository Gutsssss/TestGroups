import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

createApp(App).use(router).use(PrimeVue).mount('#app')
