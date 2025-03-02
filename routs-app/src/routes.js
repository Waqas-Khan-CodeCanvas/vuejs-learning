import {createRouter, createWebHashHistory} from "vue-router"
import HomeComponent from "./components/HomeComponent.vue"
import AboutComponent from "./components/AboutComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
import ProfileComponent from "./components/ProfileComponent.vue";  
import PageNotFound from "./components/PageNotFound.vue";
const routes=[
    {
        name:"Home",
        path:"/",
        component:HomeComponent
    },
    {
        name:"About",
        path:"/About",
        component:AboutComponent
    },
    {
        name:"Contact",
        path:"/Contact",
        component:ContactComponent
    },
    {
        name:"Profile",
        path:"/Profile/:name",
        component:ProfileComponent
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

