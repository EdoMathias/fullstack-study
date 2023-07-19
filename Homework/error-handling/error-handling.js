const persons = [
  {
    name: 'edo',
    pay: 10000,
  },
  {
    name: 'tal',
    pay: 5000,
  },
  {
    name: 'shira',
    pay: 5000,
  },
];

const emptyPersons = [];

function calcAveragePay(arr) {
  if (arr === undefined) {
    throw new Error('Array is undefined');
  }
  if (arr.length === 0) {
    throw new Error('Array is empty');
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].pay) {
      throw new Error('Person does not get paid');
    } else if (typeof arr[i].pay !== 'number') {
      throw new Error('Pay must be a number');
    } else {
      sum += arr[i].pay;
    }
  }
  let average = sum / arr.length;
  console.log(average);
  return average;
}

function getAveragePay() {
  let averagePay;
  try {
    averagePay = calcAveragePay(persons);
  } catch (error) {
    console.log(error);
  }
  if (averagePay === undefined) {
    console.log('could not calc average pay');
  }
}

/////////

const arrOfStrings = ['edo', 'shira', 'noa', '4', '56', '8'];

function printList(arr) {
  document.querySelector('#list').innerHTML = '';

  let i = 0;
  setInterval(() => {
    if (i < arr.length) {
      document.querySelector('#list').innerHTML += `<li>${arr[i]}</li>`;
      i++;
    }
  }, 1000);
}

function callPrintList() {
  printList(arrOfStrings);
}
