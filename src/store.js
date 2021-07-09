
import { createStore } from 'vuex'
import {github_userdata, github_repodata} from './api.js'

export const store = createStore({
    state () {
      return {
        github:{
          user:{},
          repos:[]
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
      console.log(state.github.repos)
      return state.github.repos;
      },
      // repos_forked: state=>{
      //   console.log(state.github.repos)
      //   return state.github.repos.filter((x) => x.fork == true);
      // },
      // repos_op: state=>{
      //   return state.github.repos.filter((x) => x.fork == false);
      // }

    }
  });