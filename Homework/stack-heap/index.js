//--Question 1--//
const orderedArrayP = document.querySelector('#ordered-array-p');
const firstQuestionArray = [1, 5, 2, 4, 3];
orderedArrayP.textContent = firstQuestionArray;

const orderFirstArray = (array, condition) => {
  let sortedArray;
  if (condition === true) {
    sortedArray = array.sort((a, b) => a - b);
  } else {
    sortedArray = array.sort((a, b) => b - a);
  }
  orderedArrayP.textContent = sortedArray;
};

const trueButton = () => {
  orderFirstArray(firstQuestionArray, true);
};
const falseButton = () => {
  orderFirstArray(firstQuestionArray, false);
};

//--Question 2--//
const productsArray = [
  { productName: 'aa1', department: 'bb1', price: 5 },
  { productName: 'aa2', department: 'bb2', price: 1 },
  { productName: 'aa3', department: 'bb3', price: 15 },
  { productName: 'aa3', department: 'bb3', price: 10 },
  { productName: 'aa3', department: 'bb3', price: 20 },
];
const maxPriceInput2 = document.querySelector('#max-price-input2');

const sortSecondArray = (array, maxNum) => {
  console.log(maxNum);
  let filteredArray = array.filter((product) => product.price <= maxNum);
  let sorterArray = filteredArray.sort((a, b) => a.price - b.price);
  console.log(sorterArray);
};

const secondQuestionFunction = () => {
  let maxNum = maxPriceInput2.value;
  sortSecondArray(productsArray, maxNum);
};

//--Question 3--//
const tableBody = document.querySelector('#third-question-table > tbody');
const maxPriceInput3 = document.querySelector('#max-price-input3');

const generateTable = (arr) => {
  let tbodyContents = arr
    .map(
      (product) =>
        `<tr><td>${product.productName}</td><td>${product.department}</td><td>${product.price}</td></tr>`
    )
    .join('');
  tableBody.innerHTML = tbodyContents;
};
generateTable(productsArray);

const sortProductsArray = (array, maxNum) => {
  let filteredArray = array.filter((product) => product.price <= maxNum);
  generateTable(filteredArray);
};

const thirdQuestionButton = () => {
  let maxNum = maxPriceInput3.value;
  sortProductsArray(productsArray, maxNum);
};
