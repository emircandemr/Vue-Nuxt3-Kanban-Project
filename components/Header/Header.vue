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
})


</script>

<template>
    <div class="header">
            <HeaderWelcome :title="dataStore.currentUser.name"  ></HeaderWelcome>
            <div class="header__right">
                <div class="w-full h-8 rounded-xl bg-[#212121] text-white font-medium flex justify-center items-center px-2 py-1 " >
                    <SharedIcon icon="search" size="w-5" color="text-gray-500" />
                    <input class="w-full bg-transparent px-2 outline-none"  type="text">
                </div>
                <div class="w-full h-32 flex items-center justify-around mt-4">
                    <HeaderTask v-for="data in taskData" :title="data.text" :number="data.number"></HeaderTask>
                </div>
            </div>
            <div class="header__avatar">
                <div class="h-8 flex justify-center items-center ">
                    <div class="h-10 w-10 bg-[#212121] text-white font-medium rounded-xl flex justify-center items-center mr-2">
                        <SharedIcon icon="notifications" size="text-3xl" color="text-gray-300" />
                    </div>
                    <SharedAvatar size="h-10 w-10" />
                </div>
                <div class="w-full h-32 flex items-center justify-around mt-4"   >
                    <HeaderTask title="Your Total Point" :number="dataStore.getPoint(userID)"></HeaderTask>
                </div>
            </div>
    </div>
</template>


<style scoped>

.header{
    @apply w-full md:h-44 px-5 py-3 md:flex md:items-center md:justify-between 
}

.header__right{
    @apply w-[90%] sm:w-[70%] md:w-[2/3] lg:w-[30%] md:h-full flex flex-col rounded-3xl mx-auto md:mx-0
} 

.header__avatar{
    @apply w-[90%] sm:w-[70%] md:w-[33%] lg:w-[15%] md:h-full flex flex-col mx-auto md:mx-0 mt-10 md:mt-0  rounded-3xl justify-between
}

</style>