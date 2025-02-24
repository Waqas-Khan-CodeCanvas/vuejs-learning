<template>
    <h2>conditional Statments in Vue.js</h2>
    <h3 v-if="show">if Block of code</h3>
    <h3 v-else>else Block of code</h3>
    <button v-on:click="show=!show">toggle</button>
</template>

<script>

export default{
    name:"CondilionalStatments",
    data(){
        return{
            show:true,
        }
    }
}
</script>