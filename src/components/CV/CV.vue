<template>
  <div class="hello">
<ul>
<li>
<resume/>
<br>
</li>
</ul>
  </div>
</template>

<script>

import Resume from './Resume.vue'
export default {
  name: 'CV',
  components: {
    resume:Resume
  },
  props: {
    msg: String
  },
  data: function(){
      return{
          links:{
              "github":"https://v3.vuejs.org/guide/migration/introduction.html#overview",
              "posedetection":""
          }
      }
  },
  async created(){
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
