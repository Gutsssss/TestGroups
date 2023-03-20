import { createRouter, createWebHashHistory } from "vue-router";
import AboutMe from '../components/AboutMe.vue'
import TeamsTest from '../components/TeamsTest.vue'


const routes = [
    {
        path: '/' , component: AboutMe
    },
    {
        path:'/teams', component: TeamsTest
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router