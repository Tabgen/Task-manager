// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, addDoc, setDoc, doc, collection } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"

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

document.getElementById("create-account").onclick = function() {createaccounts()};


function createaccounts() {
    
    

    var email = newemail.value.trim();
    var username = newusername.value.trim();
    var password = renewpassword.value.trim();


    //writes to database

    addDoc(
        collection(db, "users",), {
            email: email,
            username: username,
            password: password,
    });

}
















//getElementById("login").onclick = function() {};
document.getElementById("create").onclick = function() {createaccount()};

function createaccount () {
    document.getElementById("inlogging-container").classList.toggle("hide");
    document.getElementById("signup").classList.remove("hide");
}

