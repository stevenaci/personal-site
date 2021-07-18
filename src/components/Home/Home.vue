<template>
  <div class="hello">

<li>
 <h2> About me:</h2>
  <ul>
    I'm a software developer from Canada, with a previous background as a Technical Artist. The software advances in 3D and Digital Art Production were my inspiration 
    to become a developer. I've been able to work alongside art teams, developing tools, API's, and deploying render farm environments. 
    I've also worked for a 
    <a href="https://ecosinfo.ca/">start-up IOT company</a>
    
    , where I developed a mesh network solution to deliver data streams from embedded devices to a central backend.
  </ul>
  <ul>
    Thanks for visiting my page,
    If you're interested in working with me please send me an email: <div class="highlight"> stevenalexcarino@gmail.com </div>
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

</style>
