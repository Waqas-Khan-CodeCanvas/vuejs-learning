<template>
    <h3>Technologies</h3>
    <label for="java">Java</label>
    <input type="checkbox" value="java" name="java" id="java" v-model="technology">
    
    <label for="php">Php</label>
    <input type="checkbox" value="php" name="php" id="php" v-model="technology">
    
    <label for="node">Node</label>
    <input type="checkbox" value="node" name="node" id="node" v-model="technology">
    <br>
    <h3>who I am</h3>
    <label for="student">student</label>
    <input type="radio" value="student" name="who" id="student" v-model="who">
    
    <label for="developer">developer</label>
    <input type="radio" value="developer" name="who" id="developer" v-model="who">

    <br>
    <h4>Technologies : {{ technology }}</h4>
    <h4>Who I'm  : {{ who }}</h4>
    <br>
</template>

<script>
export default{
    name:"CheckBox",
    data(){
        return{
            technology:[],
            who:null
        }
    }
}
</script>