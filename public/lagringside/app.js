// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, updateDoc, getDocs, addDoc, setDoc, doc, getDoc, collection, where, query, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"
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
const saveref = collection(db, 'users/', userid, "prosjekt")
const x = query(saveref, where("project", "!=", ""));

const querySnapshot = await getDocs(x);
querySnapshot.forEach((docs) => {


  // doc.data() is never undefined for query doc snapshots
  const div3 = document.createElement("div");
  const div2 = document.createElement("button");
  const div1 = document.createElement("button");
  var a1 = document.createElement("div");


  taskid += 1;
  name += 1;
  a1.className = "task-box";

  div2.append("x")
  div2.id = docs.id;
  div3.id = docs.id;
  div3.className = "alignment";
  div2.className = "cross";
  let projectname = docs.id;
  div1.append(projectname);
  a1.id = docs.id; 
  div1.className = "tbox";
  div1.id = docs.id;
  div3.append(div1)
  div3.append(div2)
  a1.append(div3);
  document.getElementById("saves-container").appendChild(a1);
  console.log(docs.id, " => ", docs.data());
  sessionStorage.setItem("projectname", projectname);
  sessionStorage.setItem("userid", userid);

  let buttons = document.getElementsByTagName("button");
  let buttonsCount = buttons.length;



  for (let i = 0; i < buttonsCount; i += 1) {
      buttons[i].onclick = function(e) {
          let prosjektid = this.id;
          let removeid = document.getElementById(prosjektid);
          let classid = this.className;
          console.log(prosjektid);
          sessionStorage.setItem("prosjektid", prosjektid);
          
          if (classid == "cross") {
            let test1 = doc(db, 'users/', userid, "prosjekt", prosjektid); 
            const saveref1 = collection(db, 'users/', userid, "prosjekt", projectname, "save");
            const q = query(saveref1, where("task", "!=", ""));
                   
            deleteDoc(test1);
            removeid.remove();
            

          }else {
            window.location.href = "/webapp/index.html";
          }
          
      };
  }

})




function projectcreation() {
    
    const div3 = document.createElement("div");
    const div2 = document.createElement("button");
    const div1 = document.createElement("button");
    var a1 = document.createElement("div");
  
  
    taskid += 1;
    name += 1;
    a1.className = "task-box";
  
    div2.append("x")
    div2.id = NewProject.value;
    div3.id = NewProject.value;
    div3.className = "alignment";
    div2.className = "cross";
    let projectname = NewProject.value;
    div1.append(projectname);
    a1.id = NewProject.value; 
    div1.className = "tbox";
    div1.id = NewProject.value;
    div3.append(div1)
    div3.append(div2)
    a1.append(div3);
    document.getElementById("saves-container").appendChild(a1);
    sessionStorage.setItem("projectname", projectname);
    sessionStorage.setItem("userid", userid);
  
    let buttons1 = document.getElementsByTagName("button");
    let buttonsCount1 = buttons1.length;
    let prosjektid = NewProject.value;
    sessionStorage.setItem("prosjektid", prosjektid);
   

    setDoc(
        doc(db, 'users/', userid, "prosjekt", projectname), {
            project: projectname
    });



    sessionStorage.setItem("projectname", projectname);
    sessionStorage.setItem("userid", userid);
    sessionStorage.setItem("prosjektid", projectname);
    NewProject.value = ""; 
    //window.location.href = "/webapp/index.html";

    let buttons = document.getElementsByTagName("button");
    let buttonsCount = buttons.length;

    for (let i = 0; i < buttonsCount; i += 1) {
        buttons[i].onclick = function(e) {
            let prosjektid = this.id;
            let removeid = document.getElementById(prosjektid);
            let classid = this.className;
            console.log(prosjektid);
            sessionStorage.setItem("prosjektid", prosjektid);
            
            if (classid == "cross") {
              let test1 = doc(db, 'users/', userid, "prosjekt", prosjektid);
              let test2 = doc(db, 'users/', userid, "prosjekt", prosjektid, "save")
              deleteDoc(test1);
              deleteDoc(test2);
              removeid.remove();
  
            }else {
              window.location.href = "/webapp/index.html";
            }
            
             
        };
    }
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

