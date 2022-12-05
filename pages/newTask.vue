<script setup>
import { useDataStore } from '~~/stores/use-Data';

definePageMeta({
    layout : 'content',
    middleware : ['admin', 'auth']
})
const dataStore = useDataStore()
const router = useRouter()

const inputs = ref([
    {
        label : 'Title',
        type : 'text',
        value : "",
        placeholder : 'Enter title',
    },
    {
        label : 'Description',
        type : 'text',
        value : "",
        placeholder : 'Enter description',
    },
    {
        label : 'Date',
        type : 'date',
        value : "",
        placeholder : 'Enter date',
    },
    {
        label : 'Point',
        type : 'number',
        value : "",
        placeholder : 'Enter point',
        limit : 999
    },
    {
        label : 'Member Count',
        type : 'number',
        value : "",
        placeholder : 'Enter member count',
        limit : 5
    },
])

const member = ref({})
const category = ref('High')
const selectedImage = ref()
const image = ref()

const addMember = (e) => {
    dataStore.user.filter((item) => {
        if(item.userID == e.target.value){
           member.value[e.target.value] = {
                name : item.name,
                statu : "Todo",
                id: e.target.value,
            }
        }
    })
}

const members = computed(() => {
    if(member.value){
        return Object.values(member.value)
    }
})

const pickImage = () => {
    const selectImage = selectedImage.value.files[0] || selectedImage.value.files
    if(selectImage){
        const reader = new FileReader()
        reader.readAsDataURL(selectImage)
        reader.onload = (e) => {
            image.value = e.target.result
        }
    }
}

const addTask = async () => {
    const {$toast} = useNuxtApp();
    const title = inputs.value.filter((item) => item.label == 'Title')[0].value
    const description = inputs.value.filter((item) => item.label == 'Description')[0].value
    const date = inputs.value.filter((item) => item.label == 'Date')[0].value
    const point = inputs.value.filter((item) => item.label == 'Point')[0].value
    const memberCount = inputs.value.filter((item) => item.label == 'Member Count')[0].value
    
    const data = {
        id : new Date().getTime(),
        title : title,
        description : description,
        category : category.value,
        date : date,
        taskImage : image.value ||  "https://user-images.githubusercontent.com/72731296/205636356-6b460e79-44d8-49b1-b88a-b4c5bd004bcd.png" ,
        point : Number(point),
        memberCount : memberCount,
        member : member.value
    }


    if(title && description && date && point && memberCount){
        dataStore.addTask(data)
        await add("tasks", data)
        dataStore.setNotifications($toast().success('Task added'))
        router.push('/tasks')
        member.value = {}
}
}

const deleteMember = (id) => {
    delete member.value[id]
}
</script>

<template>
    <div class="w-full h-full flex justify-center items-center">
        <div class="w-[95%] lg:w-3/5 min-h-[90%] max-h-full p-3 overflow-y-auto fixed bg-[#212121] rounded-2xl flex flex-col justify-center items-center text-white">
            <h1 class="text-2xl text-center font-bold text-gray-200">New Task</h1>
            <div  v-for="(input, index) in inputs" :key="index"  class="w-[90%] lg:w-2/3 mt-3 text-white">
                <SharedInput 
                v-model:value="input.value"
                :label="input.label"
                :type="input.type"
                :placeHolder="input.placeholder"
                :limit="input.limit"
                class="w-full p-2 mt-5 text-md bg-[#121212] rounded-lg">
                </SharedInput>
            </div>
            <div class="w-[90%] lg:w-2/3">
                <label for="image" class="text-white">Image</label>
                <input type="file" 
                ref="selectedImage" 
                accept=".jpg, .jpeg, .png" 
                id="image" 
                @input = "pickImage"
                class="w-full  bg-[#121212] rounded-lg py-1 px-1">
            </div>
            <div class="w-[90%] lg:w-2/3 mt-2">
                <label for="category" class="text-white">Status</label>
                <select id="category" v-model="category" class="w-full  text-gray-300 bg-[#121212] rounded-lg p-2">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <div class="w-[90%] lg:w-2/3 flex flex-col mt-2">
                <label for="status" class="text-white">Member</label>
                <div class="w-full flex rounded-md">
                    <select @change="addMember($event)" class="w-1/3 text-gray-300 bg-[#121212] rounded-l-lg p-2">
                        <option v-for="user in dataStore.user" :value="user.userID" :key="user.id" >{{user.name}}</option>
                    </select>
                    <div class="w-[90%] lg:w-2/3 flex flex-wrap text-gray-300 bg-[#121212] rounded-r-lg justify-start items-center px-1">
                        <span v-for="member in members" class="text-gray-300 flex justify-center items-center border border-gray-500 rounded-md p-1 m-1">{{member.name}} 
                            <span @click="deleteMember(member.id)" class="text-md ml-1 material-symbols-outlined hover:text-red-900 cursor-pointer" >
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


<style>

.date::-webkit-calendar-picker-indicator{
    filter: invert(1);
    cursor: pointer;
}

.scroll-bar::-webkit-scrollbar {
    width: 6px;
}
 
.scroll-bar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);

}
 
.scroll-bar::-webkit-scrollbar-thumb {
  background-color: #393e46;
  outline: 1px solid #121212;
  border-radius: 20px;

}


</style>