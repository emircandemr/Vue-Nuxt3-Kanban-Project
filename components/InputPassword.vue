<script setup>
import {computed, ref} from 'vue'

const props = defineProps(["label","password"])
const emits = defineEmits(["update:password"])

const passwordHandler = (e) => {
    emits("update:password",e.target.value)
}

const inputValid = computed(() => {
    if(props.password.length < 8){
        return "Password must contain at least 8 characters"
    }
    if(!props.password.match(/[A-Z]/)){
        return "Password must contain at least one uppercase letter"
    }
    if(!props.password.match(/[a-z]/)){
        return "Password must contain at least one lowercase letter"
    }
    if(!props.password.match(/[0-9]/)){
        return "Password must contain at least one number"
    }
    if(!props.password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)){
        return "Password must contain at least one special character"
    }
    return 
})

</script>

<template>
    <div class="w-full flex flex-col justify-center items-center">
        <label for="password" class=" w-10/12 sm:w-1/2 mb-2 text-sm font-medium text-gray-400 ">{{props.label}}</label>
        <input 
        type="password"
        id="password"
        :value ="props.password"
        @input = "passwordHandler"
        :class="{ 'border-blue-500' : !inputValid }"
        class="bg-gray-50 border w-10/12 sm:w-1/2 auto text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5" />
        <span class='w-10/12 sm:w-1/2 mb-4 mt-1 px-1 text-red-800' >{{inputValid}}</span>
    </div>
</template>


<style scoped>

</style>