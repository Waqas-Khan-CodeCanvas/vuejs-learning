<template>
  <h2>loops Statment Vue.js</h2>
  <ul>
    <li v-for="item in technologies" :key="item">
        {{ item }}
    </li>
  </ul><br/>
  <ul style="list-style: none;">
    <li v-for="(item,index) in users" :key="item.name">
       <span style="color: red;">{{ index }} </span> Name is :{{ item.name }} and Email is :{{ item.email }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "LoopsStatment",
  data() {
    return {
      technologies: [
        "java",
        "php",
        "c++",
        "javascript",
        "laravel",
        "MySQL",
        "Vue.js",
      ],
      users:[
        {
        name:"waqas khan",
        email:"waqaskhan@gmail.com",
      },
        {
        name:"ali khan",
        email:"ali@gmail.com",
      },
        {
        name:"hamza khan",
        email:"hamza@gmail.com",
      },
        {
        name:"sufyan khan",
        email:"sufyan@gmail.com",
      }
     ]
    };
  },
};
</script>
