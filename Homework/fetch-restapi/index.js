'use strict';

let users = [];

(async function () {
  users = await service.getAllUsers();
})();

async function init() {
  try {
    const users = await service.getAllUsers();
    generateTableBody(users);
  } catch (error) {
    console.log(error);
  }
}
init();

function generateTableBody(array) {
  const tbody = document.getElementById('table-body');
  const arrBodyData = array
    .map(
      (user) =>
        `<tr>
        <td>${user.name.firstname}</td>
        <td>${user.name.lastname}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td><button onclick="getDeletedUser(${user.id}); deleteUser(${user.id})">X</td>
        <td><button onclick="getUserInfo(${user.id});">Get Info</td>
    </tr>`
    )
    .join('');
  tbody.innerHTML = arrBodyData;
}

async function getDeletedUser(userId) {
  try {
    const data = await service.deleteUser(userId);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(userId) {
  // const userToDelete = getDeletedUser(userId);
  users = users.filter((user) => user.id !== userId);
  generateTableBody(users);
}

async function getUserInfo(userId) {
  try {
    const user = await service.getUserInfo(userId);
    alert(`
  First Name: ${user.name.firstname}
  Last Name: ${user.name.lastname}
  Email: ${user.email}
  Phone Number: ${user.phone}
  City: ${user.address.city}
  `);
  } catch (error) {
    console.log(error);
  }
}
