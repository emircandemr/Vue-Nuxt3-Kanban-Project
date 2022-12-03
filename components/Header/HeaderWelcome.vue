<script setup>

defineProps({
    title : {
        type : String,
        required : true,
        default  : 'Noname'
    },
})

</script>

<template>
   <div class="w-[30%] h-[90%] ml-5 hidden lg:flex items-center justify-center bg-[#212121] text-white shadow-2xl font-medium rounded-3xl ">
        <div class="w-full xl:w-2/3 h-full p-3 flex flex-col text-center items-center justify-center">
            <h1 class="text-sm lg:text-2xl bold">Hello {{title}} !</h1>
            <p>It’s good to see you again.</p>
        </div>
        <div class="hidden xl:block">
            <img src="../../assets/svg/welcome.svg" />
        </div>
    </div>
</template>


<style scoped>

</style>