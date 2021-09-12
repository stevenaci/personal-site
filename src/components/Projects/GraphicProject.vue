<template>
  <div class="project">

	<table>
		<tr>

			<h2>Procedural Art </h2>
		</tr>
		<tr>
			<img :src="img1"/>
		</tr>
	</table>
	</div>
	</template>

<script>
export default {
    name: 'GraphicProject',
    props: {
			proj_name:String,
			proj_description:String
    },
    data:function(){
			//tags:["graphics","procedural art"]
				return {
					img1:require('@/assets/logo.png')
			}
    },
    async beforeMount() {
      this.projs = this.$store.getters.projects
    },
    methods:{

    }
}
</script>

<style scoped>


</style>
