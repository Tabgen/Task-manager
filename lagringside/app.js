// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, getDocs, addDoc, setDoc, doc, getDoc, collection, where, query } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
import {getDatabase, set, ref, update, } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

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



 



//const loading = await getDocs(
//    query(
//      doc(db, 'users/', userid,),
//
//    )
//);
//
//
//console.log(loading.data());




let name = "prosjekt";
let taskid = "prosjekt";
const test = collection(db, 'users/', userid, "prosjekt")
const q = query(test, where("project", "!=", ""));


const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  const div1 = document.createElement("div");
  var a1 = document.createElement("a");
  a1.setAttribute("href", "/webapp/index.html");
  taskid += 1;
  name += 1;
  a1.className = "task-box";

 
  let projectname = doc.id;
  div1.append(projectname);
  a1.id = taskid;
  div1.className = "tbox";
  a1.append(div1);
  document.getElementById("saves-container").appendChild(a1);
  console.log(doc.id, " => ", doc.data());
  sessionStorage.setItem("projectname", projectname);
  sessionStorage.setItem("userid", userid);
})








function projectcreation() {
    
    const div = document.createElement("div");
    var a = document.createElement("a");
    a.setAttribute("href", "/webapp/index.html");
    taskid += 1;
    name += 1;
    a.className = "task-box";

    let projectname = NewProject.value.trim();
    div.append(projectname);
    a.id = taskid;
    div.className = "tbox";
    a.append(div);
    document.getElementById("saves-container").appendChild(a);
    
    //writes to database


    setDoc(
        doc(db, 'users/', userid, "prosjekt", projectname), {
            project: projectname
    });
    sessionStorage.setItem("projectname", projectname);
    sessionStorage.setItem("userid", userid);

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