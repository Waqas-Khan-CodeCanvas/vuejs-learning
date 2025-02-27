<template>
  <h1 :class="applyStyle">hello world</h1>
  <button v-on:click="applyColor = !applyColor">change color</button>
</template>

<script>
export default {
  name: "CssBinding",
  data() {
    return {
      applyColor: true,
    };
  },
  computed:{
    applyStyle(){
        return{
            color:this.applyColor,
            err:true,
            other:false,
        }
    }
  }
};
</script>

<style scoped>
.color {
  color: rgb(65, 65, 65);
  background-color: gold;
  width: 20%;
  text-align: center;
}
.err{
    color: red;
    border: 2px solid blueviolet;
    width: 20%;
}
.other{
    font-size: 50px;
    font-family: sans-serif;
    cursor: pointer;
}
</style>

