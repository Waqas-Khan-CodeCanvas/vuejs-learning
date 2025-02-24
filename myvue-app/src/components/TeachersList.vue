<template>
    <h3>Teachers name is <span style="color: blue;"> {{ name }}</span></h3>
</template>

<script>
export default{
    name:"TeachersList",
    props:{
        name:String,
    }
}
</script>