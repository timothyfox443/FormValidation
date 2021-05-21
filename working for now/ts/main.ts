window.onload = function()
{
    (<HTMLButtonElement>document.getElementById("press")).onclick= btnAddTask;
}

function btnAddTask()
{
    let addTaskInput = (<HTMLInputElement>document.getElementById("inputs")).value;

    //create checkbox
    let doneCheckBox = document.createElement("input");
    doneCheckBox.type = "checkbox";
    doneCheckBox.classList.add("doneish");

    //task
    let taskDisplay = document.createElement("label");
    taskDisplay.classList.add("displayClassList");
    taskDisplay.innerText = addTaskInput;

    //display on page
    let taskList = document.getElementById("showtasks");
    taskList.appendChild(doneCheckBox);
    taskList.appendChild(taskDisplay);
}