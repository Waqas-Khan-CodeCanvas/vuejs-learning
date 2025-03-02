<template>
  <router-link to="/" class="links"> Home </router-link>
  <router-link to="/About" class="links"> About </router-link>
  <router-link to="/Contact" class="links"> Contact </router-link>
  <router-link to="/Profile/0's" class="links"> Profile </router-link>
  <router-link to="/Profile/1's" class="links"> Profile </router-link>
  <router-link to="/Profile/2's" class="links"> Profile </router-link>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color: whitesmoke;
}
.links{
  color: blanchedalmond;
  text-decoration: none;
  padding-left: 10px;
}
</style>
