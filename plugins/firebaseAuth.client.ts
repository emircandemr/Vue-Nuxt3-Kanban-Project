import { initializeApp } from "firebase/app";
import { getAuth}from 'firebase/auth'

export default defineNuxtPlugin(nuxtApp => {

    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        authDomain: "vue-taskmanagement.firebaseapp.com",
        projectId: "vue-taskmanagement",
        storageBucket: "vue-taskmanagement.appspot.com",
        messagingSenderId: "343636858466",
        appId: "1:343636858466:web:16df650d0ffa6e33bc633b"
    }
    const app = initializeApp(firebaseConfig);

    initUser()

    const auth = getAuth(app);

    nuxtApp.provide('auth', auth)
    nuxtApp.vueApp.provide('auth', auth)


  })