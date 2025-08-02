<template>
    <div :class="['flex flex-col items-center justify-center w-full h-screen ', hide]">
        <h2 class="text-xl text-center font-bold text-white absolute top-7 left-10 tracking-[8px] animate__animated animate__bounce">{{ message }}</h2>
        <p class="text-[15px] text-center text-white absolute bottom-10 right-10 tracking-[4px] cursor-pointer animate__animated animate__bounce" @click="hideHome">
            <router-link to="/EditText">Learn more</router-link>
        </p>
        <img class="w-[720px] h-[450px] animate__animated animate__fadeInUp" src="../assets/image/2-removebg-preview.png" alt="image" />
        <h3 class="text-5xl absolute top-[33%] left-[29%] leading-13 text-white tracking-[5px] animate__animated  animate__fadeInUp">QUALITY PRODUCTS<br>FOR QUALITY LIFE.</h3>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "ReplaceText",
    setup() {
        const message = ref("WAQAS");
        const hide = ref("");

        const hideHome = () => {
            hide.value = "hidden";
            console.log("hidden Home");
            console.log(hide.value);
        };

        return {
            message,
            hide,
            hideHome
        };
    }
}
</script>
