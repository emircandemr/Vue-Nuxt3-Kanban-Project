import { defineStore } from "pinia";
import {auth} from "../firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore("auth", {
    state: () => {
        return {
            user: {
                username: "",
                password: "",
                confirmpassword: "",
                email: "",
                isLogin: false,
            },
        };
    },
    actions: {
        setUser(user) {
            this.user.username = user.username
            this.user.password = user.password
            this.user.confirmpassword = user.confirmpassword
            this.user.email = user.email
            this.user.isLogin = true
            this.registerUser()
        },
        async registerUser() {
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    this.user.email,
                    this.user.password
                );
                console.log(userCredential);
            } catch (error) {
                console.log(error);
            } 
        }
    },
});

