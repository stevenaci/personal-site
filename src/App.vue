<template>
  <div>
    <nav class="nav-bar">
      <router-link class="nav-item med-bg" to="/home">Home</router-link>
      <br>
      <router-link class="nav-item med-bg" to="/cv">CV</router-link>
      <br>
      <router-link class="nav-item med-bg" to="/about">About This Page</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {

  }
}

</script>

<style>

@font-face {
    font-family: Noto;
    src: url("assets/NotoSerifJP-Medium.otf") format("opentype");
}

#app {
  font-family: 'Noto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav-bar{
  border:2px solid #5b8266;
  border-radius: 13px;
  text-align:left;
  width:15%;
  padding-left:2px;
}

@keyframes hoverblink{
    from {background-color: #5b8266;}
  to {background-color:#dff2d8;}
}

.nav-item{
  display: inline-block;
  text-align:left;
  padding-top:10px;
  padding-bottom:10px;
  padding-left:8px;
  width:80%;
  word-spacing:1px;
  border-radius: 13px;
}
.nav-item:hover{
  animation-name: hoverblink;
  animation-duration: .5s;
  animation-iteration-count:infinite;
  animation-direction: alternate;
}

.med-light-bg{
  background-color:#dff2d8;
}
.dark-bg{
  background-color:#353535;
}
.light-bg{
  background-color:#ffe1ea;
}
.med-bg{
  background-color:#5b8266;
}

body{
  background-color:#5b8266;
}


</style>
