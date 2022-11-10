<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()

const props = defineProps(["item"])

const selectHandler = (data) => {
    dataStore.setSelectedData(data)
}


</script>

<template>
    <div class="w-96 h-44 bg-gray-200 py-3 text-center ml-5 rounded-xl border drop-shadow-xl hover:border-[#0C0B0B] cursor-pointer relative">
        <div class="text-gray mb-2 text-md text-black font-extrabold ">
            <h1>{{props.item.title}}</h1>
        </div>
        <div class="text-sm">
            <p>{{props.item.description}}</p>
        </div>
        <div class="w-full flex justify-center items-center mt-5 absolute bottom-5">
            <button class="w-1/2 py-1 px-1 rounded-lg bg-[#0C0B0B] text-white" @click="selectHandler(props.item)" >Add</button>
        </div>
    </div>
</template>


<style scoped>

</style>