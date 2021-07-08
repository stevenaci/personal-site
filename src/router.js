import { createWebHistory, createRouter} from 'vue-router'
import Home from './components/Home/Home.vue'
import About from './components/About/About.vue'
import Github from './components/CV/Github.vue'


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component: Home
        },
        {
          path:'/git',
          component: Github,
        },
        {
          path:'/about',
          component: About,
        },
        {
          path:'/*',
          component: Home
        }
    ]
})