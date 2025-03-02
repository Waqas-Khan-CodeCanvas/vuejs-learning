<template>
  <h2>Hello GET API's</h2>
  <ul class="item" v-for="item in list" :key="item">
    <li class="item-li"><img :src="item.avatar" alt="image"></li>
    <li class="item-li">Id is : {{ item.id }}</li>
    <li class="item-li">First Name is : {{ item.first_name }}</li>
    <li class="item-li">Email is : {{ item.email }}</li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "GetApi",
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.log("Result = ", result.data.data);
    this.list = result.data.data;
  },
};
</script>
<style scoped>
.item{
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  background-color:#30797e;
  color: antiquewhite;
}
.item-li{
  padding: 5px;
  width: 250px; 
}
.item-li img{
  height: 80px;
}
</style>
