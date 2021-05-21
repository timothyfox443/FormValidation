window.onload = function () {
    document.getElementById("press").onclick = btnAddTask;
};
function btnAddTask() {
    var addTaskInput = document.getElementById("inputs").value;
    var doneCheckBox = document.createElement("input");
    doneCheckBox.type = "checkbox";
    doneCheckBox.classList.add("doneish");
    var taskDisplay = document.createElement("label");
    taskDisplay.classList.add("displayClassList");
    taskDisplay.innerText = addTaskInput;
    var taskList = document.getElementById("showtasks");
    taskList.appendChild(doneCheckBox);
    taskList.appendChild(taskDisplay);
}
