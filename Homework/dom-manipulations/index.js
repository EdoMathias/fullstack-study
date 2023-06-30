// Question 1
function addItemToElement(sourceElementId) {
  const element = document.getElementById(sourceElementId);
  let listItem = prompt("add an item:");
  let item = `<li>${listItem}</li>`;
  element.innerHTML += item;
}

// Question 2
function changeOrder() {
  const ulElement = document.getElementById("ul2");
  const liElements = document.getElementsByClassName("li2");
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
  ulElement.innerHTML = "";

  //   create a loop that will add the li based on the shuffled
  // order from the previous loop
  for (let i = 0; i < liArray.length; i++) {
    ulElement.innerHTML += liArray[i].outerHTML;
  }
}

// Question 3
function paintList() {
  // Get list 3 by ID
  const ul3Element = document.getElementById("ul3");
  const li3Elements = document.getElementsByClassName("li3");

  // Iterate through the li items and paint
  // even lines in color 1 and uneven lines
  // in color 2
  for (let i = 0; i < li3Elements.length; i++) {
    if (i % 2 === 0) {
      li3Elements[i].style.color = "red";
    } else {
      li3Elements[i].style.color = "blue";
    }
  }
}

// Question 4
const studentInformation = [
  {
    "First Name": "Edo",
    "Last Name": "Mathias",
    Mail: "Edo.Mathias@gmail.com",
  },
  {
    "First Name": "Edo",
    "Last Name": "Mathias",
    Mail: "Edo.Mathias@gmail.com",
  },
  {
    "First Name": "Edo",
    "Last Name": "Mathias",
    Mail: "Edo.Mathias@gmail.com",
  },
];

function createTable(array) {
  const table = document.getElementById("table");
  let tableHTML = "<thead style='border: 1px solid black'><tr>";

  // Create table headers
  for (generalInfo in array[0]) {
    tableHTML += `<th style='border: 1px solid black'>${generalInfo}</th>`;
  }

  tableHTML += "</tr></thead><tbody>";

  // Create table rows
  for (obj of array) {
    let count = 0;
    tableHTML += "<tr>";

    for (info in obj) {
      if (count < 3) {
        tableHTML += `<td style='border: 1px solid black'>${obj[info]}</td>`;
        count++;
      }
    }

    tableHTML += "</tr>";
  }

  tableHTML += "</tbody>";

  table.innerHTML += tableHTML;
}

createTable(studentInformation);
