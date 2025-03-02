import {createRouter,createWebHashHistory} from 'vue-router';
import GetApi from './components/GetApi.vue';
import PostApi from './components/PostApi.vue';
import PageNotFound from './components/PageNotFound.vue';
import HomeComponent from './components/HomeComponent.vue';

const routes=[
    {
        name:"Home",
        path:"/",
        component:HomeComponent
    },
    {
        name:"GetApi",
        path:"/GetApi",
        component:GetApi
    },
    {
        name:"PostApi",
        path:"/PostApi",
        component:PostApi
    },
    {
        name:"404",
        path:"/:pathMatch(.*)*",
        component:PageNotFound
    },
];

const router=createRouter({
    history:createWebHashHistory(),
    routes
});
export default router;