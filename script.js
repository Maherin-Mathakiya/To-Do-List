const inputbox1 = document.getElementById("input-box1");
const inputbox2 = document.getElementById("input-box2");
const inputbox3 = document.getElementById("input-box3");
const inputbox4 = document.getElementById("input-box4");

const listcontainer1 = document.getElementById("list-container1");
const listcontainer2 = document.getElementById("list-container2");
const listcontainer3 = document.getElementById("list-container3");
const listcontainer4 = document.getElementById("list-container4");

//1
function addTask1(){
    if(inputbox1.value === ''){
        alert('Please enter a task');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox1.value;
        listcontainer1.appendChild(li);

        //cross icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox1.value= '';
    saveData1();
}

//2
function addTask2(){
    if(inputbox2.value === ''){
        alert('Please enter a task');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox2.value;
        listcontainer2.appendChild(li);

         //cross icon
         let span = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);
    }
    inputbox2.value= '';
    saveData2();
}

//3
function addTask3(){
    if(inputbox3.value === ''){
        alert('Please enter a task');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox3.value;
        listcontainer3.appendChild(li);

         //cross icon
         let span = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);
    }
    inputbox3.value= '';
    saveData3();
}

//4
function addTask4(){
    if(inputbox4.value === ''){
        alert('Please enter a task');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox4.value;
        listcontainer4.appendChild(li);

         //cross icon
         let span = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);
    }
    inputbox4.value= '';
    saveData4();
}

//1
listcontainer1.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData1();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData1();
    }
}, false);

//2
listcontainer2.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData2();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData2();
    }
}, false);

//3
listcontainer3.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData3();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData3();
    }
}, false);

//4
listcontainer4.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData4();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData4();
    }
}, false);

//to store data
function saveData1(){
    localStorage.setItem("data1",listcontainer1.innerHTML);
   
}

function saveData2(){
    localStorage.setItem("data2",listcontainer2.innerHTML);
    
}

function saveData3(){
    localStorage.setItem("data3",listcontainer3.innerHTML);
    
}

function saveData4(){
    localStorage.setItem("data4",listcontainer4.innerHTML);
    
}

function showTask1(){
    listcontainer1.innerHTML = localStorage.getItem("data1");
}
showTask1();

function showTask2(){
    listcontainer2.innerHTML = localStorage.getItem("data2");
}
  showTask2();

function showTask3(){
    listcontainer3.innerHTML = localStorage.getItem("data3");
}
 showTask3();

function showTask4(){
    listcontainer4.innerHTML = localStorage.getItem("data4");
}
  showTask4();

function p1() {
    // var a = confirm("Are you sure you want to LogOut?");
    // if (a) {
    //     // If the user clicks "OK" in the confirm dialog, redirect to a logout page.
    //     window.location.href = "index.html"; // Replace with the URL of your logout page.
    // } else {
    //     // If the user clicks "Cancel" in the confirm dialog, do nothing to stay on the same page.
    // }

    alert("Loging Out");
}
