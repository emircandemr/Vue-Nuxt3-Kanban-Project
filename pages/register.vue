<script setup>
import {ref} from 'vue'

const inputValues = ref(
        {
            name : "",
            surname : "",
            email : "",
            password : "",
            confirmpassword : ""
        }
    );

const registerHandler = async () => {
    // const email = "qwe@gmail.com"
    // const password = "Kankam.123"
    // await loginUser(email, password)
    // // authStore.setUser(inputValues.value)
}

const firebaseUser = useFirebaseUser()

</script>

<template>
    <div class="w-full h-full flex justify-center items-center bg-cover bg-[url('https://images.pexels.com/photos/1110504/pexels-photo-1110504.jpeg')] bg-center bg-no-repeat">
        <div class="w-full h-full bg-black bg-opacity-50 flex items-center">
            <div class="w-2/5 h-3/4 ml-10 p-5  flex flex-col justify-center items-center ">
                <div class="w-[70%] mb-5 ">
                    <p class="text-gray-400 text-sm">START FOR FREE</p>
                    <h1 class="text-5xl mb-3 mt-3 text-white">Create new  <span class="text-5xl text-[#2772db]" >account</span> . </h1>
                    <span class="text-sm mt-5 text-gray-400">Already A Member ? 
                    <NuxtLink>
                        <span class="text-[#2772db]">Login</span>
                    </NuxtLink> </span>
                </div>
                <div class="w-[70%] ">
                    <div class="w-full flex justify-start items-center">
                        <div ref="name" class="w-1/2 flex justify-center items-center shadow-2xl border border-[#2772db] text-white outline-none  text-sm rounded-xl px-2 py-1"
                        :class="{'border-green-800' : nameValid}">
                            <Input v-model:name="inputValues.name" label="Name" > </Input>
                            <span class="material-symbols-outlined text-2xl text-gray-400">
                                person
                            </span>
                        </div>
                        <div class="w-1/2 flex ml-5 justify-center items-center border border-[#2772db] text-white outline-none  text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 px-2 py-1">
                            <Input v-model:name="inputValues.surname" label="Last Name " > </Input>
                            <span class="material-symbols-outlined text-2xl text-gray-400">
                                person
                            </span>
                        </div>
                    </div>
                    <div class="w-full mt-5 flex justify-center items-center border border-[#2772db] text-white outline-none  text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 px-2 py-1">
                            <InputEmail v-model:email="inputValues.email" label="Email" > </InputEmail>
                            <span class="material-symbols-outlined text-2xl text-gray-400">
                                email
                            </span>
                    </div>
                    <div class="w-full mt-5 flex justify-center items-center border border-[#2772db] text-white outline-none  text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 px-2 py-1">
                        <InputPassword v-model:password="inputValues.password" label="Password" > </InputPassword>
                        <span class="material-symbols-outlined text-2xl text-gray-400 cursor-pointer">
                            visibility
                        </span>
                    </div>
                </div>
                <div class="w-[70%] mt-10 flex justify-center items-center">
                    <button class="px-3 py-3 bg-[#22559c] text-white rounded-xl">Create New Account</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>