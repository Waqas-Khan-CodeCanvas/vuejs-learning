<template>
    <h2>Befor Created</h2>
    <p>{{ name }}</p>
</template>

<script>
export default {
    name:"BeforeCreated",
    created(){
        // alert("created")
        this.name="zaryab khan",
        console.log("creat")
    },
    data(){
       return{
        name:"waqas khan",
       }
    },
  
    beforeCreate(){
        this.name="ali khan"
        alert("befor create")
        console.log("before");
    },
   
}
</script>