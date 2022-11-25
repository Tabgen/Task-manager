document.getElementById("task").onclick = function() {newtask(), on()};

document.getElementById("cancel").onclick = function() {hide(), off()}

function newtask() {
    document.getElementById("taskforum").classList.toggle("show");
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





function hide() {
    document.getElementById("overlay").style.display = "none";
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

function on() {
    document.getElementById("overlay").style.display = "block";
}
  
  function off() {
    document.getElementById("overlay").style.display = "none";
}