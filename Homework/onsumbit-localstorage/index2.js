let users = [];

function init() {
  const storageUsers = localStorage.getItem('users');
  // const arrUsers = JSON.parse(storageUsers);
  if (storageUsers !== null) {
    users = JSON.parse(storageUsers);
  }
  // for (let i = 0; i < arrUsers.length; i++) {
  //   users[i] = arrUsers[i];
  // }
  let tbody = document.querySelector('#tbody').innerHTML;
  generateTableBody();
}

function logInfo() {
  const form = document.forms['userInformation'];
  const userName = form['userName'].value;
  const password = form['password'].value;
  users[users.length] = {
    userName: userName,
    password: password,
  };
  localStorage.setItem('users', JSON.stringify(users));

  generateTableBody();
  form.reset();
}

function generateTableBody() {
  document.querySelector('#tbody').innerHTML = ``;
  for (let i = 0; i < users.length; i++) {
    document.querySelector('#tbody').innerHTML += `
  <tr>
    <td>${users[i].userName}</td>
    <td>${users[i].password}</td>
    <td> <button onclick="removeRow(${i})">X</button> </td>
    <tr/>
  `;
  }
}

function removeRow(rowIndex) {
  let newUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (i !== rowIndex) {
      newUsers[newUsers.length] = users[i];
    }
  }
  users = newUsers;
  console.log(users);
  generateTableBody();
  localStorage.setItem('users', JSON.stringify(users));
}
init();
