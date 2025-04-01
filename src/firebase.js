// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQjj2TZYOL4xzYOvK1S-F6hsz8yebWow4",
    authDomain: "fir-authentication-e30e8.firebaseapp.com",
    projectId: "fir-authentication-e30e8",
    storageBucket: "fir-authentication-e30e8.firebasestorage.app",
    messagingSenderId: "465580015540",
    appId: "1:465580015540:web:232a148fc0e0eb10217ce1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
