<script setup>
import {ref} from 'vue'
import {useAuthStore} from '../stores/use-Auth'
// import {useDataStore} from '../stores/use-Data'

const authStore = useAuthStore()

const inputValues = ref(
        {
            username : "",
            email : "",
            password : "",
            confirmpassword : ""
        }
    );

const registerHandler = () => {
    if(inputValues.value.password !== inputValues.value.confirmpassword){
        alert("Passwords do not match")
        return
    }
    authStore.setUser(inputValues.value)
}


</script>

<template>
    <div class="w-full h-full flex justify-center items-center bg-[#edf0f7]">
        <div class="w-2/3 h-2/3 bg-white shadow-2xl rounded-xl flex ">
            <div class="w-1/2 h-full flex justify-center items-center">
                <div class="w-full h-full flex flex-col justify-center bg-red-500 items-center">
                    {{authStore.user}}
                </div>
            </div>
            <div class="w-1/2 h-full flex flex-col justify-center items-center">
                <div class="w-full text-center mb-6 ">
                    <h1 class="text-4xl mb-5 font-Pacifico text-[#131210ee]">Register</h1>
                    <p>Don't have an account ? Create your account, it takes less than a minute</p>
                </div>
                <div class="w-full flex flex-col ">
                    <Input v-model:name="inputValues.username" label="Username" > </Input>
                    <InputEmail v-model:email="inputValues.email" label="Email" > </InputEmail>
                    <InputPassword v-model:password="inputValues.password" label="Password" > </InputPassword>
                    <InputPassword v-model:password="inputValues.confirmpassword" label="Confirm Password" > </InputPassword>
                </div>
                <div class="w-full flex justify-center ">
                    <button class="p-2 bg-slate-800 text-white rounded-lg" @click="registerHandler" >Register</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>