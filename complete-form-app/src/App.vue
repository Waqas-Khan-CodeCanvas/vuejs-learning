<template>
  <section class="hero-section">
    <h2>Complete <span> Form </span>With Valdation</h2>
    <div class="form">
      <CompleteForm />
    </div>
  </section>
</template>

<script>
import CompleteForm from "./components/CompleteForm.vue";

export default {
  name: "App",
  components: {
    CompleteForm,
  },
};
</script>

<style scoped>
.hero-section {
  text-align: center;
  color: lightgoldenrodyellow;
  
}
span{
  color: rgb(17, 255, 0);
}

</style>
