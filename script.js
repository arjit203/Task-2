const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Add Your TASK !!");
    }
    else{
        let li=document.createElement("li"); //creating an html element with tag name li
        li.innerHTML = inputBox.value; //typed task will store in li
        listContainer.appendChild(li); //displaying li under id->list-container  

        let span=document.createElement("span"); 
        //creating an html element with tag name span
        span.innerHTML = "\u00d7";  //cross icon will store in span tag
        li.appendChild(span); //displaying cross icon under li
    }
    inputBox.value="";  //to clear message from input box
    saveData();
}

inputBox.addEventListener("keydown",(e)=>{  
    // after inputting tasks,pressing enter key will add a task
    if(e.key=="Enter"){
        addTask();
    }
});

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){ //on clicking li(tasks),task will be cheked or unchecked
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ //on clicking span(crossIcon),task will be removed
        let check= confirm("Are you sure to delete your task ??");
        if(check){  //if check(true-clicking ok button)
            e.target.parentElement.remove();
            saveData();
        } 
        else {  //if clicking (false - cancel button)
            console.log("Task deletion cancelled.");
        }

    }
}, false);

// Enable task editing on double-click
listContainer.addEventListener("dblclick", function (e) {
    if (e.target.tagName === "LI") {
        let editedTask = prompt("Edit your task:" );
        if (editedTask !== null && editedTask !== '') {
            e.target.firstChild.textContent = editedTask;
            saveData();
        }
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
    //whatever the content is in listcontainer,all is saved by the name -> data  in the storage
}
function showTask(){  //to display the previously saved tasks
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();