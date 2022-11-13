import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzButuzKAnPhIZk7Ea4RMpcD6_Ks8T6_Q",
  authDomain: "vue-taskmanagement.firebaseapp.com",
  projectId: "vue-taskmanagement",
  storageBucket: "vue-taskmanagement.appspot.com",
  messagingSenderId: "343636858466",
  appId: "1:343636858466:web:16df650d0ffa6e33bc633b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
