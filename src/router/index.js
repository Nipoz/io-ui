import { createRouter,createWebHashHistory } from 'vue-router'
import routerPage from './routerPage/page'

export const router = createRouter({
    history:createWebHashHistory(),
    routes: [...routerPage]
})

router.afterEach((to,from) => {
    //console.log(to,from)
})