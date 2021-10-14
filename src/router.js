import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('./views/Index.vue')
const Page1 = () => import('./views/Page1.vue')
const Page2 = () => import('./views/Page2.vue')
const Page3 = () => import('./views/Page3.vue')


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/page1',
            name: 'page1',
            component: Page1
        },
        {
            path: '/page2',
            name: 'page2',
            component: Page2
        },
        {
            path: '/page3',
            name: 'page3',
            component: Page3
        },
    ]
})