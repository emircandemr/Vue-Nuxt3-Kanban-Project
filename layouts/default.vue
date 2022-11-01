<script setup>
    import Navbar from "~/components/Navbar.vue";
</script>

<template>
    <div class="w-100 h-screen flex flex-col items-center bg-slate-900 ">
        <Navbar/>
        <div class="text-white" >
            <slot></slot>  
        </div>
    </div>
</template>


<style scoped>

</style>