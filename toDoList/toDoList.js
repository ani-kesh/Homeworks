let Tasks = [
  {
    name: "task1",
    isDone: false,
  },
  {
    name: "task2",
    isDone: false,
  },
  {
    name: "task3",
    isDone: false,
  },
];

window.onload = function CreateTaskListOnLoad() {
  CreateTaskList();
};

function IsEnter(e) {
  if (e.keyCode === 13 && document.getElementById("newTask").value !== "") {
    AddNewTask();
  }
}

function AddNewTask() {
  if (document.getElementById("newTask").value !== "") {
    let tasksList = document.getElementById("tasks");

    Tasks.push({
      name: document.getElementById("newTask").value,
      isDone: false,
    });

    tasksList.innerHTML = "";
    CreateTaskList();
  }
}

function DeleteTask(index) {
  let tasksList = document.getElementById("tasks");

  tasksList.innerHTML = "";
  Tasks.splice(index, 1);

  CreateTaskList();
}

function CreateTaskList() {
  let ul = document.getElementById("tasks");

  let firstLI = document.createElement("LI");
  let firstLine = CreateFirstLi();
  firstLI.append(firstLine);
  ul.appendChild(firstLI);

  for (let i = 0; i < Tasks.length; i++) {
    let li = document.createElement("LI");
    let line = CreateTaskLine(i, Tasks[i].name, Tasks[i].isDone);
    li.append(line);
    ul.appendChild(li);
  }

  CalculateOpenTasks();
}

function TaskIsDone(id) {
  let indexOfTask = id.replace("ch_", "");

  let taskName = document.getElementById("taskName" + indexOfTask).value;
  document.getElementById("taskNameDiv" + indexOfTask).innerHTML =
    "<span class='taskName'>" + taskName + "</span>";
  document.getElementById("close" + indexOfTask).innerHTML = "";
  document.getElementById("edit" + indexOfTask).style.display = "none";
  document.getElementById(id).style.pointerEvents = "none";
  Tasks[indexOfTask].isDone = true;

  CalculateOpenTasks();
}

function EditTaskName(index) {
  let tasksList = document.getElementById("tasks");
  if (tasksList !== null) {
    let value = document.getElementById("taskName" + index).value;
    Tasks[index].name = value;

    tasksList.innerHTML = "";
    CreateTaskList();
  }
}

function CalculateOpenTasks() {
  let quantityOpenTasks = 0;
  for (let i = 0; i < Tasks.length; i++) {
    if (!Tasks[i].isDone) quantityOpenTasks++;
  }
  document.getElementById("quantityOpenTasks").innerHTML = quantityOpenTasks;
}

function AllTasks() {
  let tasksList = document.getElementById("tasks");

  tasksList.innerHTML = "";

  CreateTaskList();
}

function CompletedTasks() {
  let tasksList = document.getElementById("tasks");

  tasksList.innerHTML = "";

  let firstLI = document.createElement("LI");
  let firstLine = CreateFirstLi();
  firstLI.append(firstLine);
  tasksList.appendChild(firstLI);

  for (let i = 0; i < Tasks.length; i++) {
    if (Tasks[i].isDone) {
      let li = document.createElement("LI");
      let line = CreateTaskLine(i, Tasks[i].name, Tasks[i].isDone);
      li.append(line);
      tasksList.appendChild(li);
    }
  }
}

function ActiveTasks() {
  let tasksList = document.getElementById("tasks");

  tasksList.innerHTML = "";

  let firstLI = document.createElement("LI");
  let firstLine = CreateFirstLi();
  firstLI.append(firstLine);
  tasksList.appendChild(firstLI);

  for (let i = 0; i < Tasks.length; i++) {
    if (!Tasks[i].isDone) {
      let li = document.createElement("LI");
      let line = CreateTaskLine(i, Tasks[i].name, Tasks[i].isDone);
      li.append(line);
      tasksList.appendChild(li);
    }
  }
}

function CreateFirstLi() {
  let gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  let gridItem1 = document.createElement("div");
  gridItem1.classList.add("grid-item");

  let gridItem2 = document.createElement("div");
  gridItem2.classList.add("grid-item");

  let inputGridItem2 = document.createElement("input");
  inputGridItem2.type = "text";
  inputGridItem2.id = "newTask";
  inputGridItem2.placeholder = "Add new task";
  inputGridItem2.addEventListener("keypress", () => IsEnter(event));

  let gridItem3 = document.createElement("div");
  gridItem3.classList.add("grid-item");

  let inputGridItem3 = document.createElement("input");
  inputGridItem3.type = "button";
  inputGridItem3.id = "addNewTask";
  inputGridItem3.value = "Add";
  inputGridItem3.addEventListener("click", () => {
    AddNewTask();
  });

  gridItem2.append(inputGridItem2);
  gridItem3.append(inputGridItem3);
  gridContainer.append(gridItem1);
  gridContainer.append(gridItem2);
  gridContainer.append(gridItem3);

  return gridContainer;
}

function EditTaskName(id) {
  let readOnlyField = document.getElementById(id);
  if (readOnlyField !== null) {
    readOnlyField.readOnly = false;
    readOnlyField.focus();
  }
}

function CreateTaskLine(numb, taskName, isDone) {
  let gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  gridContainer.setAttribute("id", `task${numb}`);

  let gridItem1 = document.createElement("div");
  gridItem1.classList.add("grid-item");

  let gridItem2 = document.createElement("div");
  gridItem2.classList.add("grid-item");
  gridItem2.setAttribute("id", `taskNameDiv${numb}`);

  let gridItem3 = document.createElement("div");
  gridItem3.classList.add("grid-item3");

  let inputGridItem2 =
    isDone === true
      ? document.createElement("span")
      : document.createElement("input");
  if (isDone === true) {
    inputGridItem2.classList.add("taskName", "pointerEvent");
    inputGridItem2.setAttribute("id", `ch_${numb}`);
    inputGridItem2.innerText = taskName;
  } else {
    inputGridItem2.type = "text";
    inputGridItem2.setAttribute("id", `taskName${numb}`);
    inputGridItem2.setAttribute("value", taskName);
    inputGridItem2.addEventListener("change", () => {
      EditTaskName(numb);
    });
  }

  inputGridItem2.readOnly = true;
  let inputGridItem3 = document.createElement("span");
  inputGridItem3.setAttribute("id", `close${numb}`);
  inputGridItem3.innerHTML = "&times;";
  inputGridItem3.addEventListener("click", () => {
    DeleteTask(numb);
  });

  let inputGridItem4 = document.createElement("span");
  inputGridItem4.setAttribute("id", `ch_${numb}`);
  inputGridItem4.innerHTML = "&#10003;";
  inputGridItem4.addEventListener("click", () => {
    TaskIsDone(`ch_${numb}`);
  });

  let inputGridItem5 = document.createElement("span");
  inputGridItem5.setAttribute("id", `edit${numb}`);
  inputGridItem5.innerHTML = "&#9998;";
  inputGridItem5.addEventListener("click", () => {
    EditTaskName(`taskName${numb}`);
  });

  if (isDone === true) {
    inputGridItem3.style.display = "none";
    inputGridItem5.style.display = "none";
  } else {
    inputGridItem3.style.display = "static";
    inputGridItem5.style.display = "static";
  }

  gridItem2.append(inputGridItem2);
  gridItem3.append(inputGridItem5);
  gridItem3.append(inputGridItem4);
  gridItem3.append(inputGridItem3);

  gridContainer.append(gridItem1);
  gridContainer.append(gridItem2);
  gridContainer.append(gridItem3);

  return gridContainer;
}

function DeleteAllTasks() {
  let tasksList = document.getElementById("tasks");

  tasksList.innerHTML = "";
  Tasks.length = 0;

  CreateTaskList();
}

document.getElementById("all-button").addEventListener("click", () => {
  AllTasks();
});

document.getElementById("active-button").addEventListener("click", () => {
  ActiveTasks();
});

document.getElementById("completed-button").addEventListener("click", () => {
  CompletedTasks();
});

document.getElementById("delete-button").addEventListener("click", () => {
  DeleteAllTasks();
});
