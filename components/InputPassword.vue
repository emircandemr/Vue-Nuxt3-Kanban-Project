<script setup>
import {computed, ref} from 'vue'

const props = defineProps(["label","password","type"])
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
    <div class="w-full flex flex-col justify-center items-center relative">
        <label for="password" class="w-full absolute top-0 left-2 text-sm font-medium text-gray-400 ">{{props.label}}</label>
        <input 
        :type="props.type"
        id="password"
        :value ="props.password"
        @input = "passwordHandler"
        :class="{ 'border-blue-500' : !inputValid }"
         class="w-full bg-transparent mt-3 p-2 outline-none" 
 />
    </div>
</template>


<style scoped>

</style>