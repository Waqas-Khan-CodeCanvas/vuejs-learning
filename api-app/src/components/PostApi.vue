<template>
    <h2>PostApi Section</h2>
    <label for="email"> Email : </label>
    <input type="email" placeholder="Email..." id="email" v-model="email"><br><br>

    <label for="pass"> Password : </label>
    <input type="password" placeholder="Pass..." id="pass" v-model="pass"><br><br>

    <button @click="sendData">Submit</button>
</template>

<script>
import axios from 'axios';

export default{
    name:"PostApi",
    data(){
        return{
            email:"",
            pass:""
        }
    },
    methods:{
        async sendData(){
            console.log(this.email,this.pass);
            
            let result=await axios.post("https://reqres.in/api/users?page=1",{
                email:this.email,
                password:this.pass
            });
            console.log("result ",result);
            this.email="",
            this.pass=""
        }
    }
}
</script>