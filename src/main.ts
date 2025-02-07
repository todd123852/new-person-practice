import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
// 引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
// 引入pinia
import { createPinia } from 'pinia'
import axios from 'axios'
const pinia = createPinia()
// 创建 pinia
const app = createApp(App)
// 安装 pinia
app.use(pinia)
app.use(router)
app.mount('#app')
