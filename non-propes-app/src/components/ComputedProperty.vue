<template>
    <h2>computed property</h2>
    <!-- <h4>{{ (dollar*rupess)-discount }}</h4>
    <h4>{{ (dollar*rupess)-discount }}</h4>
    <h4>{{ (dollar*rupess)-discount }}</h4>
    <h4>{{ (dollar*rupess)-discount }}</h4>
    <h4>{{ (dollar*rupess)-discount }}</h4> -->
    <!-- <h4>{{ getResultMethod() }}</h4> 
    <h4>{{ getResultMethod() }}</h4> 
    <h4>{{ getResultMethod() }}</h4> 
    <h4>{{ getResultMethod() }}</h4>  -->
    <h4>{{ getResultComputed }}</h4>  
    <h4>{{ getResultComputed }}</h4>  
    <h4>{{ getResultComputed }}</h4>  
    <h4>{{ getResultComputed }}</h4>  
</template>
<script>
export default{
    name:"ComputedProperty",
    data(){
        return{
            dollar:100,
            rupess:290,
            discount:100,
            
        }
    },
    methods:{
        getResultMethod(){
            return (this.dollar*this.rupess)-this.discount;
        }
    },
    computed:{
        getResultComputed(){
            return (this.dollar*this.rupess)-this.discount;
        }
    }
}
</script>