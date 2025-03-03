import { createRouter,createWebHashHistory } from "vue-router";
import HomeComponent from "./components/Home.vue";
import Login from "./components/login.vue";
import SignUp from "./components/SignUp.vue";
import PageNotFound from "./components/PageNotFound.vue";


const routes=[
    {
        name:"Home",
        path:"/",
        component:HomeComponent
    },
    {
        name:"Login",
        path:"/Login",
        component:Login
    },
    {
        name:"SignUp",
        path:"/SignUp",
        component:SignUp
    },
    {
        name:"404",
        path:"/:pathMatch(.*)*",
        component:PageNotFound
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;