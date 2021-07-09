<template>
  <div>
    <nav>

      <RouteCap routeto="/git" text="github"/>

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
  border: 2px solid var(--palr-blu);

}
table{
    background-color: inherit;
    border-collapse:collapse;
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
}
ul {
  list-style-type: none;
  text-align:left;
}
li {
  display: inline-block;
  margin: 0 10px;
  width:40%;
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
