<template>
    <div>
        hi
        <div v-html="reurl" ></div>

    </div>
  </template>
  
  <script>
  import resumecontent from './src/components/CV/resume.js'
  
  export default {
    name: 'Resume',
    props: { 
      msg: String
    },
    data: function(){
        return{
                "reurl": resumecontent
            
        }
    },
    async created(){
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
  