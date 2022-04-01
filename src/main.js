import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps' 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)
app.use(router)
app.use(VueGoogleMaps, {
    load: {
        key: import.meta.env.VITE_MAPS_KEY
    }
})
app.mount('#app')

