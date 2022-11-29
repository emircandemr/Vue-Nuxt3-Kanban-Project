<script setup>

import { useDataStore } from '~~/stores/use-Data';

const dataStore = useDataStore()

const firebaseUser = useFirebaseUser()
const userID = firebaseUser.value?.uid

const admin = ref(false)

onMounted(async () => {
    if(userID == "s4kGjqIq7PgBCzRvFIsSrXgSbsD3"){
        admin.value = true
    }
})

const outHandler = async () => {
    dataStore.clearData()
    await signOut()
}


</script>

<template>
    <div class="h-screen  flex items-center justify-center">
        <div class="w-14 h-full md:w-28 md:h-[90%] bg-[#212121] shadow-2xl md:rounded-xl  ">
            <div class="w-full h-20 font-bold text-white mr-5 flex flex-col justify-center items-center md:mt-10 ">
                <h1 class="text-3xl md:text-5xl text-[#5293ee]">P.</h1>
            </div>
            <div class="w-full h-3/4 flex flex-col items-center text-white">
                <ul>
                    <li class="my-5 py-3 px-5 rounded-lg hover:bg-[#5293ee] hover:text-white">
                        <NuxtLink to="/" class="flex items-center justify-center" >
                            <div class="flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                    home
                                </span>
                            </div>
                        </NuxtLink>
                    </li>
                    <li class="my-5 py-3 px-5 rounded-lg hover:bg-[#5293ee] hover:text-black">
                        <NuxtLink  to="/tasks" class="flex" >
                            <div class="flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                splitscreen
                                </span>
                            </div>
                        </NuxtLink>
                    </li>
                    <li v-if="admin"  class="my-5 py-3 px-5 rounded-lg hover:bg-[#5293ee] hover:text-black">
                        <NuxtLink  to="/newTask" class="flex" >
                            <div class="flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                add
                                </span>
                            </div>
                        </NuxtLink>
                    </li>
                    <li class="my-5 py-3 px-5 rounded-lg hover:bg-[#5293ee] hover:text-black">
                        <NuxtLink  to="/login" class="flex" @click="outHandler" >
                            <div class="flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                logout
                                </span>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style  scoped>

</style>