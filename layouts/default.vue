<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()

</script>

<template>
    <div class="w-full h-screen">
        <slot></slot>
        <NotificationList :notifications="dataStore.notifications" ></NotificationList>
    </div>
</template>


<style scoped>

</style>