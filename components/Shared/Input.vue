<script setup>

defineProps({
    label :{
        type : String,
        required : false,
        default : "Label"
    },
    value : {
        type : String,
        required : true,
        default : "value"
    },
    type : {
        type : String,
        required : false,
        default : "text"
    },
})

const emits = defineEmits(["update:value"])

const getValue = (e) => {
    emits("update:value",e.target.value)
}

</script>

<template>
    <div class="w-full  flex flex-col justify-center items-center relative">
        <label :for="type" class="w-full absolute top-0 left-2 text-sm font-medium text-gray-400 ">{{label}}</label>
        <input 
        :type="type"
        :id="type"
        :value="value"
        @input = "getValue"
        autocomplete="off"
        class="w-full bg-transparent mt-3 p-2 outline-none" />
    </div>
</template>


<style scoped>

</style>