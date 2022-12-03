<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()

definePageMeta({
    layout : 'content',
    middleware : ['auth']

})

const firebaseUser = useFirebaseUser()
const userID = firebaseUser.value?.uid

// const status = ['All', 'Todo', 'Inprogress', 'Done']

const status = ref([
    {
        name : 'All',
        isActive : true,
    },
    {
        name : 'Todo',
        isActive : false,
    },
    {
        name : 'Inprogress',
        isActive : false,
    },
    {
        name : 'Done',
        isActive : false,
    }
])

const selectedStatus = ref('All')

const filterHandler = (data) => {
    selectedStatus.value = data
    status.value.forEach((item) => {
        if(item.name == data) return item.isActive = true
        item.isActive = false
    })
}

const selectFilter = computed(() => {
    return dataStore.data.filter((item) => {
        if(selectedStatus.value === 'All'){
            return item
        }
        return item.member[userID].statu === selectedStatus.value
    })
})




</script>

<template>
    <div class="w-full h-full flex flex-col">
        <Header> </Header>
        <div class= "w-full h-full lg:h-[80%] flex-col lg:flex lg:flex-row justify-between ">
            <div class="w-[90%] lg:w-[55%] lg:h-[85%] mx-auto md:mt-5 md:ml-7 pl-3 flex flex-col text-white overflow-y-auto">
                <h1 class=" text-2xl">Tasks</h1>
                <div class="w-full mt-3 text-start">
                    <SharedButton 
                    v-for="statu in status"
                    :handler = "() => filterHandler(statu.name)"
                    :text = "statu.name"
                    :class="{ 'text-[#5293ee]' : statu.isActive }"
                    class="px-1 mr-2 py-1 cursor-pointer hover:text-[#5293ee]"
                    >
                    </SharedButton>
                </div>
                <CardList v-for="task in selectFilter" :task="task"  ></CardList>
            </div>
            <Statistic></Statistic>
        </div>
        <TaskDetails v-if="dataStore.isModalActive" ></TaskDetails>
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

<!-- <div v-for="item in selectFilter" class="w-full h-20 mt-5 py-3 bg-[#212121] rounded-2xl flex items-center"> -->
                    <!-- <img class="w-14 h-14 rounded-md ml-2" src="../assets/img/task.png" alt="">
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
                        {{item.category}}
                        </span>
                    </div>
                    <div class="w-[10%] h-8 rounded-lg bg-[#22559c]  cursor-pointer ml-5 text-sm flex items-center justify-center">
                        Inspect
                    </div> -->
                <!-- </div> -->