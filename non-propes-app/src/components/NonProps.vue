<template>
    <h2>Child Component</h2>
    <div>
        <h3>{{ data }}</h3>
        <h3>Home</h3>
        <h3>About</h3>
        <h3 v-bind="$attrs" >Contact</h3>
    </div>
</template>

<script>
export default{
    name:"NonProps",
    inheritAttrs:false,
    props:{
        data:String,
    }
}
</script>