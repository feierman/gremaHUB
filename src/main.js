import '/public/css/common.css'
import '/public/css/destyle.min.css'
import '/public/font/iconfont.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
