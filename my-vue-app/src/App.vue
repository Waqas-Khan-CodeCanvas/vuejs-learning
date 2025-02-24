<template>
  <HelloWorld msg="Welcome Waqas Khan" />
  <HomePage />
  <FormInput />
  <CheckBox />
  <ConditionalStatments />
  <LoopsStatment />
  <PassDataToChild msg="this message send from parent to child" :user="user" :getData="getData" />
  <UseReausComponent/>
</template>

<script>
import CheckBox from "./components/CheckBox.vue";
import ConditionalStatments from "./components/ConditionalStatments.vue";
import FormInput from "./components/FormInput.vue";
import HelloWorld from "./components/HelloWorld.vue";
import HomePage from "./components/HomePage.vue";
import LoopsStatment from "./components/LoopsStatment.vue";
import PassDataToChild from "./components/PassDataToChild.vue";
import UseReausComponent from "./components/UseReausComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HomePage,
    FormInput,
    CheckBox,
    ConditionalStatments,
    LoopsStatment,
    PassDataToChild,
    UseReausComponent,
  },
  data() {
    return {
      user: { name: "Zaryab khan", email: "zaryab@gmail.com" },
    };
  },
  methods:{
    getData(){
      console.log("parent function call");
      alert("parent function call");
    },
  }
};
</script>
