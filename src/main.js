import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import router from "@/router";
import 'bootstrap-icons/font/bootstrap-icons.css'



createApp(App).use(router).mount('#app')
