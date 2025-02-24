<template>
    <h1 v-on:mouseover="hover">Mouse Over</h1>
    <h1>Email {{ email }}</h1>
    <h1>number {{ number }}</h1>
    <h1>Name {{ getName("ali") }}</h1>
    <button v-on:click="click">click</button>
    <button v-on:dblclick="dbclick" >Double click</button>
    <button v-on:click="getCount" >Count {{ count }}</button>
</template>

<script>
export default{
    name : "HomePage",
    data(){
        return{
            email:"waqas@gmail.com",
            number:3454640859,
            count:0,
            getName: function(params) {
                return params
            }
        }
    },
    methods:{
        hover(){
            console.log("mouse Over");
        },
        click(){
            alert("click");
        },
        dbclick(){
            alert("Double click");
        },
        getCount(){
            this.count++
        }
    }
}
</script>

<style>
h1{
    color: orange;
}
</style>