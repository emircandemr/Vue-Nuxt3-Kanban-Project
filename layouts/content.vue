<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()

</script>

<template>
    <div class="main">
        <Sidebar/>
        <div class="main__content" >
            <slot></slot>  
        </div>
        <Recently></Recently>
        <NotificationList :notifications="dataStore.notifications" ></NotificationList>

    </div>
</template>


<style scoped>

.main {
    @apply w-full lg:h-screen  bg-[#121212] flex items-center justify-center
}

.main__content{
  @apply w-full h-full md:h-[90%] lg:w-[75%] lg:h-[90%] flex flex-col items-center;
}

</style>
