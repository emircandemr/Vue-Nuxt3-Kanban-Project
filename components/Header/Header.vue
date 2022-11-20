<script setup>
import {useDataStore} from '../../stores/use-Data'

const dataStore = useDataStore()

const taskData = [
    {
        text : "Task Completed",
        number : dataStore.getCompletedTask
    },
    {
        text : "Task Not Completed",
        number : dataStore.getNotCompletedTask
    }
]

</script>

<template>
    <div class="header">
            <HeaderWelcome title="Emir" ></HeaderWelcome>
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
                <div class="h-10 flex justify-center items-center ">
                    <div class="h-10 w-10 bg-[#212121] text-white font-medium rounded-xl flex justify-center items-center mr-2">
                        <span class="text-3xl text-white material-symbols-outlined ">
                        notifications
                        </span>
                    </div>
                    <div class="w-10 h-10">
                        <img class="w-full h-full rounded-xl" src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=826&t=st=1668283720~exp=1668284320~hmac=584615e5790ead5e664a57a86b1db4b267ff358a1fcd9a293b074874ee25fd67" alt="">
                    </div>
                </div>
                <div class="w-full h-24 m-1 bg-[#212121] text-white font-medium rounded-xl flex flex-col items-center justify-center "   >
                    <span class=" w-3/5 text-center text-xl font-semibold ">Your Point</span>    
                    <span class=" text-3xl font-extrabold ">{{dataStore.getPoint}}</span>
                </div>
            </div>
    </div>
</template>


<style scoped>

.header{
    @apply w-full h-44 px-5 py-3 flex items-center justify-between 
}

.header__user{
    @apply w-[30%] h-full ml-5 flex bg-[#212121] text-white shadow-2xl font-medium rounded-3xl 
}

.header__right{
    @apply w-[30%] h-full flex flex-col  rounded-3xl ml-10 
}

.header__avatar{
    @apply w-[15%] h-full flex flex-col mr-5  rounded-3xl ml-10 justify-between
}

</style>