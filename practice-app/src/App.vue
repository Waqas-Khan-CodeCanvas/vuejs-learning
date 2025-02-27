<template>
  <HomePage/>
  <CssBinding/>
</template>

<script>
import CssBinding from './components/CssBinding.vue';
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    CssBinding,
  }
}
</script>

