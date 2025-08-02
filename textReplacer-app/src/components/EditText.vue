<template>
    <div class="flex flex-col items-center justify-center w-full h-screen ">
     <img class="w-full h-full  absolute  z-0" src="./2.png" alt="">
     <div class="w-[75%] h-[75%]  z-1 flex items-center justify-center flex-wrap animate__animated animate__fadeInUp">
        <div class="w-[50%] h-full opacity-80  bg-[#87909a]  p-5 text-white ">
            <textarea v-model="text" placeholder="Enter your text here ..." class="w-full h-full p-5 z-2 text-black border-1 " name="text" id="text"></textarea>
        </div>
        <div class="w-[50%] h-full   p-5 pt-10 text-start">
           <label for="search" class=" text-[18px] font-medium pb-1 ">Search</label>
           <input v-model="search" type="text" placeholder="Serach text..." id="search" class="w-full h-10 p-2 mb-8  text-black border-1">
           <label for="search" class="text-[18px] font-medium pb-1 text-black-500 ">Replace With ...</label>
           <input v-model="replace" type="text" placeholder="Type to replace with..." id="search" class="w-full h-10 p-2 mb-8 text-black border-1">
           <button @click="showData" class="border-1 text-white bg-[#06002e] px-2 py-[6px] w-full hover:bg-[#000957] hover:cursor-pointer">Replace All</button>
           <div class="text-end mt-10 pt-5  flex items-end justify-between">
            <p>Back to Home!  </p>
            <button class="rounded mt-4 mx-3 text-white bg-[#06002e] px-2 py-[6px] w-[20%] hover:bg-[#000957] hover:cursor-pointer"><router-link to="/">Back</router-link> </button>
           </div>
        </div>
     </div>
    </div>
</template>

<script>
export default {
    name: "EditText",
    data() {
        return {
            message: "next",
            text:"",
            search:"",
            replace:""
        };
    },
    methods: {
        showData() {
            for (let i  = 0; i  <= this.text.length; i ++) {
                if (this.text.slice(i,i+this.search.length)=== this.search) {
                    this.text = this.text.slice(0,i) + this.replace+" " + this.text.slice(i+this.search.length);
                    console.log("matched");
                } else {
                    
                }
                
            }
            console.log(this.text);
        }
    }
}
</script>

<style scoped>
textarea::selection {
    background: yellow;
    font-weight: bold;
}
</style>

    
    <!-- In the above code, we have created a simple text editor where we can enter the text and search for a specific word and replace it with another word. 
    In the above code, we have created a simple text editor where we can enter the text and search for a specific word and replace it with another word. We have used the  v-model  directive to bind the input fields with the data properties. 
    In the  showData  method, we have used a for loop to iterate through the text and check if the search word is present in the text. If the search word is found, we replace it with the replace word. 
    Conclusion 
    In this article, we have learned how to create a simple text editor in Vue.js. We have created a simple text editor where we can enter the text and search for a specific word and replace it with another word. 
    Save my name, email, and website in this browser for the next time I comment. -->