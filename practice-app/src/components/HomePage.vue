<template>
    <h1>hello world</h1>
    <div v-html="tag"></div>
    <div v-html="tag1"></div>
</template>

<script>
export default{
    name:"HomePage",
    data(){
        return{
            tag:"<h2>this is binding tag</h2>",
            tag1:"<h2>this is second tag and this is also binded to vue.js </h2>",
        }
    }
}
</script>
