<script setup>
    import Navbar from "~/components/Navbar.vue";
</script>

<template>
    <div class="main">
        <Sidebar/>
        <div class="main__content" >
            <Navbar/>
            <slot></slot>  
        </div>
    </div>
</template>


<style scoped>

.main {
    @apply w-full h-screen bg-[#121212] flex  items-center
}

.main__content{
  @apply  text-white bg-[#0f0f0f] w-11/12 flex flex-col items-center rounded-3xl ;
  height: 95%;
}


</style>

<!-- bg-[#0f0f0f] -->