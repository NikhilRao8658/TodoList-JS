
let taskInput = document.getElementById('taskInput');
let addTaskBtn = document.getElementById('addTaskBtn');
let taskList = document.getElementById('taskList');

// Add task function
addTaskBtn.addEventListener("click", function() {
  let taskText = taskInput.value;
  
  if (taskText !== '') {
    // new list item
    let li = document.createElement('li');
    li.innerHTML = taskText;
    // Append list to task 
    taskList.appendChild(li);
  }
});

let del = document.getElementById("btn")

del.addEventListener("click",function (){
    taskList.innerHTML=''     
    // document.getElementById("taskInput").value=''
})    