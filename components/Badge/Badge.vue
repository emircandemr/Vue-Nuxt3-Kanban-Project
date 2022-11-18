<script setup>

defineProps({
    text : {
        required : false,
    },
    size : {
        type : String,
        required : false,
        default : "w-12"
    },
    color : {
        type : String,
        required : false,
        default : "text-gray-500"
    },
    background : {
        type : String,
        required : false,
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
    class="py-1 px-1 flex justify-center items-center rounded-md text-center text-xs"
    :class="size ,color, background">
    <slot></slot>
        {{text}}
    </span>
</template>


<style scoped>
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