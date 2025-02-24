<template>
    <h2>Watcher Component</h2>
    <h3>{{ count }}</h3>
    <button @click="count=count+1"> + </button>
    <button @click="count=count-1"> - </button>
</template>

<script>
export default{
    name:"WatcherComponent",
    data(){
        return{
            count:0,
        }
    },
    watch:{
        count(val,pre){
            if(val > 5 && val>pre){
                alert("please Stop this ");
            }
        }
    }
}
</script>