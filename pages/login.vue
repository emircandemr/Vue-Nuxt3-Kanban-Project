<script setup>
import {ref} from 'vue'

const inputValues = ref(
        {
            username : "",
            email : "",
            password : "",
            confirmpassword : ""
        }
    );

const registerHandler = async () => {
    if(inputValues.value.password !== inputValues.value.confirmpassword){
        alert("Passwords do not match")
        return
    }
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
            <div class="w-2/5 h-3/4 bg-white ">

            </div>
        </div>
    </div>
</template>


<style scoped>
 /* <div class="w-full flex flex-col ">
                    <Input v-model:name="inputValues.username" label="Username" > </Input>
                    <InputEmail v-model:email="inputValues.email" label="Email" > </InputEmail>
                    <InputPassword v-model:password="inputValues.password" label="Password" > </InputPassword>
                    <InputPassword v-model:password="inputValues.confirmpassword" label="Confirm Password" > </InputPassword>
                </div> */
</style>