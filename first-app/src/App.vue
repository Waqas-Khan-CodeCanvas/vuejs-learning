<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: blue;
}
</style>
