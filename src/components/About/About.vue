<template>
  <div class="hello">
<Home/>
<li> 
   <h2> About the site:</h2>
  <ul>
  This page was made with my javascript framework of choice, <a :href="hyperlinks.vue">Vue.js</a>.
  </ul>
  <ul>
Its hosted with plain
<a :href="hyperlinks.nginx">Nginx</a> on a 
Debian 10 VPS. 
 </ul>
</li>
  </div>
</template>

<script>
import Home from './../Home/Home.vue'
export default {
  name: 'About',
  props: {
    msg: String
  },
  components:{
    Home
  },
  data: function(){
      return{
          hyperlinks:{
              "vue":"https://v3.vuejs.org/guide/migration/introduction.html#overview",
              "vultr":"https://vultr.com",
              "nginx":"https://nginx.org"
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
