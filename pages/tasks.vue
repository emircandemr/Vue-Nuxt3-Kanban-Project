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
            <div class="bg-[#212121] rounded-xl w-[85%] py-3 mb-3 flex justify-center items-center">
                <h1 class="text-xl font-bold" :class="statu" >{{statu}}</h1>
            </div> 
            <div class="w-[85%]  flex flex-col items-center">
                <TaskItem v-for="data in dataStore.getData(statu)" :key="data.id" :item="data" :statu="statu" />
            </div>
        </div>
    <TaskDetails v-if="dataStore.isModalActive" ></TaskDetails>

    </div>
</template>


<style scoped>
/* 323644 */
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