 import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
 } from 'firebase/auth'
import { ref } from 'vue'
import { useFirebaseUser } from './useStates'

export const createUser = async (email: string, password: string) => {
    const auth = getAuth()
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential
}

export const loginUser = async (email: string, password: string) => {
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    .then(
        (userCredential) => {
            return userCredential
        },
    )
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
    })  
    return userCredential
}

export const signOut = async () => {
    const auth = getAuth()
    const userCredential = await auth.signOut()
    return userCredential
}



export const initUser = () => {
    const auth = getAuth()
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = auth.currentUser;
    // const user = ref(null)
    // const isAuthenticated = ref(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("deneme" , user)
            // isAuthenticated.value = true
            // user = user
        } else {
            console.log("deneme2" , user)
            // isAuthenticated.value = false
            // user = null
        }
        firebaseUser.value = user;
    })

    // return { user, isAuthenticated }
}