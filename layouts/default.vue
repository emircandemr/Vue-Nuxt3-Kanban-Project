<script setup>
    import Navbar from "~/components/Navbar.vue";
</script>

<template>
    <div class="w-100 h-screen flex justify-center bg-slate-900">
        <Navbar/>
        <slot></slot>  
    </div>
</template>


<style scoped>

</style>