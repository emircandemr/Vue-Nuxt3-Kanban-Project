<script setup>

definePageMeta({
    layout : 'entry',
})
const router = useRouter()

const emailValid = computed(() => {
    const select = inputs.value.filter((item) => item.label == "Email")
    return (/^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/).test(select[0].value)

})

const passwordValid = computed(() => {
    const password = inputs.value.filter((item) => item.label == "Password")[0].value
    if(password.length < 8){
        return "Password must contain at least 8 characters"
    }
    if(!password.match(/[A-Z]/)){
        return "Password must contain at least one uppercase letter"
    }
    if(!password.match(/[a-z]/)){
        return "Password must contain at least one lowercase letter"
    }
    if(!password.match(/[0-9]/)){
        return "Password must contain at least one number"
    }
    if(!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)){
        return "Password must contain at least one special character"
    }
    return true
})

const typeHandler = () => {
    const password = inputs.value.filter((item) => item.label == "Password")[0]
    password.type = password.type == "password" ? "text" : "password"
    password.icon = password.icon == "visibility" ? "visibility_off" : "visibility"
}


const inputs = ref([
{
    label : "Email",
    type : "email",
    value : "",
    icon : "email",
    handle : emailValid
},
{
    label : "Password",
    type : "password",
    value : "",
    handler : typeHandler,
    icon : "visibility",
    handle : passwordValid 
},
]) 

const loginHandler = async () => {
    const email = inputs.value.filter((item) => item.label == "Email")[0].value
    const password = inputs.value.filter((item) => item.label == "Password")[0].value
    const credentials = await loginUser(email, password)
    if(credentials){
        router.push({ path: "/" })
    }
}

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
            <div 
            v-for="input in inputs" 
            :key="input.label" 
            class="w-full mt-5 flex justify-center items-center border border-[#2772db] text-white outline-none  text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 px-2 py-1"
            :class="{'border-green-800' : input.handle === true }">
                <SharedInput 
                    v-model:value="input.value" 
                    :label="input.label" 
                    :type="input.type" > 
                </SharedInput>
                <span @click="input.handler" class="material-symbols-outlined text-2xl text-gray-400 cursor-pointer">
                    {{input.icon}}
                </span>
            </div>
        </div>
        <div class="w-[70%] mt-10 flex justify-center items-center">
           <SharedButton text="Login" :handler="loginHandler" ></SharedButton>
            <!-- <button @click="loginHandler" class="w-1/2 px-3 py-3 bg-[#22559c] text-white rounded-xl">Login</button> -->
        </div>
    </div>
</template>


<style scoped>

</style>