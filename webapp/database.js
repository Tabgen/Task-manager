// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, addDoc, getDocs, setDoc, doc, deleteDoc, collection, query, where } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"

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


let name = "prosjekt";
//let taskid = "prosjekt";
const test = collection(db, 'users/', userid, "prosjekt", prosjektid, "save");
const q = query(test, where("task", "!=", ""));


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


  let value = docs.data().task;
  let categoryname = docs.data().category;
  let descriptionname = docs.data().description;
  btn.id = value;
  task.append(value);
  a.append(task);
  category.append(categoryname);
  div2.append(a);
  div2.append(category);
  div1.append(div2)
  div1.append(btn);


  let buttons = document.getElementsByClassName("button");
  let buttonsCount = buttons.length;

  for (let i = 0; i < buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
        let removeid = document.getElementById(prosjektid);
        let classid = this.className;
        let slettid = this.id;
        console.log(prosjektid);

        sessionStorage.setItem("prosjektid", prosjektid);
        

        if (classid == "delete-btn") {
          let test2 = doc(db, 'users/', userid, "prosjekt", prosjektid, "save", slettid); 

            console.log("semi funke")
                    
            deleteDoc(test2);
            removeid.remove();

        }else {
            console.log("ikke funke")
        }}
        
        
    };

  
  div.id = value;
  div.className = "tbox";
  div.setAttribute("draggable", "true");
  div.setAttribute("ondragstart","drag(event)");
  div.append(div1);
  document.getElementById("tasks").appendChild(div);
  document.getElementById("taskforum").classList.remove("show");
  console.log(docs.id, " => ", docs.data());


 
})




function taskcreation() {
    
    const div = document.createElement("div");
    var a = document.createElement("a");
    a.setAttribute("href", "#test");
    taskid += 1;
    
    const category = document.createElement("div");
    const task  = document.createElement("div");

    a.className = "task-box";
    category.className = "category-box";

    let value = tname.value.trim();
    let categoryname = tcategory.value.trim();
    let descriptionname = tdescription.value.trim();

    task.append(value);
    a.append(task);
    category.append(categoryname);
    

    
    div.id = taskid;
    div.className = "tbox";
    div.setAttribute("draggable", "true");
    div.setAttribute("ondragstart","drag(event)");
    div.append(a);
    div.append(category);
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
            description: descriptionname
        
    });

}

function off() {
    document.getElementById("overlay").style.display = "none";
}