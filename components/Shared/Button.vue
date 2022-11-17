<script setup>

defineProps({
    text : {
        type : String,
        required : true,
        default : "Button"
    },
    handler : {
        type : Function,
        required : false,
        default : () => {}
    },
    })

</script>
<template>
    <button @click="handler" class="w-1/2 px-3 py-3 bg-[#22559c] text-white rounded-xl">{{text}}</button>
</template>


<style scoped>

</style>