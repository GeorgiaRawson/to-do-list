var addTerm = document.getElementById("addTerm");

var addButton = document.getElementById("addButton");

addButton.addEventListener("click", onClickAddButton);

function onClickAddButton() {
    console.log(addTerm.value);

    var newItemEl = document.createElement("div");
    newItemEl.textContent = addTerm.value;
    var tasksEl = document.getElementById("tasks");
    tasksEl.appendChild(newItemEl);
}
