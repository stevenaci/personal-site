<template>
  <div>
    <nav>
      <table>
        <tr>
          <td>
      <RouteCap routeto="/home" text="Home"/>
          </td>
          <td>
      <RouteCap routeto="/cv" text="CV"/>
          </td>
          <td>
      <RouteCap routeto="/about" text="About this page"/>
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
  color: var(--drk-ceru);

  font-size: 0.8em;
}

td {
  border: 2px solid var(--palr-blu);
  overflow:scroll;
}

nav{

  border:2px solid var(--pale-blu);
  display:inline-block;
  width:auto;
  font-size:1.2em;
}

@keyframes hoverblink{
    from {background-color: var(--olive-grn);}
  to {background-color: var(--pale-grn)}
}

.highlight:hover{
  background-color:var(--palr-blu)

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

</style>
