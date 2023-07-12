let tasks = [];
const taskForm = document.forms["task-board-form"];

// function for submitTask()
function submitTask() {
  const taskInfo = taskForm["form-text-area"].value;
  const dueDate = taskForm["form-date"].value;
  const dueTime = taskForm["form-time"].value;

  tasks[tasks.length] = {
    taskInfo: taskInfo,
    dueDate: dueDate,
    dueTime: dueTime,
  };
  createTaskCard();
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// function for creating a task card from an object
function createTaskCard() {
  document.querySelector("#open-task-container").innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    document.querySelector("#open-task-container").innerHTML += `
      <div class='task-card fade-in'>
      <button class='delete-button' onclick='deleteTask(${i})'>X</button>
      <p class="taskInfo">${tasks[i].taskInfo}</p>
        <p class ="taskDate">${tasks[i].dueDate}</p>
        <p class="taskTime">${tasks[i].dueTime}</p>
      </div>
      `;
  }
}

// function for deleteing a task
function deleteTask(taskCardIndex) {
  let newTaskCards = [];
  for (let i = 0; i < tasks.length; i++) {
    if (taskCardIndex !== i) {
      newTaskCards[newTaskCards.length] = tasks[i];
    }
  }
  tasks = newTaskCards;
  createTaskCard();
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// function for loading and re-setting local storage
function loadAndResetKey() {
  let tasksFromLocalStorage = localStorage.getItem("tasks");
  if (tasksFromLocalStorage) {
    tasks = JSON.parse(tasksFromLocalStorage);
  } else {
    tasksFromLocalStorage = [];
  }
  createTaskCard();
}
loadAndResetKey();
