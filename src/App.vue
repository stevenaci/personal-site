<template>
  <div>
    <nav>
      <table>
        <tr>
          <td>
      <RouteCap routeto="/home" text="home"/>
          </td>
          <td>
      <RouteCap routeto="/cv" text="github"/>
          </td>
          <td>
      <RouteCap routeto="/about" text="about the site"/>
          </td>
          </tr>
        </table>
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
  --palr-blu:#eeefff;
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
    border-collapse:collapse;
}
nav{

  border:2px solid var(--pale-blu);
  display:inline-block;
  width:auto;
  font-size:1.2em;
}

@keyframes blink{
  0% {background-color: var(--palr-blu)}
  50% {background-color: var(--pale-blu)}
  100% {background-color: var(--palr-blu)}
}


.highlight:hover{
  background-color:var(--palr-blu);
  animation: 5s infinite linear blink;
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
  background-color:var(--pale-blu);
  
}

</style>
