import { createApp } from 'vue'
import App from './App.vue'
import i18n, {loadLocaleMessages} from './plugins/i18n.js'
import { registerSW } from 'virtual:pwa-register'
import router from './routes/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'

(async() => {
    registerSW()
    const savedLocale = localStorage.getItem('locale') || 'en';
    await loadLocaleMessages(savedLocale)

    const app = createApp(App)
    app.use(i18n)
    app.use(router)
    app.use(ElementPlus)
    app.mount('#app')
})()

