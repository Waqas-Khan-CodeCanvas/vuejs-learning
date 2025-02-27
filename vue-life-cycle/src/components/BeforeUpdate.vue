<template>
    <h3>Before Update</h3>
    <h1 ref="count">
    {{ counter }}<br/>
    </h1>
    <button @click="counter =counter+1">count</button>
</template>
<script>
export default{
    name:"BeforeUpdate",
    data(){
        return{
            counter:0,
        }
    },
    beforeUpdate(){
        console.log("BeforeUpdate= ",this.$refs['count'].textContent);
    },
    updated(){
        console.log("Update= ",this.$refs['count'].textContent);
    }

}
</script>
