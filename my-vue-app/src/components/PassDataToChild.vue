<template>
    <h2>Pass Data From Parent To Child</h2>
    <h3>Child {{ msg }} </h3>
    <h4>{{ user.name }} and {{ user.email }}</h4>
    <button v-on:click="getData" >Call Function</button>
</template>

<script>
export default{
    name:"PassDataToChild",
    props:{
        msg:String,
        user:Object,
        getData:Function,
    }
}
</script>