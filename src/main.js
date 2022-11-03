import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import mavonEditor from 'mavon-editor'
import { router } from './router'
import ioUI from '../packages/index'
import 'highlight.js/styles/a11y-light.css'
import 'highlight.js/lib/common'
import highlight from '@highlightjs/vue-plugin'
import './assets/font/iconfont.css'
const app =createApp(App)
app.use(mavonEditor)
app.use(router)
app.use(ioUI)
app.use(highlight)
app.mount('#app')
