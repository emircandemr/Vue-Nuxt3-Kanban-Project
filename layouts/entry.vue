<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()

</script>

<template>
       <div class="w-full h-screen flex justify-center items-center bg-cover bg-[url('https://images.pexels.com/photos/1110504/pexels-photo-1110504.jpeg')] bg-center bg-no-repeat">
            <div class="w-full h-full bg-black bg-opacity-50 flex items-center">
                    <slot></slot>
            </div>
        <NotificationList :notifications="dataStore.notifications" ></NotificationList>

        </div>
</template>


<style scoped>

</style>