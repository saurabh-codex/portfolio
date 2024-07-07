import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "@firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBx4FdqeUbvKdR25YT_diRtq49Sn8Yrgi0",
    authDomain: "portfolio-2f4cf.firebaseapp.com",
    projectId: "portfolio-2f4cf",
    storageBucket: "portfolio-2f4cf.appspot.com",
    messagingSenderId: "996066739081",
    appId: "1:996066739081:web:eb82eb3dd0b483a670d758"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)