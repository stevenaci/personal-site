<template>
  <div class="hello">

<li>
 <h2> About me:</h2>
  <ul>
    I'm a software developer from Canada, with a previous background as a Technical Artist. The software advances in 3d and Digital Art Production have been my inspiration. 
    I want to make tools that enable people to do amazing things.
  </ul>
  <ul>
    Right now this page is just a frontend for my github.com, but I'll be adding links to some of my other projects and webpages soon.
  </ul>
  <ul>
    If you're interested in working with me, please contact me: <div class="highlight"> stevenalexcarino@gmail.com </div>
  </ul>
</li>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
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
