// import { defineStore } from "pinia";
// import {auth} from "../firebase/config"
// import {
//     getAuth,
//     onAuthStateChanged,
//     signInWithEmailAndPassword,
//     createUserWithEmailAndPassword,
//  } from 'firebase/auth'

// export const useAuthStore = defineStore("auth", {
//     state: () => {
//         return {
//             user: {},
//         };
//     },
//     actions: {
//         setUser(user) {
//             this.user = user;
//         },
//         async createUser (email, password){
//             const auth = getAuth();
//             const userCredential = await createUserWithEmailAndPassword(auth, email, password)
//             return userCredential
//         },
//         async signIn (email, password){
//             const auth = getAuth();
//             const userCredential = await signInWithEmailAndPassword(auth, email, password)
//             return userCredential
//         },
//         async signOut(){
//             const auth = getAuth();

//             await auth.signOut()
//         },
//         async authStateChange(){
//             const auth = getAuth();

//             onAuthStateChanged(auth, (user) => {
//                 if (user) {
//                     this.setUser(user)
//                 }
//             })
//         }
//     },
// });




        // async setUser(user) {
        //     this.user.username = user.username
        //     this.user.password = user.password
        //     this.user.confirmpassword = user.confirmpassword
        //     this.user.email = user.email
        //     this.user.isLogin = true
        //     await this.registerUser()
        // },
        // async registerUser() {
        //     try {
        //         const userCredential = await createUserWithEmailAndPassword(
        //             auth,
        //             this.user.email,
        //             this.user.password
        //         );
        //         console.log(userCredential);
        //     } catch (error) {
        //         console.log(error);
        //     } 
        // }

