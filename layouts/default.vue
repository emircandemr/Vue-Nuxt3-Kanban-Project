<script setup>
</script>

<template>
    <div class="main">
        <Sidebar/>
        <Recently></Recently>
        <div class="main__content" >
            <Header> </Header>
            <slot></slot>  
        </div>
    </div>
</template>


<style scoped>

.main {
    @apply w-full h-screen bg-gray-50 flex items-center relative
}

.main__content{
  @apply  bg-gray-50 w-[75%] h-[90%] flex flex-col items-center ;
}


</style>

<!-- bg-[#0f0f0f] -->