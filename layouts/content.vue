<script setup>
</script>

<template>
    <div class="main">
        <Sidebar/>
        <div class="main__content" >
            <slot></slot>  
        </div>
        <Recently></Recently>
    </div>
</template>


<style scoped>

.main {
    @apply w-full h-full md:h-screen  bg-[#121212] flex items-center md:justify-center
}

.main__content{
  @apply w-full md:w-[75%] h-[90%] flex flex-col items-center ml-12;
}

</style>

<!-- bg-[#0f0f0f] -->
<!-- bg-[#272a37] -->