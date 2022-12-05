<script setup>
import { useDataStore } from '~~/stores/use-Data';

definePageMeta({
    layout : 'entry',
})
const router = useRouter()
const dataStore = useDataStore()


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
    const {$toast} = useNuxtApp();
    const email = inputs.value.filter((item) => item.label == "Email")[0].value
    const password = inputs.value.filter((item) => item.label == "Password")[0].value
    const credentials = await loginUser(email, password)
    if(credentials){
        const resultTasks = await queryByCollection("tasks")
        resultTasks.map((item) => {
            dataStore.addTask(item)
        })
        
        const resultUsers = await queryByCollection("users")
        resultUsers.map((item) => {
            dataStore.setUser(item)
        })
        router.push({ path: "/" })
        dataStore.setNotifications($toast().success("Login successful",{
            icon : "😎👌",
            background : "#22559c",
            barBackground : "#7CB9E8",
        }))
    }
    else{
        dataStore.setNotifications($toast().error("Email or password is invalid",{
            icon : "😭😭😭",
            duration : 4000,
            position : "top-left"
        }))
    }
}

</script>

<template>
    <div class="w-full lg:w-2/5 h-3/4 lg:ml-10 p-5 flex flex-col justify-center items-center ">
        <div class="w-[70%] mb-5 ">
            <p class="text-gray-400 text-sm">START FOR FREE</p>
            <h1 class="text-2xl lg:text-4xl mb-3 mt-3 text-white">Welcome  <span class="text-2xl lg:text-4xl text-[#2772db]" >Back</span> . </h1>
            <span class="text-xs lg:text-md mt-5 text-gray-400">Doesn't have an account yet ? 
            <NuxtLink to="/register">
                <span class="text-md cursor-pointer text-[#2772db] underline decoration-dotted ">Sign Up</span>
            </NuxtLink> 
        </span>
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
                <SharedIcon
                :icon="input.icon"
                :handler="typeHandler"
                color="text-gray-400"
                size="text-2xl">
                </SharedIcon>
            </div>
        </div>
        <div class="w-[70%] mt-10 flex justify-center items-center rounded-xl">
           <SharedButton 
           text="Login"
           class="w-full px-3 py-3 bg-[#22559c] rounded-xl text-white "
           :class="emailValid && passwordValid === true ? 'bg-green-800 cursor-pointer' : 'bg-[#22559c] cursor-not-allowed'"  
           :disabled="emailValid && passwordValid === true ? false : true"
           :handler="loginHandler" 
           ></SharedButton>
            <!-- <button @click="loginHandler" class="w-1/2 px-3 py-3 bg-[#22559c] text-white rounded-xl">Login</button> -->
        </div>
    </div>
</template>


<style scoped>

</style>