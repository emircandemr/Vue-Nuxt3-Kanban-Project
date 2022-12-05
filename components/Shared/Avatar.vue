<script setup>
import {useDataStore} from '../../stores/use-Data'

const dataStore = useDataStore()

defineProps({
    user : {
        type : Object,
        required : false,
        default : {}
    },
    size : {
        type : String,
        required : false,
        default : "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
    },
    info: {
        type : Boolean,
        required : false,
        default : false
    },
    name : {
        type : String,
        required : false,
        default : ""
    },
    isPic : {
        type : Boolean,
        required : false,
        default : false
    },
    pic : {
        type : String,
        required : false,
        default : "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=2000"
    },
})

const selectImage = ref()
const image = ref()

const pickImage = async () => {
    const selectedImage = selectImage.value.files[0]
    if(selectedImage){
        const reader = new FileReader()
        reader.readAsDataURL(selectedImage)
        reader.onload = (e) => {
            image.value = e.target.result
            dataStore.updateProfilePhoto(e.target.result)
            console.log(dataStore.user)
        }
    }
}

onUnmounted(async () => {
    if(image.value){
        await update("users", dataStore.currentUser.taskID, {
            image : image.value
        })
    }
})

const imageHandler = () => {
    document.querySelector('#image').click()
}

</script>

<template>
     <div class="group text-center relative"
     :class="size"
     @click = "isPic==true ? imageHandler() : null" >
        <img 
        class="group/edit w-full h-full border aspect-[3/2] object-cover border-black rounded-full cursor-pointer  " 
        :src="image ? image : pic" alt="Avatar">
        <input 
        type="file" 
        ref="selectImage" 
        accept="image/*" 
        id="image" 
        @input = "pickImage"
        class="bg-transparent w-full hidden"/>
        <div v-if="info" class="group/item bg-[#121212] border border-dotted rounded-xl invisible text-gray-200 px-2 py-1 absolute bottom-0 right-1 group-hover:visible group-hover:-translate-y-11 group-hover:ease-in ">
            <p class="text-sm font-bold">
                {{name}}
            </p>
        </div>
    </div>
</template>


<style scoped>

</style>