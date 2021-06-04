import App from './App.vue'
import { createApp } from 'vue'
//import { createStore } from 'vuex'
import { createWebHistory, createRouter} from 'vue-router'
import Home from './components/Home/Home.vue'
import About from './components/About/About.vue'
import CV from './components/CV/CV.vue'

// const store = createStore({
//     state () {
//       return {
//         // Build store
//         buildOrder:[],

//         // Bot store
//         // Match
//         players: [],
//         matches:[]
//       }
//     },
//     mutations: {
//       // Build store
//       addToBuild(state, data){
//         console.log(data)
//         state.buildOrder.push(data)
//       },
//       // Match
//       addMatch (state, data) {
//         state.matches.push(data);
//       }
//     },
//     getters:{
//         // Build store
//       example: state=> {
//         return state.exampleData;
//       },
//         // Match
//       match(state, player){
//         let filtered = None;
//         return None;
//       }
//     }
//   })

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component: CV
        },
        {
          path:'/home',
          component: Home,
        },
        {
          path:'/cv',
          component: CV,
        },
        {
          path:'/about',
          component: About,
        }
    ]
})
const app = createApp(App)

app.use(router)
//app.use(store)
app.mount('#app')