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

        let span= document.createElement("span"); //creating an html element with tag name span
        span.innerHTML = "\u00d7";  //cross icon will store in span tag
        li.appendChild(span); //displaying cross icon under li
    }
    inputBox.value="";  //to clear message from input box
    saveData();
}

inputBox.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        let li=document.createElement("li"); //creating an html element with tag name li
        li.innerHTML = inputBox.value; //typed task will store in li
        listContainer.appendChild(li); //displaying li under id->list-container  
        inputBox.value="";
        let span= document.createElement("span"); //creating an html element with tag name span
        span.innerHTML = "\u00d7";  //cross icon will store in span tag
        li.appendChild(span);
    }
})

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){ //on clicking li(tasks),task will be cheked
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ //on clicking span(crossIcon),task will be removed
        e.target.parentElement.remove();
        saveData();
        let check= confirm("Are you sure to delete yoyr task !!");
         
            // e.target.parentElement.remove();

    }
}, false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
    //whatever the content is in listcontainer,all is saved by the name -> data  in the storage
}
function showTask(){  //to display the previously saved tasks
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();