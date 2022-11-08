<script setup>
</script>

<template>
    <div class="main">
        <Sidebar/>
        <div class="main__content" >
            <Header> </Header>
            <slot></slot>  
        </div>
    </div>
</template>


<style scoped>

.main {
    @apply w-full h-screen bg-gray-50 flex  items-center
}

.main__content{
  @apply  bg-gray-50 w-full h-screen flex flex-col items-center ;
}


</style>

<!-- bg-[#0f0f0f] -->