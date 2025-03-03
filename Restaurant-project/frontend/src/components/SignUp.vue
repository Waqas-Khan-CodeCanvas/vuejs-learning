<template>
    <div class="form">
        <h2>SignUp</h2>
        <input type="text" placeholder="Enter Name" v-model="name">
        <input type="email"  placeholder="Enter Email" v-model="emial">
        <input type="password"  placeholder="Enter Password" v-model="pass">
  <button @click="signUp">SignUp</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SignUp",
  data(){
    return{
        name:"",
        emial:"",
        pass:""
    }
  },
  methods: {
        async signUp(){
            console.log("object",this.name,this.emial,this.pass);
            let resutl=await axios.post("",{
                name:this.name,
                email:this.emial,
                password:this.pass
            });
            console.log("result = ",resutl);
        }
    },

};
</script>

<style>
.form{
    text-align: center;
}
h2{
    font-size: 30px;
    color: lightskyblue;
}
input{
    height: 27px;
    width: 320px;
    padding: 5px;
    border: 1px solid lightskyblue;
    font-size: 15px;
    display: block;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
}

button{
    width: 331px;
    height: 33px;
    padding: 7px;
    font-size: 15px;
    background: lightskyblue;
    border: none;
    border-radius: 1px;
    cursor: pointer;
}
button:hover{
    background-color: rgba(135, 206, 250, 0.885);
}
</style>