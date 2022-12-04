<script setup>
import {useDataStore} from '../../stores/use-Data'

const dataStore = useDataStore()
const firebaseUser = useFirebaseUser()
const userID = firebaseUser.value?.uid

const taskData = [
    {
        text : "Task Completed",
        number : dataStore.getCompletedTask(userID)
    },
    {
        text : "Task Not Completed",
        number : dataStore.getNotCompletedTask(userID)
    }
]

onBeforeMount(() => {
    const currentUser = dataStore.user.find((item) => item.userID === userID)
    dataStore.setCurrentUser(currentUser)
    console.log(currentUser)
})

const searched = ref(null)
const filteredData = ref(null)

const searchHandler = () => {
    dataStore.data.filter((item) => {
     if(item.title.toLocaleLowerCase().startsWith(searched.value.toLocaleLowerCase())){
            filteredData.value = item
     }
    })
}

const filteredHandler = () => {
    dataStore.setSelectedData(filteredData.value)
    dataStore.setModalChange()
}


</script>

<template>
    <div class="header">
            <HeaderWelcome :title="dataStore.currentUser.name"  ></HeaderWelcome>
            <div class="header__right">
                <div class="w-full h-8 relative rounded-t-xl bg-[#212121] text-white font-medium flex justify-center items-center px-2 py-1 " >
                    <SharedIcon icon="search" size="w-5" color="text-gray-500" />
                    <input class="w-full bg-transparent px-2 outline-none" v-model="searched" @input="searchHandler" type="text">
                    <div v-if="searched" class="w-full max-h-44 absolute cursor-pointer hover:text-blue-400 overflow-y-auto p-2 top-8 rounded-b-xl bg-[#121212] z-50">
                        <p v-if="filteredData" @click="filteredHandler">{{filteredData?.title}}</p>
                        <p v-else class="text-red-800" >Search Not Found</p>
                    </div>
                </div>
                <div class="w-full h-32 flex items-center justify-around mt-4">
                    <HeaderTask v-for="data in taskData" :title="data.text" :number="data.number"></HeaderTask>
                </div>
            </div>
            <div class="header__avatar">
                <div class="h-8 flex justify-center items-center ">
                    <div class="h-10 w-10 relative bg-[#212121] text-white font-medium rounded-xl flex justify-center items-center mr-2">
                        <SharedIcon icon="notifications" size="text-3xl" color="text-gray-300" />
                        <span class="w-2 h-2 absolute top-1 right-1 rounded-full bg-red-500"></span>
                    </div>
                    <SharedAvatar size="h-10 w-10" :isPic=true :pic="dataStore.currentUser.image" />
                </div>
                <div class="w-full h-32 flex items-center justify-around mt-4"   >
                    <HeaderTask title="Your Total Point" :number="dataStore.getPoint(userID)"></HeaderTask>
                </div>
            <TaskDetails v-if="dataStore.isModalActive" ></TaskDetails>
            </div>
    </div>
</template>


<style scoped>

.header{
    @apply w-full md:h-44 px-5 md:flex md:items-center md:justify-between 
}

.header__right{
    @apply w-[90%] sm:w-[70%] md:w-[2/3] lg:w-[30%] md:h-full flex flex-col rounded-3xl mx-auto md:mx-0
} 

.header__avatar{
    @apply w-[90%] sm:w-[70%] md:w-[33%] lg:w-[15%] md:h-full flex flex-col mx-auto md:mx-0 mt-10 md:mt-0  rounded-3xl justify-between
}

</style>