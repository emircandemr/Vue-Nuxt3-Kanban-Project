<script setup>
import { useDataStore } from '~~/stores/use-Data';


definePageMeta({
    layout : 'content',
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
        if(item.id == e.target.value){
            inputData.value.member[e.target.value] = {
                name : item.name,
                statu : "Todo"
            }
        }
    })
    // inputData.value.members = {
    //     ...inputData.value.members,
    //     [e.target.value] : e.target.value
    // }
}

const members = computed(() => {
    if(inputData.value.member){
        return Object.values(inputData.value.member)
    }
})

const addTask = () => {
    dataStore.addTask(inputData.value)
    inputData.value = {
        title : '',
        description : '',
        statu : 'High',
        date : '',
        image : '' ,
        point : '',
        memberCount : '',
        member : {},
    }
}

</script>

<template>
    <div class="w-full h-full flex justify-center items-center">
        <div class="w-3/5 h-full bg-[#212121] rounded-2xl flex flex-col justify-center items-center">
            <h1 class="text-2xl text-center font-bold text-gray-200">New Task</h1>
            {{inputData.members}}
            <div class="w-2/3 text-white">
                <label for="title" >Title</label>
                <input v-model="inputData.title" type="text" id="title" placeholder="Title" class="w-full h-10 bg-[#121212] rounded-lg p-2">
            </div>
            <div class="w-2/3 mt-1 text-white">
                <label for="description">Description</label>
                <textarea id="description" v-model="inputData.description" placeholder="Description" class="w-full h-32 bg-[#121212] rounded-lg p-2"></textarea>
            </div>
            <div class="w-2/3">
                <label for="image" class="text-white">Image</label>
                <input type="file"  id="image" class="w-full h-10 bg-[#121212] rounded-lg py-1 px-1">
            </div>
            <div class="w-2/3 mt-2">
                <label for="date" class="text-white"> Submit Date</label>
                <input type="date" id="date" v-model="inputData.date" class="date w-full h-10 text-gray-300 bg-[#121212] rounded-lg p-2">
            </div>
            <div class="w-2/3 mt-2">
                <label for="point" class="text-white">Point</label>
                <input type="number" id="point" v-model="inputData.point" placeholder="Point" class="w-full h-10 text-gray-300 bg-[#121212] rounded-lg p-2">
            </div>
            <div class="w-2/3 mt-2">
                <label for="category" class="text-white">Status</label>
                <select id="category" v-model="inputData.category" class="w-full h-10 text-gray-300 bg-[#121212] rounded-lg p-2">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <div class="w-2/3 mt-2">
                <label for="point" class="text-white">Member Count</label>
                <input type="number" v-model="inputData.memberCount" id="point" placeholder="Point" class="w-full h-10 text-gray-300 bg-[#121212] rounded-lg p-2">
            </div>
            <div class="w-2/3 flex flex-col mt-2">
                <label for="status" class="text-white">Member</label>
                <div class="w-full flex rounded-md">
                    <template></template>
                    <select     @change="addMember($event)" class="w-1/3 text-gray-300 bg-[#121212] rounded-l-lg p-2">
                        <option v-for="user in dataStore.user" :value="user.id" :key="user.id" >{{user.name}}</option>
                    </select>
                    <div class="w-2/3 flex flex-wrap text-gray-300 bg-[#121212] rounded-r-lg justify-start items-center px-1">
                        <span v-for="member in members" class="text-gray-300 flex justify-center items-center border border-gray-500 rounded-md p-1 m-1">{{member.name}} 
                            <span class="text-md ml-1 material-symbols-outlined hover:text-red-900 cursor-pointer" >
                                cancel
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="w-2/3 mt-5">
                <button @click="addTask" class="w-full h-10 bg-blue-500 text-white rounded-md">Submit</button>
            </div>
        </div>
        <div class="bg-red-500 w-96 ml-5 h-full text-white">
            <code>
                {{dataStore.data}}
            </code>

        </div>

    </div>
</template>


<style scoped>

.date::-webkit-calendar-picker-indicator{
    filter: invert(1);
    cursor: pointer;
}


</style>