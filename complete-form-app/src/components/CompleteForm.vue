<template>
    <h3>Register your self</h3>
    {{ form }}
    <ul style="list-style: none; color: red;">
        <li v-for="(item) in errors" :key="item">
            {{ item }} not valid
        </li>
    </ul>
        <label for="email">Email : </label>
        <input type="email" id="email" placeholder="Enter your Email " v-model.trim.lazy="form.email"/>
        <br /><br />

        <label for="pass">Password : </label>
        <input type="password" id="pass" placeholder="Enter your Password " v-model.trim="form.password"/>
        <br /><br />

        <h3>Select your Contry</h3>
        <select name="contry" id="contry" v-model="form.contry">
            <option value="Pakistan">pak</option>
            <option value="India">In</option>
            <option value="UAE">UAE</option>
            <option value="USA">USA</option>
        </select>

        <h3>Gender</h3>
        <input type="radio" name="gender" id="male" value="male" v-model="form.gender"/>
        <label for="male"> : Male</label><br />

        <input type="radio" name="gender" id="female" value="female"  v-model="form.gender"/>
        <label for="female"> : Female</label><br />

        <input type="radio" name="gender" id="others" value="others"  v-model="form.gender"/>
        <label for="others"> : Others</label><br />

        <h3>Technologies</h3>
        <input type="checkbox" name="tech" id="java" value="java" v-model="form.technologies"/>
        <label for="java"> : Java</label><br />

        <input type="checkbox" name="tech" id="node" value="node"  v-model="form.technologies"/>
        <label for="node"> : Node</label><br />

        <input type="checkbox" name="tech" id="php" value="php" v-model="form.technologies" />
        <label for="php"> : Php</label><br /><br>

        <button v-on:click="login">Submit</button>
        

</template>

<script>


export default {
    name: "CompleteForm",
    data() {
        return {
            form: {
                email: "",
                password: "",
                contry: "",
                gender: "",
                technologies: [],
            },
            errors:[],
        };
    },
    methods:{
        login(){
            this.errors=[];
            for (const item  in this.form) {
               if (this.form[item] === "" || this.form[item].length===0) {
                    this.errors.push(item);
               }
            }
            if (this.errors.length===0) {
                alert("form submmited")
            }
            console.log(this.form,this.errors);
        }
    }
};
</script>

<style scoped></style>
