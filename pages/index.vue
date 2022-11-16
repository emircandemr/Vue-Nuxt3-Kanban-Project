<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()

definePageMeta({
    layout : 'content',
    middleware : ['auth']

})

const status = ['All', 'Todo', 'Inprogress', 'Done']

const selectedStatus = ref('Todo')

const filterHandler = (data) => {
    selectedStatus.value = data
}

const selectFilter = computed(() => {
    return dataStore.data.filter((item) => {
        if(selectedStatus.value === 'All'){
            return item
        }
        return item.isStatu === selectedStatus.value
    })
})

</script>

<template>
    <div class="w-full h-full flex flex-col">
        <Header> </Header>
        <div class= "w-full h-[80%] flex justify-between ">
            <div class="w-[55%] min-h-[85%] mt-5 ml-7 px-5 flex flex-col text-white overflow-y-auto">
                <h1 class=" text-2xl">Tasks</h1>
                <div class="w-full mt-3 text-start">
                    <button v-for="statu in status" @click="filterHandler(statu)" class="px-3 mr-2 py-1 cursor-pointer hover:text-[#5293ee]">{{statu}}</button>
                </div>
                <div v-for="item in selectFilter" class="w-full h-20 mt-5 py-3 bg-[#323644] rounded-2xl flex items-center">
                    <img class="w-14 h-14 rounded-md ml-2" src="https://scontent.fszf2-1.fna.fbcdn.net/v/t39.30808-6/305204204_475940821213391_7309799711632212258_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gqOV7P8wxlUAX_g5Mg2&_nc_ht=scontent.fszf2-1.fna&oh=00_AfCfkr_yyVhnQxU6ryziDrs1OLwAYKzbZj-mXAGXitgssQ&oe=63752353" alt="">
                    <div class="w-[50%] h-14 ml-3 flex flex-col justify-center">
                        <h2 class="text-sm">{{item.title}}</h2>
                        <p class="text-sm truncate">{{item.description}}</p>
                    </div>
                    <div class="w-[10%] h-14 ml-3 flex flex-col items-center justify-center">
                        <span class="text-sm material-symbols-outlined">
                        favorite
                        </span>
                        <span class="mt-1 text-xs ">
                        +{{item.point}}
                        </span>
                    </div>
                    <div class="w-[10%] h-14 ml-5 flex flex-col items-center justify-center">
                        <span class="text-sm material-symbols-outlined">
                        star
                        </span>
                        <span class="mt-1 text-xs ">
                        {{item.isStatu}}
                        </span>
                    </div>
                    <div class="w-[10%] h-8 rounded-lg bg-[#22559c]  cursor-pointer ml-5 text-sm flex items-center justify-center">
                        Inspect
                    </div>
                </div>
            </div>
            <div class="w-[40%] h-96 mt-5 mr-8 bg-[#323644] rounded-xl flex justify-center ">
                <h1 class="text-white mt-2">Statistic</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>

.Todo{
    border: 1px solid red;
}

.Inprogress{
    border: 1px solid yellow;
}

.Done{
    border: 1px solid green;
}

.Backlog{
    border: 1px solid #5293ee;
}

</style>