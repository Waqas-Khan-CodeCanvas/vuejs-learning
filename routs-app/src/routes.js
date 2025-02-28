import {createRouter, createWebHashHistory} from "vue-router"
import HomeComponent from "./components/HomeComponent.vue"
import AboutComponent from "./components/AboutComponent.vue";
import ContactComponent from "./components/ContactComponent.vue";
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
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;

