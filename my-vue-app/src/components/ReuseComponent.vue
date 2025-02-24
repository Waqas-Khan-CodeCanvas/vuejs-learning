<template>
    <h2>Reuse Component</h2>
    <ul>
        <li v-for="(item) in users" :key="item">
            {{ item.name }} and {{ item.email }} 
            <button v-on:click="callName(item.email)">Call {{ item.name }}</button>
        </li>
    </ul>
</template>

<script>
export default{
    name:"ReuseComponent",
    props:{
        users:Object,
    },
    methods:{
        callName(item){
            alert(item)
        }
    }
}
</script>