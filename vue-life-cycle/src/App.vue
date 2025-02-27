<template>
  <h2>Home page</h2>
  <BeforeCreated/>
  <BeforeMounted/>
  <BeforeUpdate/>
</template>

<script>
import BeforeCreated from './components/BeforeCreated.vue';
import BeforeMounted from './components/BeforeMounted.vue';
import BeforeUpdate from './components/BeforeUpdate.vue';


export default {
  name: 'App',
  components: {
    BeforeCreated,
    BeforeMounted,
    BeforeUpdate,
  }
}
</script>



