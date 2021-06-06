<template>
  <div class="hello">
    <h2>about the site</h2>
<ul>
<li> I made this page with the help of <a :href="hyperlinks.vue">vue.js</a> and javascript. The source code is on my <a :href="hyperlinks.github">github</a>.
<br>
Its being served via
<a :href="hyperlinks.nginx">nginx</a> on a 
<a :href="hyperlinks.vultr">vultr.com</a> VPS.

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
              "nginx":"https://nginx.org",
              "github":"https://sc3.xyz/cv"
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
