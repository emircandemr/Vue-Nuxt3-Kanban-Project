<script setup>
import {useDataStore} from '../../stores/use-Data'

const dataStore = useDataStore()

const props = defineProps(["item","statu"])

const isCompleted = ref(false)

const selectHandler = (data) => {
    dataStore.setSelectedData(data)
    isCompleted.value = true
}

const isDragActive = ref(false)

const dragActiveHandler = () => {
    isDragActive.value = true
}

const dragLeaveHandler = () => {
    isDragActive.value = false
}


const modalHandler = () => {
    dataStore.setModalChange()
    dataStore.setSelectedData(props.item)
}

</script>

<template>
    <div class="w-full bg-[#212121] border border-orange-400 border-dashed pt-3 pb-1 my-2 rounded-xl text-white shadow-xl hover:border-[#0C0B0B] cursor-pointer relative"
    draggable="true"
    @dragstart="dataStore.StartDragData($event,props.item)"
    @dragenter.prevent = "dragActiveHandler"
    @dragend.prevent = "dragLeaveHandler"
    :class="{'active' : isDragActive} , props.statu">

    <div class="w-full flex justify-around items-center ">
        <span class="w-12 ml-2 py-1 rounded-md bg-red-200 text-center text-xs text-red-800 ">
            High
        </span>
        <span class="min-w-12 px-1 mr-2 py-1 rounded-md  bg-green-100 text-center text-xs text-green-900 ">
            +{{props.item.point}}
        </span>
        <span class="w-20 px-1 mr-2 py-1 rounded-md  bg-[#edf0f7] text-center text-xs text-slate-800 ">
          Nov 11, 2022
        </span>
    </div>

    <div class="w-full h-12 mt-2 px-3 py-1 ">
        <h1 class="text-sm font-bold text-gray-200">
            {{props.item.title}}
        </h1>

        <p class="text-xs truncate text-gray-300">
            {{props.item.description}}
        </p>
    </div>
    <div class="w-full h-10 flex justify-around items-center">
        <button class="w-12 p-1 ml-2 rounded-md text-xs bg-[#edf0f7] text-center text-black hover:bg-slate-300 hover:border hover:border-dashed hover:border-black" 
        @click="modalHandler"
        >Inspect</button>
        <span class="w-12 px-1 mr-2 py-1 rounded-md  bg-yellow-100 text-center text-xs text-yellow-900 ">
           5 Days
        </span>
        <span class="w-20 flex justify-center items-center px-1 mr-2 py-1 rounded-md  bg-[#edf0f7] text-center text-xs text-slate-800 ">
            <span class="material-symbols-outlined text-sm">
            check_circle
            </span>
            <span class="mx-1">
                0/5
            </span>
        </span>
    </div>

    <div v-if="props.item.isStatu=== 'Done'" class="w-full h-full absolute top-0 bg-[#212121] rounded-xl">
        <div class="w-full flex justify-center items-center">
            <span class="material-symbols-outlined text-5xl font-extrabold text-gray-300">
                done
            </span>
        </div>
        <div class="w-full px-3">
            <h1 class="text-md text-gray-200 font-bold text-center">Congratulations !</h1>
            <p class="text-xs text-gray-200 truncate mt-2 font-semibold text-center">You earned {{props.item.point}} points for completing the mission</p>
        </div>
        <div class="w-full h-10 flex justify-center items-center ">
            <button class="w-12 py-1 rounded-md text-xs bg-[#edf0f7] text-black text-center" >Review</button>
        </div>

    </div>
    </div>
    <TaskDetails v-if="dataStore.isModalActive" ></TaskDetails>
</template>


<style scoped>

.active{
    border: 2px dashed whitesmoke;
    background-color: #323644;
}

.Todo{
    border: 1px dashed  #f06868;
}

.Inprogress{
    border: 1px dashed  #f8da5b;
}

.Done{
    border: 1px solid  #7dd87d;
}

.Backlog{
    border: 1px dashed  #5293ee;
}

</style>