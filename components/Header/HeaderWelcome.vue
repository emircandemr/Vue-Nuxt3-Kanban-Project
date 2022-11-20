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
   <div class="w-[30%] h-full ml-5 flex bg-[#212121] text-white shadow-2xl font-medium rounded-3xl ">
        <div class="w-1/2 h-full flex flex-col items-center justify-center">
            <h1 class="text-2xl bold">Hello {{title}} !</h1>
            <p>It’s good to see you again.</p>
        </div>
        <div>
            <img src="../../assets/svg/welcome.svg" />
        </div>
    </div>
</template>


<style scoped>

</style>