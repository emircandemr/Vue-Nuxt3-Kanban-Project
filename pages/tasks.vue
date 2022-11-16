<script setup>
import {useDataStore} from '../stores/use-Data'

definePageMeta({
    layout : 'content',
    middleware : ['auth']
})

const dataStore = useDataStore()

const status = ['Backlog', 'Todo', 'Inprogress', 'Done']

</script>
<template>
    <div class="w-full h-full flex flex-wrap justify-center items-center">
        <div v-for="statu in status" class="w-1/4 p-5 h-full flex flex-col items-center"
        @drop="dataStore.DropData($event, statu)"
        @dragenter.prevent
        @dragover.prevent>
            <div class="bg-[#323644] rounded-xl w-[85%] py-3 mb-3 flex justify-center items-center">
                <h1 class="text-xl font-bold" :class="statu" >{{statu}}</h1>
            </div> 
            <div class="w-[85%]  flex flex-col items-center">
                <Card v-for="data in dataStore.getData(statu)" :key="data.id" :item="data" />
            </div>
        </div>
    </div>
</template>


<style scoped>

.Todo{
    color:  #f06868;
}

.Inprogress{
    color:  #f8da5b;
}

.Done{
    color:  #7dd87d;
}

.Backlog{
    color:  #5293ee;
}

</style>