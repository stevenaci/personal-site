<template>
  <div class="hello">
<ul>
<li>
This webpage was made using the
<a href={{hyperlinks.vue}}>Vue.js</a> 
framework. 
<br>
It is running on a Debian 10 instance I've deployed with
<a href={{hyperlinks.vultr}}>Vultr Cloud Hosting</a>


</li>
</ul>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  },
  data: function(){
      return{
          hyperlinks:{
              "vue":"https://v3.vuejs.org/guide/migration/introduction.html#overview",
              "vultr":"https://vultr.com"
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
