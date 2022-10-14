document.getElementById("task").onclick = function() {newtask()};


//task form

const formbuttons = document.querySelectorAll("data-target-modal")
const cancel = document.querySelectorAll(".cancel");
const overlay = document.getElementById("overlay");




formbuttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(btn.dataset.targetModal).classList.add("show");
      overlay.classList.add("show");
    });
});
  
close_modals.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".taskform");
      modal.classList.remove("show");
      overlay.classList.remove("show");
    });
});
  
window.onclick = (event) => {
    if (event.target == overlay) {
        const modals = document.querySelectorAll(".taskform");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
};
  
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





// create droppable div
function taskcreation() {
    const todo_div = document.createElement("div");
    const input_val = document.getElementById("tname").value;
    const txt = document.createTextNode(input_val);
    
    todo_div.appendChild(txt);
    todo_div.classList.add("todo");
    todo_div.setAttribute("draggable", "true");

    
    //const div = document.createElement('div');
    //div.id = 'drag1';
    //div.className = 'tbox';
    //div.innerHTML = "test";
    //div.setAttribute("draggable", "true");
    //div.setAttribute("ondragstart","drag(event)");
    


    //document.body.appendChild(div);

}

document.getElementById("formsubmit").onclick = function() {taskcreation()};



//create div button

document.getElementById("category").onclick = function() {taskcreation()};


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

















// lokal fil lagring 

            //let saveFile = () => {
            //    	
                // Get the data from each element on the form.
            //    const tname = document.getElementById('tname');
            //    const tdescription = document.getElementById('tdescription');

                
                // This variable stores all the data.
            //    let data = 
            //        '\r tname: ' + tname.value + ' \r\n ' + 
            //        'tdescription: ' + tdescription.value;

                
                // Convert the text to BLOB.
            //    const textToBLOB = new Blob([data], { type: 'text/plain' });
            //    const sFileName = 'formData.txt';	   // The file to save the data.

            //    let newLink = document.createElement("a");
            //    newLink.download = sFileName;

            //    if (window.webkitURL != null) {
            //        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            //    }
            //    else {
            //        newLink.href = window.URL.createObjectURL(textToBLOB);
            //        newLink.style.display = "none";
            //        document.body.appendChild(newLink);
            //    }

            //    newLink.click(); 
            //}
