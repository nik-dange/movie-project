// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlwnORpVwJx64jR8ftNjxED-Qb2T5UJVc",
    authDomain: "kinorev-21c32.firebaseapp.com",
    projectId: "kinorev-21c32",
    storageBucket: "kinorev-21c32.appspot.com",
    messagingSenderId: "840479881113",
    appId: "1:840479881113:web:e6b0a223ba359179050508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);