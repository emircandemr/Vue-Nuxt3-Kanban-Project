<script setup>
import {useDataStore} from '../stores/use-Data'

const dataStore = useDataStore()
const router = useRouter()

definePageMeta({
    layout : 'entry',
})

const firebaseUser = useFirebaseUser()

// const register = async () => {
//     try {
//         const user = await firebase.auth().createUserWithEmailAndPassword(inputValues.value.email,inputValues.value.password)
//         await user.user.updateProfile({
//             displayName : inputValues.value.name + " " + inputValues.value.surname
//         })
//         await firebase.firestore().collection("users").doc(user.user.uid).set({
//             name : inputValues.value.name,
//             surname : inputValues.value.surname,
//             email : inputValues.value.email,
//             password : inputValues.value.password,
//             uid : user.user.uid,
//             photoURL : user.user.photoURL,
//             tasks : []
//         })
//         await firebase.auth().signOut()
//         router.push("/login")
//     } catch (error) {
//         console.log(error)
//     }
// }

const nameValid = computed(() => {
    const select = inputs.value.filter((item) => item.label == "Name")
    return select[0].value.length > 2
})

const surnameValid = computed(() => {
    const select = inputs.value.filter((item) => item.label == "Surname")
    return select[0].value.length > 2
})

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
    return Boolean(true)
})

const typeHandler = () => {
    const password = inputs.value.filter((item) => item.label == "Password")[0]
    password.type = password.type == "password" ? "text" : "password"
    password.icon = password.icon == "visibility" ? "visibility_off" : "visibility"
}

const formValid = computed(() => {
      return  nameValid.value && surnameValid.value && emailValid.value && passwordValid.value == true
})

const inputs = ref([
    {
        label : "Name",
        type : "text",
        value : "",
        icon : "person",
        handle : nameValid 
    },
    {
        label : "Surname",
        type : "text",
        value : "",
        icon : "person",
        handle : surnameValid
    },
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

const registerHandler = async () => {
    const email = inputs.value.filter((item) => item.label == "Email")[0].value
    const password = inputs.value.filter((item) => item.label == "Password")[0].value
    await createUser(email , password)
    dataStore.setUser(
        {
            name : inputs.value.filter((item) => item.value)[0].value,
            id : firebaseUser.value.uid,
        }   
        )
    console.log(dataStore.user)
    router.push({ path: "/login" })
    // await loginUser(email, password)
    // // authStore.setUser(inputValues.value)
}

onMounted(() => {
    const result = queryByCollection("users")
    console.log(result)
})

</script>

<template>
    <div class="w-2/5 h-3/4 ml-10 p-5  flex flex-col justify-center items-center ">
        {{formValid}}
        <div class="w-[70%] mb-5 ">
            <p class="text-gray-400 text-sm">START FOR FREE</p>
            <h1 class="text-5xl mb-3 mt-3 text-white">Create new  <span class="text-5xl font-bold text-[#2772db]" >account</span> . </h1>
            <span class="text-sm mt-5 text-gray-400">Already A Member ? 
            <NuxtLink to="/login">
                <span class="text-[#2772db] underline decoration-dotted ">Login</span>
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
            <span v-if="passwordValid !== true" class="text-red-800 px-2 mt-1 text-xs">{{passwordValid}}</span> 
        </div>
        <div class="w-[70%] mt-10 flex justify-center items-center">
            <button @click=registerHandler
            :disabled= !formValid
            :class="{'bg-green-800 cursor-pointer hover:bg-green-700' : formValid, 'cursor-not-allowed bg-[#22559c]' : !formValid }"
            class="w-1/2 px-3 py-3  text-white rounded-xl ">Create New Account</button>
        </div>
    </div>
</template>

<style scoped>

</style>