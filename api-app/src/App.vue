<template>
  <img alt="Vue logo" src="./assets/logo.png"><br>
  <router-link class="links" to="/">Home</router-link>
  <router-link class="links" to="/GetApi">GetApi</router-link>
  <router-link class="links" to="/PostApi">PostApi</router-link>
  <router-view></router-view>
  
  
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style >
#app{
  text-align: center;
}
.links{
  text-decoration: none;
  padding: 10px;
  background-color: antiquewhite;
  margin-left: 5px;
  border-radius: 5px;
}
</style>
