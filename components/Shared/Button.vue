<script setup>

defineProps({
    text : {
        type : String,
        required : false,
        default : "Button"
    },
    class: {
        type : String,
        required : false,
        default : "w-1/2 px-3 py-3 bg-[#22559c] text-white"
    },
    handler : {
        type : Function,
        required : false,
        default : () => {}
    },
    })

</script>
<template>
    <button 
    @click="handler" 
    :class="class">
    {{text}}
    </button>
</template>


<style scoped>

</style>