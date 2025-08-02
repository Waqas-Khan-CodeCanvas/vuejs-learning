<template>
    <header class="sticky-top bg-slate-900  text-white shadow-lg py-[15px] px-[30%] ">
        <nav class=" flex flex-col sm:flex-row items-center justify-center gap-4  p">
            <router-link to="/">
                <div class="flex items-center gap-3 ">
                    <i class="fa-solid fa-sun text-2xl "></i>
                    <p class="text-2xl ">The Local Wearther</p>
                </div>
            </router-link>  
            <div class="flex flex-1 gap-4 justify-end">
                <i class="fa-solid fa-circle-info text-2xl hover:text-slate-700 duration-100 cursor-pointer"></i>
                <i class="fa-solid fa-plus-circle text-2xl hover:text-slate-700 duration-100 cursor-pointer"></i>
            </div>
        </nav>
    </header>
</template>

<script>
</script>
