<script setup>

defineProps({
    user : {
        type : Object,
        required : false,
        default : {}
    },
    size : {
        type : String,
        required : false,
        default : "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
    },
})

</script>

<template>
     <span class="border border-black rounded-full" >
        <img 
        class="rounded-full" 
        :class=size
        src="../../assets/img/avatar.webp" alt="Avatar">
    </span>
</template>


<style scoped>

</style>