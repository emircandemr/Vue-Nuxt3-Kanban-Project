<script setup>
import {computed, ref} from 'vue'

const props = defineProps(["label","email"])
const emits = defineEmits(["update:email"])

const emailHandler = (e) => {
    emits("update:email",e.target.value)
}

const inputValid = computed(() => {
    if(!props.email.match(/^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/)){
        return "Please enter a valid email"
    }
})

</script>

<template>
    <div class="w-full flex flex-col justify-center items-center">
        <label for="email" class=" w-10/12 sm:w-1/2 mb-2 text-sm font-medium text-gray-400 ">{{props.label}}</label>
        <input 
        type="email"
        id="email"
        :value ="props.email"
        @input = "emailHandler"
        :class="{ 'border-red-500' : !inputValid }"
        class="bg-gray-50 border w-10/12 sm:w-1/2 auto text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5" />
        <span class='w-10/12 sm:w-1/2 mb-4 mt-1 px-1 text-red-800' >{{inputValid}}</span>
    </div>
</template>


<style scoped>

</style>