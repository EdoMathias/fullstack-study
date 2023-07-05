function logInfo() {
  const userInformation = document.forms['userInformation'];
  let userName = userInformation['userName'].value;
  let password = userInformation['password'].value;

  let user = {
    userName: userName,
    password: password,
  };

  addToTable(user);
  loadAndResetKey(user);
  userInformation.reset();
}

function addToTable(obj) {
  const tableBody = document.getElementById('table-body');
  let newTr = document.createElement('tr');

  for (const info in obj) {
    const newTd = document.createElement('td');
    newTd.textContent = obj[info];
    newTr.appendChild(newTd);
  }

  tableBody.appendChild(newTr);

  /*
    const tableBody = document.getElementById("table-body");
  const newRow = document.createElement("tr");

  let htmlString = "";
  for (const key in user) {
    htmlString += `<td>${user[key]}</td>`;
  }

  newRow.innerHTML = htmlString;
  tableBody.appendChild(newRow);
  */
}

function loadAndResetKey(obj) {
  let usersFromLocalStorage = JSON.parse(localStorage.getItem('data')) || [];
  usersFromLocalStorage.push(obj); // can also use usersFromLocalStorage[usersFromLocalStorage.length]
  localStorage.setItem('data', JSON.stringify(usersFromLocalStorage));
  console.log(usersFromLocalStorage);
}

function loadTableFromLocalStorage() {
  // userInformation['userName'].value = '';
  // userInformation['password'].value = '';
  userInformation.reset();
  const usersFromLocalStorage = JSON.parse(localStorage.getItem('data')) || [];
  for (user of usersFromLocalStorage) {
    addToTable(user);
  }
}
loadTableFromLocalStorage();
