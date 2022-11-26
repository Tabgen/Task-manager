// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, addDoc, getDocs, setDoc, doc, collection, query, where } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"

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



document.getElementById("formsubmit").onclick = function() {taskcreation()};

let userid = sessionStorage.getItem("userid");
let projectname = sessionStorage.getItem("projectname");
let id = sessionStorage.getItem("id");



let taskid = 0;
console.log(id);

let name = "prosjekt";
//let taskid = "prosjekt";
const test = collection(db, 'users/', userid, "prosjekt", projectname, "save");
const q = query(test, where("task", "!=", ""));


const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  const div1 = document.createElement("div");
  var a1 = document.createElement("a");
  a1.setAttribute("href", "/webapp/index.html");
  taskid += 1;
  name += 1;
  a1.className = "task-box";

 
  
  
  a1.id = taskid;
  div1.className = "tbox";
  a1.append(div1);
  document.getElementById("tasks").appendChild(a1);
  console.log(doc.id, " => ", doc.data());
  sessionStorage.setItem("projectname", projectname);
  sessionStorage.setItem("userid", userid);
  div1.append(projectname);
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
        doc(db, 'users/', userid, "prosjekt", projectname, "save", value), {
            task: value,
            category: categoryname,
            description: descriptionname
        
    });

}
