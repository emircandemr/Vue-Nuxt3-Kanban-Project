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
        <div class="main__rightbar">
            <h1>Right</h1>
        </div>
    </div>
</template>


<style scoped>

.main {
    @apply w-full h-screen bg-[#121212] flex  items-center
}

.main__content{
  @apply  text-white bg-[#0f0f0f] w-9/12  flex flex-col items-center rounded-3xl ;
  height: 95%;
}

.main__rightbar{
  @apply  bg-[#121212] w-60 h-screen flex flex-col items-center shadow-lg ;
}

</style>

<!-- bg-[#0f0f0f] -->