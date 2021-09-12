<template>
  <div class="hello">

    <div
      v-for="p in projs"
      :key="p.name"
    >
      <component v-bind:is="p"/>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Projects',
    data:function() {
      return{

      }
    },
    async beforeMount() {
      this.projs = this.$store.getters.projects
    },
    methods:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
