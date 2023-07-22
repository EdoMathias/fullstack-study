//--Question 1--//
const persons = [
  {
    name: "edo",
    lastName: "mathias",
    income: 12000,
  },
  {
    name: "shira",
    lastName: "mathias",
    income: 6000,
  },
  {
    name: "noa",
    lastName: "martan",
    income: 12000,
  },
];

function getAverageIncome(arr) {
  let averageIncome = 0;
  for (let person of persons) {
    averageIncome += person.income;
  }
  averageIncome /= arr.length;
  console.log(averageIncome);
  let belowAverage = arr.filter(
    (person) => person.income < averageIncome
  ).length;
  let aboveAverage = arr.filter(
    (person) => person.income > averageIncome
  ).length;
  let averageObject = {
    averageIncome: averageIncome,
    aboveAverage: aboveAverage,
    belowAverage: belowAverage,
  };
  console.log(averageObject);
}

function callGetAverageIncome() {
  getAverageIncome(persons);
}

//--Question 2--//
let tasks = [
  {
    taskName: "task1",
    status: "done",
  },
  {
    taskName: "task2",
    status: "in progress",
  },
  {
    taskName: "task3",
    status: "done",
  },
  {
    taskName: "task4",
    status: "in progress",
  },
  {
    taskName: "task5",
    status: "in progress",
  },
];

function makeTaskList(arr) {
  let ul = document.querySelector("#task-list");
  let li = arr
    .map((task) => {
      if (task.status === "done") {
        return `<li class='done'>${task.taskName}</li>`;
      } else {
        return `<li class='inProgress'>${task.taskName}</li>`;
      }
    })
    .join("");
  let unfinished = arr.filter((task) => task.status === "in progress");
  li += `<li>Num of unfinished:${unfinished.length}</li>`;
  ul.innerHTML += li;
}
makeTaskList(tasks);

//--Question 3--//
const products = [
  {
    name: "Milk",
    price: 8,
    amount: 2,
  },
  {
    name: "Chicken Breast 1kg",
    price: 25,
    amount: 3,
  },
  {
    name: "Chocolate bars",
    price: 10,
    amount: 1,
  },
];
let tblBody = products
  .map(
    (product) =>
      `<tr><td>${product.name}</td><td>${product.price}</td><td>${product.amount}</td></tr>`
  )
  .join("");

document.querySelector("#table-body").innerHTML = tblBody;

function sortAbovePrice() {
  let sortedPrice = document.querySelector("#priceInput").value;
  let abovePrice = products
    .map((product) => {
      if (product.price >= sortedPrice) {
        return `<tr><td>${product.name}</td><td>${product.price}</td><td>${product.amount}</td></tr>`;
      }
    })
    .join("");
  document.querySelector("#table-body").innerHTML = abovePrice;
}
function sortBelowPrice() {
  let sortedPrice = document.querySelector("#priceInput").value;
  let belowPrice = products
    .map((product) => {
      if (product.price <= sortedPrice) {
        return `<tr><td>${product.name}</td><td>${product.price}</td><td>${product.amount}</td></tr>`;
      }
    })
    .join("");
  document.querySelector("#table-body").innerHTML = belowPrice;
}
