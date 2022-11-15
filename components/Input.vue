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
    <div class="w-full  flex flex-col justify-center items-center relative">
        <label for="text" class="w-full absolute top-0 left-2 text-sm font-medium text-gray-400 ">{{props.label}}</label>
        <input 
        type="text"
        id="text"
        :value ="props.name"
        @input = "nameHandler"
        class="w-full bg-transparent mt-3 p-2 outline-none" />
    </div>
</template>


<style scoped>

</style>