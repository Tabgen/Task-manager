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

// div.ondragstart=dragStart(event); funke ikke må finne fiks
function taskcreation() {
    var div = document.createElement('div');
    div.id = 'tbox';
    div.innerHTML = "task name" + " " + "task description";
    div.className = 'tbox';
    div.draggable = true;
    div.ondragstart=dragStart(event);

    document.body.appendChild(div);
}


document.getElementById("category").onclick = function() {taskcreation()};


//drag and drop

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


