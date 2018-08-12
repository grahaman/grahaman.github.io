import Vue from 'vue'
import Router from 'vue-router'

const Dashboard = () => import('@/views/Dashboard.vue')
const Renly = () => import('@/views/Renly.vue')

Vue.use(Router)

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/renly',
            name: 'Renly',
            component: Renly
        }
    ]
})

export default router