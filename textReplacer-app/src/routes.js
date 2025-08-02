import {createRouter,createWebHashHistory} from 'vue-router'
import EditText from './components/EditText.vue'
import Home from './components/ReplaceText.vue'
const routes=[
    {path:"/", name:"Home",component:Home},
    {path:"/EditText", name:"EditText",component:EditText}
];

const router=createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;