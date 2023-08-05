var taskInput = document.getElementById("add-task");
var addButton = document.getElementById("additem");
var incompletedTaskHolder = document.getElementById("incomplete");
var completedTaskHolder = document.getElementById("completed");


addButton.addEventListener("click", function () {
  var listItem = document.createElement("li");
  var doneButton = document.createElement("button");
  var text = document.createElement("span");
  var clearButton = document.getElementById("clear");

  doneButton.innerText = "Done";
  doneButton.className = "done";

  text.innerText = taskInput.value;
  listItem.appendChild(text);
  listItem.appendChild(doneButton);
  
  listItem.classList.add("itemStyling");

  incompletedTaskHolder.appendChild(listItem);

  taskInput.value = "";
  doneButton.addEventListener("click", function () {
    listItem.removeChild(doneButton);
    completedTaskHolder.appendChild(listItem);
    incompletedTaskHolder.removeChild(listItem);
  });
  clearButton.addEventListener("click", function () {
    completedTaskHolder.removeChild(listItem);
  });
});


