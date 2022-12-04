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
    placeHolder: {
        type : String,
        required : false,
    },
    class: {
        type : String,
        required : false,
        default :"w-full bg-transparent mt-3 p-1 outline-none"
    },
    limit : {
        type : Boolean,
        required : false,
        default : false
    }
})

const emits = defineEmits(["update:value"])

const getValue = (e) => {
    emits("update:value",e.target.value)
}

</script>

<template>
    <div class="w-full  flex flex-col justify-center items-center relative">
        <label :for="type" class="w-full absolute -top-1 left-1 text-sm font-medium text-gray-400 ">{{label}}</label>
        <input 
        :type="type"
        :id="type"
        :value="value"
        :placeholder="placeHolder"
        @input = "getValue"
        autocomplete="off"
        :onKeyup = "limit ? value > 5 ? value = 5 : value : ''"  
        :class="class" />
    </div>
</template>


<style scoped>

</style>