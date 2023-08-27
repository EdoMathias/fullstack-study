// Given Array of passwords,
// Create login form that recieves a user name and password
// and checks if the password is available in the array

function logIn() {
  const loginInformation = [
    { userName: 'EM', password: '1111' },
    { userName: 'NM', password: '2222' },
  ];
  console.log('submitted');
  const userInformation = document.forms['loginForm'];
  const loginStatus = document.getElementById('login-status');

  let userNameFromInput = userInformation.userName.value;
  let passwordFromInput = userInformation.password.value;
  let validUser = false;

  for (user of loginInformation) {
    if (
      user.userName === userNameFromInput &&
      user.password === passwordFromInput
    ) {
      validUser = true;
    }
  }
  if (validUser === true) {
    loginStatus.innerHTML = '';
    let newP = document.createElement('p');
    newP.textContent = 'login successful';
    loginStatus.appendChild(newP);
  } else {
    loginStatus.innerHTML = '';
    let newP = document.createElement('p');
    newP.textContent = 'login failed';
    loginStatus.appendChild(newP);
  }
}
