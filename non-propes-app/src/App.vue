<template>
  <NonProps data="hello props data" nonprops="non props data" />
  <ComputedProperty />
  <WatcherComponent />
  <!-- <SlotsComponent>
      <h3>Hi slots</h3>
      <a href="#">home</a>
    </SlotsComponent>
    <SlotsComponent>
      <img src="https://unsplash.com/photos/a-picture-of-a-money-transferer-and-a-credit-card-HI04JoIfjjc" alt="image">
    </SlotsComponent> -->
  <div class="container">
    <SlotsComponent>
      <template v-slot:header>
        <h3>waqas Khan</h3>
      </template>
      <template v-slot:main>
        <h2>Welcome</h2>
      </template>
      <template v-slot:footer>
        <h3>Footer</h3>
      </template>
    </SlotsComponent>
    <SlotsComponent>
      <template v-slot:header>
        <h3>Zaryab Khan</h3>
      </template>
      <template v-slot:main>
        <h2>Welcome</h2>
      </template>
      <template v-slot:footer>
        <h3>Footer</h3>
      </template>
    </SlotsComponent>
    <SlotsComponent>
      <template v-slot:header>
        <h3>Umair</h3>
      </template>
      <template v-slot:main>
        <h2>Welcome</h2>
      </template>
      <template v-slot:footer>
        <h3>Footer</h3>
      </template>
    </SlotsComponent>
    <SlotsComponent>
      <template v-slot:header>
        <h3>Shayyan</h3>
      </template>
      <template v-slot:main>
        <h2>Welcome</h2>
      </template>
      <template v-slot:footer>
        <h3>Footer</h3>
      </template>
    </SlotsComponent>
  </div>
</template>

<script>
import ComputedProperty from "./components/ComputedProperty.vue";
import NonProps from "./components/NonProps.vue";
import SlotsComponent from "./components/SlotsComponent.vue";
import WatcherComponent from "./components/WatcherComponent.vue";

export default {
  name: "App",
  components: {
    NonProps,
    ComputedProperty,
    WatcherComponent,
    SlotsComponent,
  },
};
</script>

<style>
#app {
  font-family: sans-serif;

  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
