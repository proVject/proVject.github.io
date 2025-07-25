import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [
    { path: '/', component: HomeView },
]

export default createRouter({
    history: createMemoryHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth', // або 'auto'
            }
        }
        return { top: 0 }
    }
})