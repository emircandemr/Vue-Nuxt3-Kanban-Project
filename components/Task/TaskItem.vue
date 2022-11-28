<script setup>
import {useDataStore} from '../../stores/use-Data'

const dataStore = useDataStore()

const props = defineProps(["item","statu"])

const firebaseUser = useFirebaseUser()
const userID = firebaseUser.value?.uid

const isDragActive = ref(false)

const dragActiveHandler = () => {
    isDragActive.value = !isDragActive.value
}

// const dragLeaveHandler = () => {
//     isDragActive.value = false
// }

watchEffect(async () => {
    console.log(props.item.member[userID])
    await update("tasks", props.item.taskID, {
        member : {
            ...props.item.member,
            [userID] : {
                name : props.item.member[userID].name,
                statu : props.item.member[userID].statu
            }
        }
    })
}, props.item.member[userID].statu  )


const modalHandler = () => {
    dataStore.setModalChange()
    dataStore.setSelectedData(props.item)
}
</script>

<template>
    <div class="w-full bg-[#212121] border border-[#121212]  py-2 px-3 my-2 rounded-xl text-white shadow-xl hover:bg-[#121212] hover:border-[#212121] cursor-pointer relative"
    draggable="true"
    @dragstart="dataStore.StartDragData($event,props.item)"
    @dragenter.prevent = "dragActiveHandler"
    @dragend.prevent = "dragActiveHandler"
    :class="{'active' : isDragActive}">
    <div class="w-full h-8 flex justify-between items-center ">
        <Badge 
        size="w-14"
        :text="props.item.category"
        :color="props.item.category"
        :background="props.item.category">
        </Badge>
        <Badge
        size="w-12"
        color="text-green-900"
        background="bg-green-200">
        <span>
            +{{props.item.point}}
        </span>
        </Badge>
        <Badge
        size="w-20"
        :text=props.item.date
        color="text-slate-800"
        background="bg-[#edf0f7]">
        </Badge>
    </div>

    <div class="w-full h-12 my-2 py-1 ">
        <h1 class="text-sm font-bold text-gray-200">
            {{props.item.title}}
        </h1>
        <p class="text-xs truncate text-gray-300">
            {{props.item.description}}
        </p>
    </div>
    <div class="w-full h-8 flex justify-between items-center">
        <SharedButton
        text="Inspect"
        :handler="modalHandler"
        class="w-14 p-1 rounded-md text-xs bg-[#edf0f7] text-black hover:bg-[#2d2d2d] hover:text-white">
        </SharedButton>
        <Badge>
            <SharedIcon 
            icon="star"
            size="text-md"
            :handler= "() => dataStore.setFavorite(props.item.id)"
            :color='(props.item.isFavorite ? "text-[#d4af37]" : "text-gray-500")'>
            </SharedIcon>
        </Badge>
        <Badge
        size="w-20"
        color="text-slate-800"
        background="bg-[#edf0f7]">
        <SharedIcon 
        icon="check_circle"
        size="text-sm mr-1"
        color="text-black">
        </SharedIcon>
        <span>0/{{props.item.memberCount}}</span>
        </Badge>
    </div>
    <TaskDone
        v-if="props.statu==='Done'"
        :point = "props.item.point">
    </TaskDone>
    
</div>
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