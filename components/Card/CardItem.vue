<script setup>
import {useDataStore} from '../../stores/use-Data'

const dataStore = useDataStore()

const props = defineProps(['task'])

const cardData = [
    {
        icon:"favorite",
        text: props.task.point,
        color : "text-[#22559c]"
    },
    {
        icon:"star",
        text: props.task.category,
        color : "text-[#d4af37]"
    }
]

const modalHandler = () => {
    dataStore.setModalChange()
    dataStore.setSelectedData(props.task)
}

</script>
<template>
    <div class="w-full flex justify-between items-center">
        <img class="w-14 h-14 rounded-md ml-2" src="../../assets/img/task.png" alt="">
        <div class="w-[50%] h-14 ml-3 flex flex-col justify-center">
            <h2 class="text-sm">{{task.title}}</h2>
            <p class="text-sm truncate">{{task.description}}</p>
        </div>
        <div v-for="data in cardData" class="w-[10%] h-14 flex flex-col items-center justify-center">
            <SharedIcon
            :icon = data.icon
            size="text-sm"
            :color=data.color>
            </SharedIcon>
            <span class="mt-1 text-xs ">
            {{data.text}}
            </span>
        </div>
        <SharedButton
        text="Inspect"
        :handler="modalHandler"
        class="w-20 py-2 px-1 mx-5 rounded-md text-xs bg-[#22559c] text-white hover:bg-[#121212] hover:text-white">
        </SharedButton>
         
    </div>

</template>


<style scoped>

</style>