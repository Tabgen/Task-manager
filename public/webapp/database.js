// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, addDoc, getDocs, getDoc, setDoc, doc, deleteDoc, collection, query, where, updateDoc} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js"

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
  let div3 = document.createElement("div");

  a.setAttribute("href", "#test");
  taskid += 1;
  
  const category = document.createElement("div");
  const task  = document.createElement("button");

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
  let delid = docs.data().delid;

  btn.id = "delete";
  let bid = btn.id;
  task.id = "visible";
  task.append(value);
  task.onclick = function() {
    document.getElementById("taskviews-container").style.display = "block"; 
    document.getElementById("overlay").style.display = "block";

    let tasknames = document.getElementById("tasknameview");
    let taskcategorys = document.getElementById("taskcategoryview");
    let taskdescriptions = document.getElementById("taskdescriptionview");

    let tnameview = document.getElementById("visible");
    tasknames.innerHTML = value;
    taskcategorys.innerHTML = categoryname;
    taskdescriptions.innerHTML = descriptionname;
  };  
  
  div3.id = value;
  div3.className = "description-info";
  div3.innerHTML = descriptionname;
  a.append(task);
  category.append(categoryname);
  div2.append(a);
  div2.append(category);
  div1.append(div2)
  div1.append(btn);
  div1.append(div3);

  
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
  //let buttonid = document.getElementById(delid);

  //buttonid.onclick = function(e) {
  //  let test2 = doc(db, 'users/', userid, "prosjekt", prosjektid, "save", value);
  //  let removeid = document.getElementById("value");
  //  deleteDoc(test2);
  //  removeid.remove();
//
  //}

})



function taskcreation() {
  const div = document.createElement("div");
  let a = document.createElement("div");
  let div1 = document.createElement("div");
  let btn = document.createElement("button");
  let div2 = document.createElement("div");

  a.setAttribute("href", "#test");
  let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  taskid += 1;
  let newtaskid = guid();
  console.log(guid());
  
  const category = document.createElement("div");
  const task  = document.createElement("button");

  task.onclick = function() {
    document.getElementById("taskviews-container").style.display = "block"; 
    document.getElementById("overlay").style.display = "block";

    let tasknames = document.getElementById("tasknameview");
    let taskcategorys = document.getElementById("taskcategoryview");
    let taskdescriptions = document.getElementById("taskdescriptionview");

    let tnameview = document.getElementById("visible");
    tasknames.innerHTML = value;
    taskcategorys.innerHTML = categoryname;
    taskdescriptions.innerHTML = descriptionname;
  };  

  a.className = "task-box";
  category.className = "category-box";
  div1.className = "alignment-left";
  btn.innerHTML = "x";

  btn.className = "delete-btn";
  div2.className = "cross";

  task.id = "visible";
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
  //let buttonid = document.getElementById(newtaskid);
//
  //buttonid.onclick = function(e) {
  //  let test2 = doc(db, 'users/', userid, "prosjekt", prosjektid, "save", value);
  //  let removeid = document.getElementById(value);
  //  deleteDoc(test2);
  //  removeid.remove();
  //}

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
            status: "0",
            delid: newtaskid,
        
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
        }, 100);

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
        }, 100);
        
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
        }, 100);
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

