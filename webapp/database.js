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



document.getElementById("formsubmit").onclick = function() {taskcreation()};


var taskid = 0;


function taskcreation() {
    
    const div = document.createElement("div");
    var a = document.createElement("a");
    a.setAttribute("href", "#test");
    taskid += 1;
    
    const category = document.createElement("div");
    const task  = document.createElement("div");

    a.className = "task-box";
    category.className = "category-box";

    var value = tname.value.trim();
    var categoryname = tcategory.value.trim();
    var descriptionname = tdescription.value.trim();

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

    //addDoc(
    //    collection(db, "users", "user", "save"), {
    //
    //        task: value,
    //        category: categoryname,
    //        description: descriptionname
        
    //});

}
