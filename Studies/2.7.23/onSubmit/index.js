function logInfo() {
  console.log('submitted');
  //   const userNameInput = document.getElementById('userName');
  //   const passwordInput = document.getElementById('password');
  //   let userName = userNameInput.value;
  //   let password = passwordInput.value;

  //   Getting the form by it's name
  const userInformation = document.forms['userInformation'];

  //   Getting the form by it's position in the forms array
  //    that is created from `document.forms[]`
  //   const form = document.forms[0];
  let firstName = userInformation.firstName.value;
  let lastName = userInformation.lastName.value;
  let email = userInformation.email.value;
  let gender = userInformation.gender.value;
  let color = userInformation.color.value;
  let isChecked = userInformation.addToTable.checked;

  let user = {
    firsName: firstName,
    lastName: lastName,
    email: email,
    gender: gender,
    color: color,
  };

  if (isChecked) {
    addToTable(user);
  }
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
}
