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

let userid = "";




document.getElementById("createaccount").onclick = function() {createaccounts()};
document.getElementById("login").onclick = function() {loginaccount()};

function createaccounts() {
    var email = document.getElementById('newemail').value;
    var password = document.getElementById('renewpassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ... user.uid
          // save data into real time database
            set(ref(database, 'users/' + user.uid), {
                email: email,
                password: password
            })

            setDoc(doc(db, 'users/' + user.uid), {
                email: email,
                password: password
            })
                .then(() => {
                    // Data saved successfully!
                    alert('user created successfully');
                    userid = user.uid;
                    sessionStorage.setItem("userid", userid);
                    window.location.href = "/lagringside/index.html";
    
                })
                .catch((error) => {
                    // The write failed...
                    alert(error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage);
        });
}

function loginaccount() {
    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        userid = user.uid;
        sessionStorage.setItem("userid", userid);
        window.location.href = "/lagringside/index.html";
        // ...

        // save log in details into real time database
        var lgDate = new Date();
        update(ref(database, 'users/' + user.uid), {
            last_login: lgDate,
            
        })
            .then(() => {
                // Data saved successfully!
                alert('user logged in successfully');
                

            })
            .catch((error) => {
                // The write failed...
                alert(error);
            });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
}


//function createaccounts() {
//    
//
//    var username = newusername.value.trim();
//
//
//    //writes to database
//
//    setDoc(
//        doc(db, "users", username), {
//            email: email,
//            username: username,
//            password: password,
//    });
//
//    newemail.value = "";
//    newusername.value = "";
//    newpassword.value = "";
//    renewpassword.value = "";
//}












let loginname = " " + username.value;
//let docSnap = await getDoc(doc(db, "users", loginname));



//document.getElementById("login").onclick = function() {loginrequest()};


//function loginrequest() {
//    if (password.value === docSnap.data().password) {
//        window.location.href = "/webapp/index.html";
//    } else {
//        alert("password or username is incorrect");
//    }
//}















//getElementById("login").onclick = function() {};
document.getElementById("create").onclick = function() {createaccount()};

function createaccount () {
    document.getElementById("inlogging-container").classList.toggle("hide");
    document.getElementById("signup").classList.remove("hide");
}
