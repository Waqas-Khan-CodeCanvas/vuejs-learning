<template>
    <h2>mounted</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid praesentium soluta esse fuga, tempora pariatur, nesciunt qui quidem laborum numquam dolor distinctio aspernatur sit nulla consequatur eveniet itaque quibusdam corporis.</p>
</template>

<script>
export default{
    name:"BeforeMounted",
    beforeMount(){
        console.log("BeforeMounted ",this.$el);
    },
    mounted(){
        console.log("Mounted ",this.$el);
    }
}
</script>