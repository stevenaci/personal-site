<template>
  <div>
    <router-link 
    class="nav-item highlight"
    :to=routeto
    >
      {{text}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RouteCap',
  props: {
    routeto: String,
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav-item{
  display:inline;
  text-decoration:none;
  text-align:left;
  padding-left:8px;
  padding-right:8px;

  color: var(--drk-ceru);
  font-size: 0.8em;
}



</style>
