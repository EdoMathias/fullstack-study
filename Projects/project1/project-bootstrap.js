let tasks = [];
const taskForm = document.forms['task-board-form'];

// function to sumbit a task based on form's values
function submitTask() {
  const taskInfo = taskForm['task-info'].value;
  const dueDate = taskForm['due-date'].value;
  const dueTime = taskForm['due-time'].value;

  tasks[tasks.length] = {
    taskInfo: taskInfo,
    dueDate: dueDate,
    dueTime: dueTime,
  };
  createTaskCardWithFade(true);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// function to clear form
function clearForm() {
  taskForm.reset();
}

// function for creating a task card with fade that takes a condition
// to use fade-in class or not
function createTaskCardWithFade(condition) {
  let taskCard = '';
  for (let i = 0; i < tasks.length; i++) {
    if (condition === true) {
      taskCard += `
      <div class="task-card fade-in">`;
    } else {
      taskCard += `
      <div class="task-card">`;
    }
    taskCard += `
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
  document.querySelector('.open-task-container').innerHTML = taskCard;
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
  createTaskCardWithFade(false);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// function for loading and re-setting local storage
function loadAndResetKey() {
  let tasksFromLocalStorage = localStorage.getItem('tasks');
  if (tasksFromLocalStorage) {
    tasks = JSON.parse(tasksFromLocalStorage);
  } else {
    tasksFromLocalStorage = [];
  }
  createTaskCardWithFade(false);
}
loadAndResetKey();
