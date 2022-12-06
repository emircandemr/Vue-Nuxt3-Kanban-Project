<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()

</script>

<template>
       <div class="w-full h-max flex justify-center items-center bg-cover bg-no-repeat fixed overflow-hidden bg-[url('https://images.pexels.com/photos/1110504/pexels-photo-1110504.jpeg')] bg-center ">
            <div class="w-full h-screen bg-black bg-opacity-50 flex items-center">
                    <slot></slot>
            </div>
        <NotificationList :notifications="dataStore.notifications" ></NotificationList>
        </div>
</template>

<style scoped>

</style>