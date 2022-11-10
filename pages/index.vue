<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()


</script>

<template>
    <div>
        <div class="w-full flex flex-col items-center ">
            <Header> </Header>
        </div>
        <div class="w-full h-[85%] flex flex-wrap justify-center items-center gap-8 pt-5">
            <Card v-for="data in dataStore.data" :key="data.id" :item="data" />   
        </div>
    </div>
</template>

<style scoped>

</style>