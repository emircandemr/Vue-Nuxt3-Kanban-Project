<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()
const router = useRouter()

definePageMeta({
    layout : 'entry',
})

const firebaseUser = useFirebaseUser()

const inputValues = ref(
        {
            name : "",
            surname : "",
            email : "",
            password : "",
        }
    );

const nameValid = computed(() => {
    return inputValues.value.name.length > 2
})

const surnameValid = computed(() => {
    return inputValues.value.surname.length > 2
})

const emailValid = computed(() => {
    return (/^[a-zA-Z]+[a-zA-Z0-9_.]+@[a-zA-Z.]+[a-zA-Z]$/).test(inputValues.value.email)

})

const passwordValid = computed(() => {
    if(inputValues.value.password.length < 8){
        return "Password must contain at least 8 characters"
    }
    if(!inputValues.value.password.match(/[A-Z]/)){
        return "Password must contain at least one uppercase letter"
    }
    if(!inputValues.value.password.match(/[a-z]/)){
        return "Password must contain at least one lowercase letter"
    }
    if(!inputValues.value.password.match(/[0-9]/)){
        return "Password must contain at least one number"
    }
    if(!inputValues.value.password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)){
        return "Password must contain at least one special character"
    }
    return 
})
const type = ref("password")

const typeHandler = () => {
    type.value = type.value === "password" ? "text" : "password"
}

const formValid = computed(() => {
      return  nameValid.value && surnameValid.value && emailValid.value && !passwordValid.value
})


const registerHandler = async () => {
    await createUser(inputValues.value.email , inputValues.value.password)
    router.push({ path: "/login" })
    inputValues.value = {...inputValues.value , uid : firebaseUser.value.uid}
    dataStore.setUser(inputValues.value)
    // await loginUser(email, password)
    // // authStore.setUser(inputValues.value)
}


</script>

<template>
    <div class="w-2/5 h-3/4 ml-10 p-5  flex flex-col justify-center items-center ">
        <div class="w-[70%] mb-5 ">
            <p class="text-gray-400 text-sm">START FOR FREE</p>
            <h1 class="text-5xl mb-3 mt-3 text-white">Create new  <span class="text-5xl font-bold text-[#2772db]" >account</span> . </h1>
            <span class="text-sm mt-5 text-gray-400">Already A Member ? 
            <NuxtLink to="/login">
                <span class="text-[#2772db] underline decoration-dotted ">Login</span>
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
                <div class="w-1/2 flex ml-5 justify-center items-center border border-[#2772db] text-white outline-none  text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 px-2 py-1"
                :class="{'border-green-800' : surnameValid}">
                    <Input v-model:name="inputValues.surname" label="Last Name " > </Input>
                    <span class="material-symbols-outlined text-2xl text-gray-400">
                        person
                    </span>
                </div>
            </div>
            <div class="w-full mt-5 flex justify-center items-center border border-[#2772db] text-white outline-none  text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 px-2 py-1"
            :class="{'border-green-800' : emailValid }">
                    <InputEmail v-model:email="inputValues.email" label="Email" > </InputEmail>
                    <span class="material-symbols-outlined text-2xl text-gray-400">
                        email
                    </span>
            </div>
            <div class="w-full mt-5 flex justify-center items-center border border-[#2772db] text-white outline-none  text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 px-2 py-1"
            :class="{'border-green-800' : !passwordValid}">
                <InputPassword v-model:password="inputValues.password" label="Password" :type="type" > </InputPassword>
                <span  @click="typeHandler" class="material-symbols-outlined text-2xl text-gray-400 cursor-pointer">
                    visibility
                </span>
            </div>
            <span class="text-red-800 px-2 mt-1 text-xs">{{passwordValid}}</span>
        </div>
        <div class="w-[70%] mt-10 flex justify-center items-center">
            <button @click="registerHandler" 
            :disabled= !formValid
            :class="{'bg-green-800 cursor-pointer hover:bg-green-700' : formValid, 'cursor-not-allowed bg-[#22559c]' : !formValid }"
            class="w-1/2 px-3 py-3  text-white rounded-xl ">Create New Account</button>
        </div>
    </div>
</template>


<style scoped>

</style>