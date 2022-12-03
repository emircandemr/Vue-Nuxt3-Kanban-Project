<script setup>

import { useDataStore } from '~~/stores/use-Data';

const dataStore = useDataStore()

const firebaseUser = useFirebaseUser()
const userID = firebaseUser.value?.uid


const outHandler = async () => {
    dataStore.clearData()
    await signOut()
}

const isAdmin = () => {
    const {$toast} = useNuxtApp();
    const config = useRuntimeConfig()
    if(userID == config.ADMIN_UUID) return true
    dataStore.setNotifications($toast().warning("Please Login as Admin"))
}

const isItemActive = (id) => {
    sidebarItems.value.forEach((item) => {
        if(item.id == id) return item.isActive = true
        item.isActive = false
    })
}

const sidebarItems = ref([
    {
        name : 'Home',
        icon : 'home',
        link : '/',
        isActive : true,
        id : 1,
    },
    {
        name : "Tasks",
        icon : 'splitscreen',
        isActive : false,
        link : '/tasks',
        id : 2,
    },
    {
        name : "Admin",
        icon : 'add',
        link : '/newTask',
        handler : isAdmin ,
        isActive : false,
        id : 3,
    },
    {   
        name : "Logout",
        icon : 'logout',
        link : '/login',
        handler : outHandler ,
        isActive : false,
        id : 4,
    }
])

</script>

<template>
    <div class="h-screen flex items-center justify-center">
        <div class="w-14 h-full md:w-28 md:h-[90%] bg-[#212121] shadow-2xl md:rounded-xl  ">
            <div class="w-full h-20 font-bold text-white mr-5 flex flex-col justify-center items-center md:mt-10 ">
                <h1 class="text-3xl md:text-5xl text-[#5293ee]">P.</h1>
            </div>
            <div class="w-full h-3/4 flex flex-col items-center text-white">
                <SidebarItem 
                v-for="item in sidebarItems" 
                :sidebarItem="item" 
                @active="isItemActive" 
                :key="item.id">
                </SidebarItem>
            </div>
        </div>
    </div>
</template>


<style  scoped>

</style>