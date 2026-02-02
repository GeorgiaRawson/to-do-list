var taskInput = document.getElementById("addTask");
var addButton = document.getElementById("addButton");
var taskContainer = document.getElementById("tasks");

function onClickAddButton() {
      if (taskInput.value == "") {
        alert("Task to be added should not be empty!");
        return;
    }
}
var newItemEl = document.createElement("div");
    newItemEl.textContent = taskInput.value;

taskContainer.appendChild(newItemEl);
taskInput.value="";

addButton.addEventListener("click", onClickAddButton);





   
