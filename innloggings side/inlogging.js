// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, addDoc, setDoc, doc, getDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"

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


document.getElementById("create-account").onclick = function() {validate()};

function validate () {
    if (newpassword.value === renewpassword.value) {
        createaccounts();
    } else {
        alert("password does not match");
    }
}

let loginname = " " + username.value;
let docSnap = await getDoc(doc(db, "users", loginname));

if (loginname === " " + username.value) {
    setTimeout(() => {
        loginname = "";
        loginname = username.value;
        console.log("updated");
        console.log(username.value)
        
      }, "3000")
    setTimeout(() => {
      docSnap = getDoc(doc(db, "users", loginname))
      }, "4000")

}

function createaccounts() {
    
    var email = newemail.value.trim();
    var username = newusername.value.trim();
    var password = renewpassword.value.trim();

    //writes to database

    setDoc(
        doc(db, "users", username), {
            email: email,
            username: username,
            password: password,
    });

    newemail.value = "";
    newusername.value = "";
    newpassword.value = "";
    renewpassword.value = "";
}








document.getElementById("login").onclick = function() {loginrequest()};



function loginrequest() {
    if (password.value === docSnap.data().password) {
        window.location.href = "/webapp/index.html";
    } else {
        alert("password or username is incorrect");
    }
}















//getElementById("login").onclick = function() {};
document.getElementById("create").onclick = function() {createaccount()};

function createaccount () {
    document.getElementById("inlogging-container").classList.toggle("hide");
    document.getElementById("signup").classList.remove("hide");
}
