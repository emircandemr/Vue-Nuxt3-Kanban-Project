<script setup>
import {computed, ref} from 'vue'

const props = defineProps(["label","name"])
const emits = defineEmits(["update:name"])

const nameHandler = (e) => {
    emits("update:name",e.target.value)
}

const inputValid = computed(() => {
    return props.name.length > 1
})

</script>

<template>
    <div class="w-full flex flex-col justify-center items-center">
        <label for="text" class=" w-10/12 sm:w-1/2 mb-2 text-sm font-medium text-gray-400 ">{{props.label}}</label>
        <input 
        type="text"
        id="text"
        :value ="props.name"
        @input = "nameHandler"
        :class="{ 'border-red-500' : !inputValid }"
        class="bg-gray-50 border w-10/12 sm:w-1/2 auto text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5" />
        <span class='w-10/12 sm:w-1/2 mb-4 mt-1 px-1 text-red-800' ></span>
    </div>
</template>


<style scoped>

</style>