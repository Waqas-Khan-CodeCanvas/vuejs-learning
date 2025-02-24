<template>
  <!-- <input type="text" name="" id="" v-model="count"> -->
  <!-- <h2>{{count}}</h2> -->
   <br/>
  <input type="text" placeholder="Enter your email" v-model="email" /><br />
  <input type="password" placeholder="Enter your password" v-model="password"/><br />
  <button v-on:click="getData()">Get Data</button>
</template>

<script>
export default {
  name: "FormInput",
  data() {
    return {
      count: 0,
      email:null,
      password:null,
    };
  },
  methods: {
    getData() {
      console.log("Get Data",this.email,this.password)
      this.email=null,
      this.password=null
    },
  },
};
</script>
