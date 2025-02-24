<template>
    <h2>hello complete form</h2>
    <label for="email">Email : </label>
    <input type="email" placeholder="Enter your email" id="email" required v-model="from.email"><br/><br/>

    <label for="password">Password : </label>
    <input type="password" placeholder="Enter your passowrd" id="password" required v-model="from.password"><br/><br/>

    <label for="contry">Select your contry : </label>
    <select name="contry" id="contry" v-model="from.contry">
        <option value="Pak">Pak</option>
        <option value="In">In</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
    </select><br/><br/>

    <h4>Gender</h4>
    <input type="radio" name="gender" id="male" value="male" v-model="from.gender">
    <label for="male">Male : </label>
    <input type="radio" name="gender" id="female" value="female" v-model="from.gender">
    <label for="female">Female : </label>
    <input type="radio" name="gender" id="others" value="others" v-model="from.gender">
    <label for="others">Others : </label>

    <h4>Technoloies</h4>
    <label>Java : </label>
    <input type="checkbox" value="java" v-model="from.technologies"><br/><br/>
    <label >Node : </label>
    <input type="checkbox"  value="node" v-model="from.technologies">

    <button v-on:click="login" >Submit</button>

 <h5>{{ from }}</h5>
</template>

<script>
export default{
    name:"CompleteForm",
    data(){
        return{
            from:{
                email:"",
                password:"",
                contry:"",
                gender:"",
                technologies:[],
            }
        }
    },
    methods:{
        login(){
            console.log(this.from);
        }
    }

}
</script>