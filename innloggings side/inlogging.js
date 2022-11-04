//getElementById("login").onclick = function() {};
document.getElementById("create").onclick = function() {createaccount()};

function createaccount () {
    document.getElementById("inlogging-container").classList.toggle("hide");
    document.getElementById("signup").classList.remove("hide");
}