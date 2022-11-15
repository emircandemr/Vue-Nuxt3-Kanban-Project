<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()

definePageMeta({
    layout : 'content',
    middleware : ['auth']

})

</script>

<template>
    <div class="w-full">
        <div class="w-full flex flex-col items-center ">
            <Header> </Header>
        </div>
        <div class="w-full h-[85%] flex flex-wrap justify-center items-center pt-5">
            <Card v-for="data in dataStore.selected" :key="data.id" :item="data" />   
        </div>
    </div>
</template>

<style scoped>

</style>