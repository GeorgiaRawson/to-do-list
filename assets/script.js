var taskInput = document.getElementById("addTask");
var addButton = document.getElementById("addButton");
var taskContainer = document.getElementById("tasks");

function onClickAddButton() {
      if (taskInput.value == "") {
        alert("Task to be added should not be empty!");
        return;
      }
var newItemEl = document.createElement("li");

var checkbox = document.createElement("input");
checkbox.type="checkbox";
    var completedList = document.getElementById("completed-tasks");
    if (this.checked) { 
        completedList.appendChild(newItemEL);} 
        else {
            taskContainer.appendChild(newItemEL);
        };
var label = document.createElement("label");
label.textContent = taskInput.value; 

var editButton =document.createElement("button");
editButton.textContent = "Edit"; 
editButton.onclick = function() {
    var newText = prompt("Edit task:", label.textContent);
    if (newText) label.textContent = newText;
};

 var deleteButton = document.createElement("button");
 deleteButton.textContent = "Delete";
 deleteButton.onclick = function () {
    newItemEl.remove();
 };

newItemEl.appendChild(checkbox);
newItemEl.appendChild(label);
newItemEl.appendChild(editButton);
newItemEL.appendChild(deleteButton);

taskContainer.appendChild(newItemEl); 

taskInput.value="";
}

addButton.addEventListener("click", onClickAddButton);





   
