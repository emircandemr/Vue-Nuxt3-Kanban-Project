<script setup>

defineProps({
    icon : {
        type : String,
        required : false,
        default : "home"
    },
    size : {
        type : String,
        required : false,
        default : "text-2xl"
    },
    color : {
        type : String,
        required : false,
        default : "text-black"
    },
    handler : {
        type : Function,
        required : false,
        default : () => {}
    },
})

</script>

<template>
    <span 
    @click="handler"
    :class="size , color"
    class="material-symbols-outlined cursor-pointer">
        {{icon}}
    </span>
</template>


<style scoped>

</style>

