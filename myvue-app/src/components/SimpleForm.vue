<template>
  <h2>Simple Form</h2>

  <label for="email">Email : </label>
  <input
    type="email"
    placeholder="Enter your email"
    id="email"
    v-model="form.email"
  /><br /><br />
  <h1>{{ form.email }}</h1>
  <label for="password">Email</label>
  <input
    type="password"
    placeholder="Enter your password"
    id="passowrd"
    v-model="form.password"
  /><br />
  <h2>{{ form.password }}</h2>

  <button v-on:click="sendData">Submit</button>
</template>

<script>
export default {
  name: "SimpleForm",
  data() {
    return {
      // form:{
      //     email:'fads',
      //     passowrd:'asfda',
      // }
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods:{
  sendData(){
      console.log(this.form.email);
      console.log(this.form.password);
  }
  }
};
</script>
