<script setup>

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
    }
})

</script>

<template>
     <div class="group text-center relative"
     :class="size" >
        <img 
        class="group/edit w-full h-full border border-black rounded-full cursor-pointer  " 
        src="../../assets/img/avatar.webp" alt="Avatar">
        <div v-if="info" class="group/item bg-[#121212] border border-dotted rounded-xl invisible text-gray-200 px-2 py-1 absolute bottom-0 right-1 group-hover:visible group-hover:-translate-y-11 group-hover:ease-in ">
            <p class="text-sm font-bold">
                {{name}}
            </p>
        </div>
    </div>
</template>


<style scoped>

</style>