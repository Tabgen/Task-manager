// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, addDoc, setDoc, doc, getDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkw2iW6lNTxo8C0xPReAE--TvLpnEe5nc",
    authDomain: "task-database-4177d.firebaseapp.com",
    projectId: "task-database-4177d",
    storageBucket: "task-database-4177d.appspot.com",
    messagingSenderId: "675423614139",
    appId: "1:675423614139:web:e7e55e9dc5c3fcca5fa59e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const database = getDatabase(app);

let userid = sessionStorage.getItem("userid");
console.log(userid);
