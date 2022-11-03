document.getElementById("task").onclick = function() {newtask()};


function newtask() {
    document.getElementById("taskforum").classList.toggle("show");
    document.getElementById("overlay").classList.toggle("show");
}

//Responsive nav
var menuList = document.getElementById("menuList")

menuList.style.maxHeight = "0px"

function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "150px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}



document.getElementById("cancel").onclick = function() {hide()}


function hide() {
    document.getElementById("taskforum").classList.remove("show");
    tname.value = "";
    tcategory.value = "";
    tdescription.value = "";
}


//drag and drop functions

function allowDrop(ev) {
   ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

