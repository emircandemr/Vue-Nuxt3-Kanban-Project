<script setup>

defineProps({
    title : {
        type : String,
        required : true,
        default  : 'Noname'
    },
    number : {
        type : Number,
        required : true,
        default : 0
    },


})

</script>

<template>
    <div class="w-full h-24 bg-[#212121] text-white  m-1 px-2 py-1 rounded-xl flex flex-col justify-center items-center">
        <span class="w-full h-full text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-center "> {{number}} </span>
        <span class="w-full h-full text-center text-sm xl:text-md flex items-center justify-center mt-1 font-semibold "> {{title}}</span>
    </div>
</template>


<style scoped>

</style>    