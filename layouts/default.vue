<script setup>
    import Navbar from "~/components/Navbar.vue";
</script>

<template>
    <div class="w-100 h-screen flex flex-col items-center bg-[#121212] ">
        <Navbar/>
        <div class="text-white w-3/4 mt-5" >
            <slot></slot>  
        </div>
    </div>
</template>


<style scoped>

</style>