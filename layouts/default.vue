<script setup>
    import Navbar from "~/components/Navbar.vue";
</script>

<template>
    <div class="w-100 h-screen flex bg-[#121212] ">
        <Sidebar/>
        <div class="text-white w-full flex flex-col items-center" >
            <Navbar/>
            <slot></slot>  
        </div>
    </div>
</template>


<style scoped>

</style>