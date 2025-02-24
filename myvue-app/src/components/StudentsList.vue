<template>
    <h3>Students name is <span style="color: red;"> {{ name }}</span></h3>
</template>

<script>
export default{
    name:"StudentsList",
    props:{
        name:String,
    }
}
</script>