
import { createStore } from 'vuex'
import {  github_userdata, github_repodata  } from './api.js'
import GraphicProject from './components/Projects/GraphicProject.vue'
import { shallowRef} from 'vue'

export const store = createStore({
    state () {
      return {
        github:{
          user:{},
          repos:[]
        },
        projects:{
          'GraphicProject': shallowRef(GraphicProject)
        }
      }
    },
    mutations: {
      async update_github(state) {
        const username = "stevenaci"
        state.github.user = await github_userdata(username)
        state.github.repos = await github_repodata(username)
        return false;
      }
    },
    getters:{
        // Build store
      github: state=> {
        return state.github;
      },
      github_user: state=> {
        return state.github.user;
      },
      repos: state=>{
        
        return state.github.repos;
      },
      projects: state=>{
        return state.projects;
      }
    }
  });