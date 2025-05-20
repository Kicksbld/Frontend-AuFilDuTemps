import './assets/main.css'
import panZoom from 'vue-panzoom'
import api from './api/api'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(panZoom)
app.use(createPinia())
app.use(router)
app.config.globalProperties.$api = api

app.mount('#app')
