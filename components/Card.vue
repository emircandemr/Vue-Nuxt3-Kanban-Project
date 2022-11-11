<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()

const props = defineProps(["item"])

const isCompleted = ref(false)

const selectHandler = (data) => {
    dataStore.setSelectedData(data)
    isCompleted.value = true
}



</script>

<template>
    <div class="w-full min-w-full h-44 bg-[#ffffff] py-3 text-center my-2 rounded-xl text-black drop-shadow-xl hover:border-[#0C0B0B] cursor-pointer relative"
    draggable="true"
    @dragstart="dataStore.StartDragData($event,props.item)"
    >
        <div class="text-gray mb-2 text-md  font-extrabold ">
            <h1>{{props.item.title}}</h1>
        </div>
        <div class="w-14 h-8 absolute top-1 right-5 flex justify-center items-center ">
            <h1 class="text-green-500 text-sm font-bold text-center pt-1">+{{props.item.point}}</h1>
        </div>
        <div class="text-sm px-5">
            <p>{{props.item.description}}</p>
        </div>
        <div class="w-full flex justify-center items-center mt-5 absolute bottom-5">
            <button class="w-[30%] py-1 px-1 rounded-lg bg-[#edf0f7] text-sm text-black font-bold" @click="selectHandler(props.item)" >Completed</button>
        </div>
        <div v-if="isCompleted" class="w-full h-full absolute top-0 bg-white rounded-xl">
            <div class="w-full h-16 flex justify-center items-center">
                <span class="material-symbols-outlined text-6xl font-extrabold">
                    done
                </span>
            </div>
            <div class="w-full h-10 my-1 flex flex-col justify-center items-center">
                <h1 class="text-xl font-bold">Congratulations !</h1>
                <p class="text-sm mt-2 font-semibold">You earned {{props.item.point}} points for completing the mission</p>
            </div>
            <div class="w-full h-10 mt-5 flex justify-center items-center">
                <button class="w-[30%] py-1 px-1 rounded-lg bg-[#000000] text-sm text-gray-100 font-bold">Close</button>
            </div>
        </div>


    </div>
</template>


<style scoped>

</style>