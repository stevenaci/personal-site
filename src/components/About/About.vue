<template>
  <div class="hello">

<ul>
<li> 
  <table>
<tr>
  <td>
  This page was made with <a :href="hyperlinks.vue">vue.js</a>. 
  </td>
  </tr>
<tr>
  <td>
It is hosted via
<a :href="hyperlinks.nginx">nginx</a> on a 
<a :href="hyperlinks.vultr">vultr.com</a> VPS.
</td>
  </tr>
  </table>

<br>


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
              "vultr":"https://vultr.com",
              "nginx":"https://nginx.org"
              // ,
              // "github":"https://sc3.xyz/cv"
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
a {
  color: #12882f;
}
</style>
