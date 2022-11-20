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
    <div class="w-1/2 h-24 bg-[#212121] text-white font-medium  m-1 rounded-xl flex justify-center items-center ">
        <span class="text-5xl font-extrabold "> {{number}} </span>
        <span class=" w-3/5 text-center text-xl font-semibold "> {{title}}</span>
    </div>
</template>


<style scoped>

</style>