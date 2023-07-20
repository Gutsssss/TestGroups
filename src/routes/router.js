import { createRouter, createWebHashHistory } from "vue-router";
import AboutMe from '../components/AboutMe.vue'
import TeamsTest from '../components/TeamsTest.vue'
 
const routes = [
    {
        path: '/' ,
        name:"about",
        component: AboutMe
    },
    {
        path:'/teams',
        name:'TeamsTest',
        component: TeamsTest,
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router