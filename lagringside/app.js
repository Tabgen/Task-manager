// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, getDocs, addDoc, setDoc, doc, getDoc, collection, where, query, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
import {getDatabase, set, ref, update,  } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

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

let name = "prosjekt";
let taskid = "prosjekt";
const test = collection(db, 'users/', userid, "prosjekt")
const q = query(test, where("project", "!=", ""));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {


  // doc.data() is never undefined for query doc snapshots
  const div3 = document.createElement("div");
  const div2 = document.createElement("button");
  const div1 = document.createElement("div");
  var a1 = document.createElement("button");


  taskid += 1;
  name += 1;
  a1.className = "task-box";

  div2.append("x")
  div2.id = "delete";
  div3.className = "alignment";
  div2.className = "cross";
  let projectname = doc.id;
  div1.append(projectname);
  a1.id = doc.id; 
  div1.className = "tbox";
  div3.append(div1)
  div3.append(div2)
  a1.append(div3);
  document.getElementById("saves-container").appendChild(a1);
  console.log(doc.id, " => ", doc.data());
  sessionStorage.setItem("projectname", projectname);
  sessionStorage.setItem("userid", userid);

  var buttons = document.getElementsByTagName("button");
  var buttonsCount = buttons.length;
  for (var i = 0; i < buttonsCount; i += 1) {
      buttons[i].onclick = function(e) {
          let prosjektid = this.id;
          console.log(prosjektid);
          sessionStorage.setItem("prosjektid", prosjektid);
          window.location.href = "/webapp/index.html";
           
      };
  }

})




function projectcreation() {
    
    const div = document.createElement("div");
    var a = document.createElement("button");
    a.setAttribute("href", "/webapp/index.html");
    a.setAttribute("href", "#");
    taskid += 1;
    name += 1;
    a.className = "task-box";

    let projectname = NewProject.value.trim();
    div.append(projectname);
    a.id = NewProject.value;
    div.className = "tbox";
    a.append(div);
    document.getElementById("saves-container").appendChild(a);
    
    //writes to database


    setDoc(
        doc(db, 'users/', userid, "prosjekt", projectname), {
            project: projectname

    });

    for (var i = 0; i < buttonsCount; i += 1) {
        buttons[i].onclick = function(e) {
            let prosjektid = this.id;
            console.log(prosjektid);
            sessionStorage.setItem("prosjektid", prosjektid);
            window.location.href = "/webapp/index.html";
             
        };
    }

    sessionStorage.setItem("projectname", projectname);
    sessionStorage.setItem("userid", userid);
    sessionStorage.setItem("prosjektid", projectname);
    NewProject.value = "";
}

function deleteitems() {
    for (var i = 0; i < buttonsCount; i += 1) {
        buttons[i].onclick = function(e) {
            let prosjektid = this.id;
            console.log(prosjektid);
            deleteDoc(doc(db, 'users/', userid, "prosjekt", prosjektid))
        };
    }
    
}

document.getElementById("delete").onclick = function() {deleteitems()};

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