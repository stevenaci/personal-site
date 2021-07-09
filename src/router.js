import { createWebHistory, createRouter} from 'vue-router'

import About from './components/About/About.vue'
import Github from './components/CV/Github.vue'


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component: Github
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
          component: Github
        }
    ]
})