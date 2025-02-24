<template>
  <h2>Use Reuse Component</h2>
  <ReuseComponent :users="users"/>
</template>

<script>
import ReuseComponent from "./ReuseComponent.vue";

export default {
  name: "UseReuseComponent",
  components: {
    ReuseComponent,
  },
  data() {
    return {
      users: [
        { name: "ali", email: "ali@gmail.com" },
        { name: "zaryan", email: "zaryan@gmail.com" },
        { name: "hasham", email: "hasham@gmail.com" },
        { name: "sajid", email: "sajid@gmail.com" },
        { name: "yaqoob", email: "yaqoob@gmail.com" },
      ],
    };
  },
};
</script>
