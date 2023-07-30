const numbers = [11, 22, 3, 4, 5, 6];

const num = numbers.findIndex((number) => number > 4);
console.log(num);

const users = [
  { firstName: 'edo', lastName: 'mathias', age: 21 },
  { firstName: 'noa', lastName: 'martan', age: 22 },
  { firstName: 'shira', lastName: 'mathias', age: 28 },
  { firstName: 'gal', lastName: 'yasurr', age: 17 },
  { firstName: 'tal', lastName: 'weiss', age: 35 },
];

let avg = 0;
let sum = 0;
for (let user of users) {
  sum += user.age;
}
avg = sum / users.length;
console.log(avg);

let forEachAvg = 0;
let forEachSum = 0;
users.forEach((user) => (forEachSum += user.age));
forEachAvg = forEachSum / users.length;
console.log(forEachAvg);

let sorted = users.sort((a, b) => a.age - b.age);
console.log(sorted);

// class assignment
function generateTable(arr) {
  let body = arr
    .map(
      (user) =>
        `<tr><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.age}</td></tr>`
    )
    .join('');
  document.querySelector('#table-body').innerHTML = body;
}
generateTable(users);

let sortOrders = {
  firstName: 1,
  lastName: 1,
  age: 1,
};
const handleSort = (column) => {
  const sortedUsers = users.sort((a, b) => {
    if (a[column] < b[column]) {
      return -1 * sortOrders[column];
    } else if (a[column] > b[column]) {
      return 1 * sortOrders[column];
    } else {
      return 0;
    }
  });
  sortOrders[column] *= -1;
  generateTable(sortedUsers);
};
