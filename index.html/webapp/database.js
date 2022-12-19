// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, addDoc, getDocs, setDoc, doc, deleteDoc, collection, query, where, updateDoc} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"

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



document.getElementById("formsubmit").onclick = function() {taskcreation(), off()};

let userid = sessionStorage.getItem("userid");
let projectname = sessionStorage.getItem("projectname");
let id = sessionStorage.getItem("id");
let prosjektid = sessionStorage.getItem("prosjektid");

console.log(prosjektid);

let taskid = 0;

const saveref = collection(db, 'users/', userid, "prosjekt", prosjektid, "save");
const q = query(saveref, where("task", "!=", ""));




const querySnapshot = await getDocs(q);
querySnapshot.forEach((docs) => {
  // doc.data() is never undefined for query doc snapshots
  const div = document.createElement("div");
  let a = document.createElement("div");
  let div1 = document.createElement("div");
  let btn = document.createElement("button");
  let div2 = document.createElement("div");

  a.setAttribute("href", "#test");
  taskid += 1;
  
  const category = document.createElement("div");
  const task  = document.createElement("div");

  a.className = "task-box";
  category.className = "category-box";
  div1.className = "alignment-left";
  btn.innerHTML = "x";

  btn.className = "delete-btn";
  div2.className = "cross";

  let statuscheck = docs.data().status;
  let value = docs.data().task;
  let categoryname = docs.data().category;
  let descriptionname = docs.data().description;
  btn.id = "delete";
  let bid = btn.id;
  task.append(value);
  a.append(task);
  category.append(categoryname);
  div2.append(a);
  div2.append(category);
  div1.append(div2)
  div1.append(btn);
  
  div.id = value;
  div.className = "tbox";
  div.setAttribute("draggable", "true");
  div.setAttribute("ondragstart","drag(event)");
  div.append(div1);
  if (statuscheck == "2") {
    document.getElementById("progress").appendChild(div);
  } else if (statuscheck == "3") {
    document.getElementById("complete").appendChild(div);
  } else {
    document.getElementById("tasks").appendChild(div);
  }

    

  document.getElementById("taskforum").classList.remove("show");
  console.log(docs.id, " => ", docs.data());
  let buttonid = document.getElementById("delete");

  buttonid.onclick = function(e) {
    let test2 = doc(db, 'users/', userid, "prosjekt", prosjektid, "save", value);
    let removeid = document.getElementById(value);
    deleteDoc(test2);
    removeid.remove();
  
}
})



function taskcreation() {
    
  const div = document.createElement("div");
  let a = document.createElement("div");
  let div1 = document.createElement("div");
  let btn = document.createElement("button");
  let div2 = document.createElement("div");

  a.setAttribute("href", "#test");
  taskid += 1;
  
  const category = document.createElement("div");
  const task  = document.createElement("div");

  a.className = "task-box";
  category.className = "category-box";
  div1.className = "alignment-left";
  btn.innerHTML = "x";

  btn.className = "delete-btn";
  div2.className = "cross";


  let value = tname.value;
  let categoryname = tcategory.value;
  let descriptionname = tdescription.value;
  btn.id = "delete";
  let bid = btn.id;
  task.append(value);
  a.append(task);
  category.append(categoryname);
  div2.append(a);
  div2.append(category);
  div1.append(div2)
  div1.append(btn);
  
  div.id = value;
  div.className = "tbox";
  div.setAttribute("draggable", "true");
  div.setAttribute("ondragstart","drag(event)");
  div.append(div1);
  document.getElementById("tasks").appendChild(div);
  document.getElementById("taskforum").classList.remove("show");
  let buttonid = document.getElementById("delete");

  buttonid.onclick = function(e) {
    let test2 = doc(db, 'users/', userid, "prosjekt", prosjektid, "save", value);
    let removeid = document.getElementById(value);
    deleteDoc(test2);
    removeid.remove();
}

    document.getElementById("tasks").appendChild(div);
    document.getElementById("taskforum").classList.remove("show");
    tname.value = "";
    tcategory.value = "";
    tdescription.value = "";

    //writes to database

    setDoc(
        doc(db, 'users/', userid, "prosjekt", prosjektid, "save", value), {
            task: value,
            category: categoryname,
            description: descriptionname,
            status: "0"
        
    });

}





function addstatus() {

    setTimeout(() => {  
        let parentdiv = document.getElementById("progress");

        const select = parentdiv.querySelectorAll('.tbox');
        select.forEach((select) => { 

            let divid = select.id;
            console.log(divid);

            let taskref = doc(db, 'users/', userid, "prosjekt", prosjektid, "save", divid);

            updateDoc(taskref, {
                status: 2
            });

            })
        }, 2000);

    setTimeout(() => {  
        let parentdiv = document.getElementById("complete");
    
        const select = parentdiv.querySelectorAll('.tbox');
        select.forEach((select) => { 
    
            let divid = select.id;
            console.log(divid);
    
            let taskref = doc(db, 'users/', userid, "prosjekt", prosjektid, "save", divid);
    
            updateDoc(taskref, {
                status: 3
            });
    
            })
        }, 2000);
        
    setTimeout(() => {  
        let parentdiv = document.getElementById("tasks");
    
        const select = parentdiv.querySelectorAll('.tbox');
        select.forEach((select) => { 
    
            let divid = select.id;
            console.log(divid);
    
            let taskref = doc(db, 'users/', userid, "prosjekt", prosjektid, "save", divid);
    
            updateDoc(taskref, {
                status: 1
            });
     
            })
        }, 2000);
};

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
}

document.getElementById("tasks").ondrop = function() {addstatus(), drop(event)};
document.getElementById("progress").ondrop = function() {addstatus(), drop(event)};
document.getElementById("complete").ondrop = function() {addstatus(), drop(event)};

function off() {
    document.getElementById("overlay").style.display = "none";
}