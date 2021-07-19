<template>
  <div class="hello">
<Home/>
<li> 


  <ul>
     <h3>Thanks for visiting,</h3>
    If you're interested in working with me please send me an email: <div class="highlight"> stevenalexcarino@gmail.com </div>
  </ul>
  <ul>
  <h3> Libraries used on this site:</h3>
    <a :href="hyperlinks.vue">Vue.js</a>
    <br>
    <a :href="hyperlinks.nginx">Nginx</a> 
    <br>
    <a :href="hyperlinks.debian">Debian 10</a>
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
              "nginx":"https://nginx.org",
              "debian":"https://www.debian.org"
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
