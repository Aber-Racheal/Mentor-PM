// const taskList = document.getElementById('taskList');

// function addTask() {
//     const taskInput = document.getElementById('taskInput');
//     const taskText = taskInput.value.trim();
    
//     if (taskText !== '') {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <span class="task">${taskText}</span>
//             <button onclick="editTask(this)">Edit</button>
//             <button onclick="deleteTask(this)">Delete</button>
//         `;
//         taskList.appendChild(li);
//         taskInput.value = '';
//     }
// }

// function deleteTask(element) {
//     element.parentNode.remove();
// }

// function editTask(element) {
//     const taskSpan = element.parentNode.querySelector('.task');
//     const newTaskText = prompt('Edit task:', taskSpan.textContent);
//     if (newTaskText !== null && newTaskText.trim() !== '') {
//         taskSpan.textContent = newTaskText.trim();
//     }
// }




let myNodeList = document.getElementsByTagName("LI");
var i ;
for(i =0; i < myNodeList.length; i++){                          //looping
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}
//click close button to hide the current list item
let close = document.getElementsByClassName("close");
var i ;
for(i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
//add checked when clicking on a list item
let list = document.querySelector("ul");
list.addEventListener("click",function (ev){
if (ev.target.tagName === "LI") {
  ev.target.classList.toggle("checked");
}
},false);

//create a new  item when clicking on the "Add"button
function newElement(){
  let li = document.createElement("li");
  let inputValue = document.getElementById("taskInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert(" write something");
  }else{
    document.getElementById("myUL").appendChild(li);
  }

document .getElementById("taskInput").value="";
let span = document.createElement("SPAN");
let txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

for (i=0;i< close.length;i++){
  close[i].onclick = function(){
    let div = this.parentElement;
    div.style.display = "none";
  }
}
}

    
    
