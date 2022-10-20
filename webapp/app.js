document.getElementById("task").onclick = function() {newtask()};


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


document.getElementById("formsubmit").onclick = function() {taskcreation()};
document.getElementById("cancel").onclick = function() {hide()}




//get input data
//function append_to_div(div, data){ 
//    document.getElementById(div).innerText += data; 
//}

//document.getElementById("formsubmit") 
//        .addEventListener('click', function() { 
//    var tname = document.getElementById("tname"); 
//    var value = tname.value.trim(); 
//    var divid = taskbox;
    


//    if(!value){
//       alert("Input field can't be empty!"); 
//  } else {
//        append_to_div(divid, value+"\n"); 
//    }
//    tname.value = ""; 
//}); 

// create droppable div



function taskcreation() {
    
    const div = document.createElement('div');
    var text = "test";


    text = text + 1; 
    var value = tname.value.trim(); 
    div.id = text;
    div.className = "tbox";
    div.setAttribute("draggable", "true");
    div.setAttribute("ondragstart","drag(event)");
    div.append(value);
    document.body.appendChild(div);
    document.getElementById("taskforum").classList.remove("show");
    text = text + 1; 
}
    text = text;


function hide() {
    document.getElementById("taskforum").classList.remove("show");
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
