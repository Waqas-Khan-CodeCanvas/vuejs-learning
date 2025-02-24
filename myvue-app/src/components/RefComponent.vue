<template>
    <h4>Ref in Vue.js</h4>
    <input type="text" ref="input">
    <button v-on:click="getData">Send data</button>
</template>

<script>
export default{
    name:"RefComponent",
    props:{
        name:String,
    },
    methods:{
        getData(){
            this.$refs.input.focus();
            this.$refs.input.style.color="red";
            let val=this.$refs.input.value;
            console.log(val);
        }
    }
}
</script>