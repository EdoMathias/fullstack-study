let tasks = [];
const taskForm = document.forms['task-board-form'];

// function for submitTask()
function submitTask() {
  const taskInfo = taskForm['form-text-area'].value;
  const dueDate = taskForm['form-date'].value;
  const dueTime = taskForm['form-time'].value;
  console.log(taskInfo);
  console.log(dueDate);
  console.log(dueTime);

  tasks[tasks.length] = {
    taskInfo: taskInfo,
    dueDate: dueDate,
    dueTime: dueTime,
  };
  // console.log(tasks);
  createTaskCard();
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// function for creating a task card from an object
function createTaskCard() {
  document.querySelector('#open-task-container').innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    document.querySelector('#open-task-container').innerHTML += `
      <div class='task-card'>
        <p>${tasks[i].taskInfo}</p>
        <p>${tasks[i].dueDate}</p>
        <p>${tasks[i].dueTime}</p>
        <button onclick='deleteTask()'>X</button>
      </div>
      `;
  }
}

// function for deleteing a task
function deleteTask() {}

// function for loading and re-setting local storage
function loadAndResetKey() {
  let tasksFromLocalStorage = localStorage.getItem('tasks');
  if (tasksFromLocalStorage) {
    tasks = JSON.parse(tasksFromLocalStorage);
  } else {
    tasksFromLocalStorage = [];
  }
  createTaskCard();
  // console.log(tasksFromLocalStorage);
}
loadAndResetKey();

// localStorage.setItem('users', JSON.stringify(users));