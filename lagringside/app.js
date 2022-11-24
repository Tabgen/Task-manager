// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, addDoc, setDoc, doc, getDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
import {getDatabase, set, ref, update, query, } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

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



const docSnap = await getDoc(
    doc(db, 'users/', userid,)
  );

console.log(docSnap.data())




































let taskid = "prosjekt";

function projectcreation() {
    
    const div = document.createElement("div");
    var a = document.createElement("a");
    a.setAttribute("href", "/webapp/index.html");
    taskid += 1;
    

    a.className = "task-box";

    let projectname = NewProject.value.trim();
    div.append(projectname);
    a.id = taskid;
    div.className = "tbox";
    a.append(div);
    document.getElementById("saves-container").appendChild(a);
    let docname = projectname += 1;

    //writes to database

    setDoc(
        doc(db, 'users/', userid, projectname, ), {
            Prosjekt: projectname
    });
    NewProject.value = "";
}

document.getElementById("create").onclick = function () {projectcreation(), hide(), off()};

document.getElementById("new-project").onclick = function() {newtask(), on()};

document.getElementById("cancel").onclick = function() {hide(), off()}

function newtask() {
    document.getElementById("modal").style.display = "block";
}


function on() {
    document.getElementById("overlay").style.display = "block";
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
}

function hide() {
    document.getElementById("modal").style.display = "none";
}