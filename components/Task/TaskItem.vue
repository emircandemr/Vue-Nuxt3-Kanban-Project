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
    <div class="w-full bg-[#212121] border border-[#121212]  pt-3 pb-1 px-2 my-2 rounded-xl text-white shadow-xl hover:bg-[#121212] hover:border-[#212121] cursor-pointer relative"
    draggable="true"
    @dragstart="dataStore.StartDragData($event,props.item)"
    @dragenter.prevent = "dragActiveHandler"
    @dragend.prevent = "dragLeaveHandler"
    :class="{'active' : isDragActive}">

    <div class="w-full  flex justify-between items-center ">
        <span class="w-14 ml-2 py-1 px-1 rounded-md  text-center text-xs "
        :class=props.item.category>
            {{props.item.category}}
        </span>
        <span class="min-w-12 px-1 mr-2 py-1 rounded-md  bg-green-100 text-center text-xs text-green-900 ">
            +{{props.item.point}}
        </span>
        <span class="w-20 px-1 mr-2 py-1 rounded-md  bg-[#edf0f7] text-center text-xs text-slate-800 ">
          {{props.item.date}}
        </span>
    </div>

    <div class="w-full h-12 mt-2 px-2 py-1 ">
        <h1 class="text-sm font-bold text-gray-200">
            {{props.item.title}}
        </h1>

        <p class="text-xs truncate text-gray-300">
            {{props.item.description}}
        </p>
    </div>
    <div class="w-full h-10 flex justify-between items-center">
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
                0/{{props.item.memberCount}}
            </span>
        </span>
    </div>

    <div v-if="props.item.statu=== 'Done'" class="w-full h-full absolute top-0 bg-[#212121] rounded-xl">
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

.High{
    background-color: #e09696;
    color: #4a0e0e;
}

.Medium{
    background-color: #e5d386;
    color: #584e24;

}
.Low{
    background-color:  #94d594;
    color: #265526;
}

.Backlog{
    background-color: #5293ee;
}

</style>