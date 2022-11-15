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
    <div class="w-full flex flex-col justify-center items-center relative">
        <label for="email" class="w-full absolute top-0 left-2 text-sm font-medium text-gray-400 ">{{props.label}}</label>
        <input 
        type="email"
        id="email"
        :value ="props.email"
        @input = "emailHandler"
        :class="{ 'border-red-500' : !inputValid }"
        class="w-full bg-transparent mt-3 p-2 outline-none" />
    </div>
</template>


<style scoped>

</style>