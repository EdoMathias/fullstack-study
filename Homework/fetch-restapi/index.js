'use strict';

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
    </tr>`
    )
    .join('');
  tbody.innerHTML = arrBodyData;
}
