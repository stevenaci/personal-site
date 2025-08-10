<template>
  <div class="hello">
<Home/>
  <ul>
    <h3>Thanks for visiting,</h3>
    email: <div class="highlight"> stevenalexcarino@gmail.com </div>
  </ul>

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
