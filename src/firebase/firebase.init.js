// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQ5DlB-KcX1EsxMvMK6hPcWKuG4RwcP-U",
    authDomain: "red-onion-c424a.firebaseapp.com",
    projectId: "red-onion-c424a",
    storageBucket: "red-onion-c424a.appspot.com",
    messagingSenderId: "207332857448",
    appId: "1:207332857448:web:382934f7c03c939c6a4ddd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;