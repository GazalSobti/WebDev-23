var taskInput = document.getElementById("add-task");
var addButton = document.getElementById("additem");
var incompletedTaskHolder = document.getElementById("incomplete");
var completedTaskHolder = document.getElementById("completed");
var clearButton = document.getElementById("clear");

addButton.addEventListener("click", function () {
  var listItem = document.createElement("li");
  var deleteButton = document.createElement("button");

  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  listItem.innerText = taskInput.value;
  listItem.appendChild(deleteButton);
  listItem.classList.add("itemStyling");

  incompletedTaskHolder.appendChild(listItem);

  taskInput.value = "";

  listItem.addEventListener("click", function () {
    completedTaskHolder.appendChild(listItem);
    incompletedTaskHolder.removeChild(listItem);
    listItem.style.textDecoration = "line-through";
  });
  deleteButton.addEventListener("click", function () {
    incompletedTaskHolder.removeChild(listItem);
  });
});

clearButton.addEventListener("click", function () {
  completedTaskHolder.innerHTML("");
});
