// DOM - Document Object Model

const element1 = document.getElementById('p1');
// console.log(element1);

const liItem1 = document.getElementsByClassName('item1');
// console.log(liItem1);
const liItem = document.getElementsByClassName('item');
// console.log(liItem);

const pTag = document.getElementsByTagName('p');
// console.log(pTag);

// querySelector will only return the first found element //
const divToP = document.querySelector('div > p');
// console.log(divToP);

const getFromId = document.querySelector('#p2');
// console.log(getFromId);

const getFromClass = document.querySelector('.item');
// console.log(getFromClass);

// querySelectroAll will return all the elements with the given selector //
const getAllFromTag = document.querySelectorAll('li.item1');
// console.log(getAllFromClass);
// for (let elm of getAllFromTag) {
//   console.log(elm);
// }

// Get the text content of an element
const getFirstLi = document.querySelectorAll('.item1');
// const liText = getFirstLi[0].textContent;
// console.log(liText);

// Get the html elements that are inside of the given selector
// const div2 = document.getElementById('div2');
// console.log(div2.innerHTML);

// Will change the inner html element
// div2.innerHTML = '<p>some text</p>';

// We will now create a function that takes an element and an array of items
// and will add the given items to the given element
const items = [
  'Item 1 from js',
  'Item 2 from js',
  'Item 3 from js',
  'Item 4 from js',
];
const getUl = document.getElementById('ul1');

function addItemsToElements(sourceElement, arrItems) {
  let strItems = '';
  let htmlItems = sourceElement.innerHTML;

  //   Will color the even numbered li in blue
  //   and will color the uneven numbered li in red
  for (let i = 0; i < arrItems.length; i++) {
    if (i % 2 == 0) {
      strItems += `<li style="color: blue">${arrItems[i]}</li>`;
    } else {
      strItems += `<li style="color: red">${arrItems[i]}</li>`;
    }
  }
  //   for (let item of arrItems) {
  //     strItems += `<li>${item}</li>`;
  //   }
  sourceElement.innerHTML = strItems + htmlItems;
}

addItemsToElements(getUl, items);
