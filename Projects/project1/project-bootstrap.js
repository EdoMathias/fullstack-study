let tasks = [];
const taskForm = document.forms["task-board-form"];

// function for submitTask()
function submitTask() {
  const taskInfo = taskForm["task-info"].value;
  const dueDate = taskForm["due-date"].value;
  const dueTime = taskForm["due-time"].value;

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
    <div class="task-card fade-in">
    <div class="row">
      <div class="col-12">
        <button class="delete-button btn focus" onclick="deleteTask(${i})">
          <i class="bi bi-trash-fill fs-5"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="task-info-container">
          <p class="taskInfo larger-text">${tasks[i].taskInfo}</p>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <p class="taskDate mb-0">${tasks[i].dueDate}</p>
        <p class="taskTime">${tasks[i].dueTime}</p>
      </div>
    </div>
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
