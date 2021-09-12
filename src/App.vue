<template>
  <div>
    <nav>

      <RouteCap routeto="/git" text="github"/>
      <!-- <RouteCap routeto="/projects" text="projects"/> -->
      <RouteCap routeto="/about" text="about the site"/>

    </nav>
    <router-view class="window"></router-view>

  </div>
</template>
<script>
import RouteCap from './components/Shared/RouteCapsule.vue'

export default {
  name: 'App',
  components: {
    RouteCap
  }
}

</script>

<style>

@font-face {
    font-family: Noto;
    src: url("assets/NotoSerifJP-Medium.otf") format("opentype");
}
.tr{
  
  border: 2x solid var(--drk-ceru);
  text-align:center;
}
:root{
  --pale-grn:#dff2d8;
  --olive-grn:#5b8266;
  --pale-blu:#acb0eb;
  --palr-blu:#c7c8da;
  --drk-ceru:#45448f;
  --vdrk-ceru:#292855;
  --drk-blu:#2c303d;
  --drk-sefoam:#2c3e50;
}

#app {
  
  font-family: 'Noto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow:hidden;
  color: var(--drk-ceru);

  font-size: 0.8em;
}

td {
  border: 2px solid var(--pale-blu);

}
.noborder{
  border:0px solid black;
}
table{
  background-color: inherit;
}
nav{
  border:2px solid var(--pale-blu);
  width:fit-content;
  font-size:1.2em;
  position:absolute;
  left:4%;
  top:4%;
}

@keyframes blink{
  0% {background-color: var(--palr-blu)}
  50% {background-color: var(--pale-blu)}
  100% {background-color: var(--palr-blu)}
}
h2 {
  text-align:left;
  color:var(--dark-ceru)
}
ul {
  list-style-type: none;
  text-align:left;
}

.highlight{
  color: var(--olive-grn);
}

.highlight_rollover:hover{
  background-color:var(--palr-blu);
  animation: 5s infinite linear blink;
}
.window{
  padding-top:5%;
  display: inline-block;
  margin: 0 5px;
  width:40%;
}

.blink{
  animation: 5s infinite linear blink;
}
button{
  background-color:var(--pale-blu);
  width: 100%;
  color: var(--vdrk-ceru);
  border: 0x none var(--drk-ceru);
}
input{
    background-color:var(--palr-blu);
}
body{
  background-color:var(--palr-blu);
}
a {
  color: var(--olive-grn);
}

</style>
