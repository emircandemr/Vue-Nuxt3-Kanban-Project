<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()


</script>
<template>
    <div class="w-full h-full flex flex-wrap justify-center items-center gap-8 pt-5">
        <Card v-for="data in dataStore.selected" :key="data.id" :item="data" />
    </div>
</template>


<style scoped>

</style>