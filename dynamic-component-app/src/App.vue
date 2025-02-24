<template>
  <!-- <JavaComponent />
  <LaravelComponent />
  <PhpComponent /> -->
  <h2>Dynamic components</h2>
  <button @click="tab = 'JavaComponent'">Load Java</button>
  <button @click="tab = 'PhpComponent'">Load php</button>
  <button @click="tab = 'LaravelComponent'">Load laravel</button>

  <component :is="tab" />
  <teleport to='#footer'>
    <FooterComponent />
  </teleport>
</template>

<script>
import FooterComponent from './components/Footer.vue';
import JavaComponent from './components/JavaComponent.vue';
import LaravelComponent from './components/LaravelComponent.vue';
import PhpComponent from './components/PhpComponent.vue';

export default {
  name: 'App',
  components: {
    JavaComponent, LaravelComponent, PhpComponent, FooterComponent
  },
  data() {
    return {
      tab: 'JavaComponent',
    }
  }
}
</script>
