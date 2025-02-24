<template>
    <h3>Child component </h3>
    <button v-on:click="getUserName(name)">send user name </button>
</template>

<script>
export default{
    name:"ChildComponent",
    data(){
        return{
            name:"waqas khan",
        }
    },
    props:{
        getUserName:Function,
    }
}
</script>