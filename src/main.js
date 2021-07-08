import App from './App.vue'
import { createApp } from 'vue'

import { store } from './store.js'
import { router } from './router.js'

const app = createApp(App)

document.title = "S C 2021"
app.use(router)
app.use(store)
app.mount('#app')