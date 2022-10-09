document.getElementById("task").onclick = function() {newtask()};

function newtask() {
    document.getElementById("taskforum").classList.toggle("show");
}

var menuList = document.getElementById("menuList")

menuList.style.maxHeight = "0px"

function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "150px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}
