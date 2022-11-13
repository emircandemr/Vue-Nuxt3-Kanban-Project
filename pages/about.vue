<script setup>
import {useDataStore} from '../stores/use-Data'

definePageMeta({
    layout : 'content',
})

const dataStore = useDataStore()


</script>
<template>
    <div class="w-full h-full flex flex-wrap justify-center items-center">
        <div class="w-1/4 p-5 h-full flex flex-col items-center"
        @drop="dataStore.DropData($event, 'Backlog' )"
        @dragenter.prevent
        @dragover.prevent 
        >
        <div class="bg-[#ffffff] rounded-xl w-[85%] py-3 mb-3 flex justify-center items-center">
            <h1 class="text-xl text-slate-600 font-bold">Backlog</h1>
        </div> 
        <div class="w-[85%]  flex flex-col items-center">
            <Card v-for="data in dataStore.getData('Backlog')" :key="data.id" :item="data" />
        </div>
        </div>

        <div class="w-1/4 p-5 h-full flex flex-col items-center"
        @drop="dataStore.DropData($event, 'Todo' )"
        @dragenter.prevent
        @dragover.prevent 
        >
        <div class="bg-[#ffffff] rounded-xl w-[85%] py-3 mb-3 flex justify-center items-center">
            <h1 class="text-xl text-slate-600 font-bold">To Do</h1>
        </div> 
        <div class="w-[85%]  flex flex-col items-center">
            <Card v-for="data in dataStore.getData('Todo')" :key="data.id" :item="data" />
        </div>

        </div>
        <div class="w-1/4 p-5 h-full flex flex-col items-center"
        @drop="dataStore.DropData($event, 'Inprogress' )"
        @dragenter.prevent
        @dragover.prevent>
            <div class="bg-[#ffffff] rounded-xl w-[85%] py-3 mb-3 flex justify-center items-center">
                <h1 class="text-xl text-slate-600 font-bold">In Progress</h1>
            </div> 
            <div class="w-[85%]  flex flex-col items-center">
                <Card v-for="data in dataStore.getData('Inprogress')" :key="data.id" :item="data" />
            </div>

        </div>
        <div class="w-1/4 p-5 h-full flex flex-col items-center "
        @drop="dataStore.DropData($event, 'Done' )"
        @dragenter.prevent
        @dragover.prevent
        >
            <div class="bg-[#ffffff] rounded-xl w-[85%] py-3 mb-3 flex justify-center items-center">
                <h1 class="text-xl text-slate-600 font-bold">Done</h1>
            </div> 
            <div class="w-[85%]  flex flex-col items-center">
                <Card v-for="data in dataStore.getData('Done')" :key="data.id" :item="data" />
            </div>

        </div>
    </div>
</template>


<style scoped>

</style>