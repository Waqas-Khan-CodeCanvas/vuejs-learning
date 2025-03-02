<template>
    <h1>Profile page</h1>
    <h2>hello world {{profile}}</h2>
  </template>
  <script>
  import {useRoute} from 'vue-router'
  export default{
    name:"ProfileComponent",
    data(){
        return{
            profile:''
        }
    },
    mounted(){
        const route=useRoute();
        this.profile=route.params.name
    }
  }
  </script>
  
  <style scoped>
  h2{
      color: rgb(204, 0, 139);
  }
  </style>