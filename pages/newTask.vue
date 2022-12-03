<script setup>
import { useDataStore } from '~~/stores/use-Data';

definePageMeta({
    layout : 'content',
    middleware : ['admin']

})

const dataStore = useDataStore()

const inputData = ref({
    id : new Date().getTime(),
    title : '',
    description : '',
    category : 'High',
    date : '',
    image : 'https://scontent.fszf2-1.fna.fbcdn.net/v/t39.30808-6/305204204_475940821213391_7309799711632212258_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gqOV7P8wxlUAX_g5Mg2&_nc_ht=scontent.fszf2-1.fna&oh=00_AfCfkr_yyVhnQxU6ryziDrs1OLwAYKzbZj-mXAGXitgssQ&oe=63752353' ,
    point : '',
    memberCount : '',
    member : {},
})


const addMember = (e) => {
    dataStore.user.filter((item) => {
        if(item.userID == e.target.value){
            inputData.value.member[e.target.value] = {
                name : item.name,
                statu : "Todo",
                id: e.target.value
            }
        }
    })
}

const members = computed(() => {
    if(inputData.value.member){
        return Object.values(inputData.value.member)
    }
})

const addTask = async () => {
    const {$toast} = useNuxtApp();
    const checkData = Object.values(inputData.value).every((item) => {
        return item !== ''
    })
    if(checkData){
        dataStore.addTask(inputData.value)
        await add("tasks", inputData.value)
        inputData.value = {
            title : '',
            description : '',
            category : 'High',
            date : '',
            image : '' ,
            point : '',
            memberCount : '',
            member : {},
        }
        dataStore.setNotifications($toast().success("Task successfully added",{
            icon : "😎👌",
            background : "#22559c",
            barBackground : "#7CB9E8",
        }))
    }
}

const deleteMember = (member) => {
    delete inputData.value.member[member.id]
}



</script>

<template>
    <div class="w-full h-full flex justify-center items-center">
        <div class="w-[95%] lg:w-3/5 min-h-[90%] max-h-full p-3 overflow-y-auto fixed bg-[#212121] rounded-2xl flex flex-col justify-center items-center text-white">
            <h1 class="text-2xl text-center font-bold text-gray-200">New Task</h1>
            <div class="w-[90%] lg:w-2/3 text-white">
                <label for="title" >Title</label>
                <input v-model="inputData.title" type="text" id="title" placeholder="Title" class="w-full  bg-[#121212] rounded-lg p-2">
            </div>
            <div class="w-[90%] lg:w-2/3  text-white">
                <label for="description">Description</label>
                <textarea id="description" v-model="inputData.description" placeholder="Description" class="w-full h-32 bg-[#121212] rounded-lg p-2"></textarea>
            </div>
            <div class="w-[90%] lg:w-2/3">
                <label for="image" class="text-white">Image</label>
                <input type="file"  id="image" class="w-full  bg-[#121212] rounded-lg py-1 px-1">
            </div>
            <div class="w-[90%] lg:w-2/3 mt-2">
                <label for="date" class="text-white"> Submit Date</label>
                <input type="date" id="date" v-model="inputData.date" class="date w-full  text-gray-300 bg-[#121212] rounded-lg p-2">
            </div>
            <div class="w-[90%] lg:w-2/3 mt-2">
                <label for="point" class="text-white">Point</label>
                <input type="number" id="point" v-model="inputData.point" placeholder="Point" class="w-full  text-gray-300 bg-[#121212] rounded-lg p-2">
            </div>
            <div class="w-[90%] lg:w-2/3 mt-2">
                <label for="category" class="text-white">Status</label>
                <select id="category" v-model="inputData.category" class="w-full  text-gray-300 bg-[#121212] rounded-lg p-2">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <div class="w-[90%] lg:w-2/3 mt-2">
                <label for="point" class="text-white">Member Count</label>
                <input type="number"  v-model="inputData.memberCount" id="point" :onKeyUp="inputData.memberCount > 5 ?   inputData.memberCount = 5 : inputData.memberCount" placeholder="Point" class="w-full h-10 text-gray-300 bg-[#121212] rounded-lg p-2">
            </div>
            <div class="w-[90%] lg:w-2/3 flex flex-col mt-2">
                <label for="status" class="text-white">Member</label>
                <div class="w-full flex rounded-md">
                    <select @change="addMember($event)" class="w-1/3 text-gray-300 bg-[#121212] rounded-l-lg p-2">
                        <option v-for="user in dataStore.user" :value="user.userID" :key="user.id" >{{user.name}}</option>
                    </select>
                    <div class="w-[90%] lg:w-2/3 flex flex-wrap text-gray-300 bg-[#121212] rounded-r-lg justify-start items-center px-1">
                        <span v-for="member in members" class="text-gray-300 flex justify-center items-center border border-gray-500 rounded-md p-1 m-1">{{member.name}} 
                            <span @click="deleteMember(member)" class="text-md ml-1 material-symbols-outlined hover:text-red-900 cursor-pointer" >
                                cancel
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="w-[90%] lg:w-2/3 mt-5">
                <button @click="addTask" class="w-full h-10 bg-blue-500 text-white rounded-md">Submit</button>
            </div>
        </div>
    </div>
</template>


<style scoped>

.date::-webkit-calendar-picker-indicator{
    filter: invert(1);
    cursor: pointer;
}


</style>