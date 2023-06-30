// Question 1
function addItemToElement(sourceElementId) {
  const element = document.getElementById(sourceElementId);
  let listItem = prompt('add an item:');
  let item = `<li>${listItem}</li>`;
  element.innerHTML += item;
}

// Question 2
function changeOrder() {
  const ulElement = document.getElementById('ul2');
  const liElements = document.getElementsByClassName('li2');
  let liArray = [];

  //   push to liArray all li from liElements
  for (let i = 0; i < liElements.length; i++) {
    liArray.push(liElements[i]);
  }

  // shuffle the locations of the li inside liArray
  for (let i = 0; i < liArray.length; i++) {
    const randomNumber = Math.floor(Math.random() * liArray.length);
    let temp = liArray[i];
    liArray[i] = liArray[randomNumber];
    liArray[randomNumber] = temp;
  }

  //   Restart the current li inside the ul
  ulElement.innerHTML = '';

  //   create a loop that will add the li based on the shuffled
  // order from the previous loop
  for (let i = 0; i < liArray.length; i++) {
    ulElement.innerHTML += liArray[i].outerHTML;
  }
}

// Question 3
function paintList() {
  // Get list 3 by ID
  const ul3Element = document.getElementById('ul3');
  const li3Elements = document.getElementsByClassName('li3');

  // Iterate through the li items and paint
  // even lines in color 1 and uneven lines
  // in color 2
  for (let i = 0; i < li3Elements.length; i++) {
    if (i % 2 === 0) {
      li3Elements[i].style.color = 'red';
    } else {
      li3Elements[i].style.color = 'blue';
    }
  }
}

// Question 4
const studentInformation = [
  {
    firstName: 'Edo',
    lastName: 'Mathias',
    mail: 'Edo.Mathias@gmail.com',
  },
  {
    firstName: 'Edo',
    lastName: 'Mathias',
    mail: 'Edo.Mathias@gmail.com',
  },
  {
    firstName: 'Edo',
    lastName: 'Mathias',
    mail: 'Edo.Mathias@gmail.com',
  },
  {
    firstName: 'Edo',
    lastName: 'Mathias',
    mail: 'Edo.Mathias@gmail.com',
  },
];

function createTable(array) {
  const table = document.getElementById('table');
  const headersRow = document.getElementById('headers-row');
  const tableBody = document.getElementById('tbody');
  for (obj of array) {
    for (generalInfo in obj) {
      headersRow.innerHTML += `<th>${generalInfo}</th>`;
    }
    break;
  }
  for (obj of array) {
    for (information in obj) {
      const row = document.querySelector('tbody > tr');
      row.innerHTML += `<td>${obj[information]}</td>`;
    }
    tableBody.innerHTML += `<tr></tr>`;
  }
}

createTable(studentInformation);
