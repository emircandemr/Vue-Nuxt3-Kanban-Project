<script setup>

defineProps({
    task : {
        type : Object,
        required : false,
    },
    point : {
        type : Number,
        required : false,
        default : 0
    },
})

</script>

<template>
    <div class="w-full h-full px-2 absolute top-0 left-0 bg-[#212121] rounded-xl hover:hidden ">
        <div class="w-full  flex justify-center items-center">
            <SharedIcon
            icon="done"
            size="text-6xl font-extrabold"
            color="text-gray-300">
            </SharedIcon>
        </div>
        <div class="w-full mt-2">
            <h1 class="text-md text-gray-200 font-bold text-center">Congratulations !</h1>
            <p class="text-xs text-gray-200 truncate mt-2 font-semibold text-center">You earned {{point}} points for completing the mission</p>
        </div>
    </div>
</template>


<style scoped>

</style>