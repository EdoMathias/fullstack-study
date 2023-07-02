// document.cookie = 'name=Edo';
// alert(document.cookie);

// Persistant cookie -> saved for the browser's session
// When browser cloeses, the cookie is lost
// document.cookie = 'firstName=Edo';

// Non persistant cookie
// const date = new Date();
// date.setFullYear(date.getFullYear() + 1);
// document.cookie = `firstName=Edo;expires=${date.toUTCString()}`;

// sessionStorage.setItem('lastName', 'Mathias');
// console.log(sessionStorage.getItem('lastName'));

// localStorage.setItem('firstName', 'edo');
// console.log(localStorage.getItem('firstName'));

// const obj = {
//   firstName: 'Edo',
//   lastName: 'Mathias',
// };

// localStorage.setItem('data', JSON.stringify(obj));
// const objFromLocalStorage = JSON.parse(localStorage.getItem('data'));
// console.log(localStorage.getItem('data'));
// console.log(objFromLocalStorage);
