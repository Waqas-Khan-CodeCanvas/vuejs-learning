<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <h2 style="color: blueviolet;" >{{ userName }}</h2> -->
  <!-- <StudentsList :name="name"/> -->
  <!-- <TeachersList :name="name" /> -->
  <!-- <ChildComponent :getUserName="getUserName"/> -->
  <!-- <RefComponent/> -->
  <SimpleForm/>
  <CompleteForm/>
</template>

<script>
// import ChildComponent from './components/ChildComponent.vue';
// import HelloWorld from './components/HelloWorld.vue';
// import RefComponent from './components/RefComponent.vue';
import CompleteForm from './components/CompleteForm.vue';
// import SimpleForm from './components/SimpleForm.vue';
// import StudentsList from './components/StudentsList.vue';
// import TeachersList from './components/TeachersList.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // StudentsList,
    // TeachersList,
    // ChildComponent,
    // RefComponent,
    // SimpleForm,
    CompleteForm,
  },
  // data(){
  //   return{
  //     name:"Waqas khan",
  //     userName:"",
  //   }
  // },
  // methods:{
  //   getUserName(name){
  //     this.userName=name;
  //   }
  // }

}
</script>
