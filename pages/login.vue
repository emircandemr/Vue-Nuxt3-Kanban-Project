<script setup>

definePageMeta({
    layout : 'entry',
})

const inputValues = ref(
        {
            name : "",
            surname : "",
            email : "",
            password : "",
            confirmpassword : ""
        }
    );


</script>

<template>
    <div class="w-2/5 h-3/4 ml-10 p-5 flex flex-col justify-center items-center ">
        <div class="w-[70%] mb-5 ">
            <p class="text-gray-400 text-sm">START FOR FREE</p>
            <h1 class="text-5xl mb-3 mt-3 text-white">Welcome  <span class="text-5xl text-[#2772db]" >Back</span> . </h1>
            <span class="text-sm mt-5 text-gray-400">Doesn't have an account yet ? 
            <NuxtLink to="/register">
                <span class="text-md cursor-pointer text-[#2772db] underline decoration-dotted ">Sign Up</span>
            </NuxtLink> </span>
        </div>
        <div class="w-[70%] ">
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
            <button class="w-1/2 px-3 py-3 bg-[#22559c] text-white rounded-xl">Login</button>
        </div>
    </div>
</template>


<style scoped>

</style>