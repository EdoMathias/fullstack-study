//--Question 1--//
const question1Array = ['Apple', 'Milk', 'Chiken'];
const question1List = document.querySelector('#question1-list');
const question1Button = document.querySelector('#question1-button');

question1Button.addEventListener('click', () => {
  addItemsToList(question1Array);
});

const addItemsToList = (array) => {
  let count = 0;
  setInterval(() => {
    if (count < array.length) {
      let product = document.createElement('li');
      product.innerText = `${array[count]}`;
      question1List.appendChild(product);
      count++;
    }
  }, 1000);
};

//--Question 2--//
const question2Array = ['Apple', 'Milk', 'Chiken'];
const question2List = document.querySelector('#question2-list');
const question2Button = document.querySelector('#question2-button');

question2Button.addEventListener('click', () => {
  addItemsToListBefore(question2Array);
});

const addItemsToListBefore = (array) => {
  let count = 0;
  setInterval(() => {
    if (count < array.length) {
      let product = document.createElement('li');
      product.innerText = `${array[count]}`;
      question2List.insertBefore(product, question2List.firstElementChild);
      count++;
    }
  }, 1000);
};

//--Question 3--//
const resultP = document.querySelector('#question3-result');
const shouldResolve = (ms, shouldResolve, id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldResolve
        ? resolve(`resolved successfully by promise: ${id}`)
        : reject(new Error(`rejected by: ${id}`));
    }, ms);
  });
};
const question3Array = [
  shouldResolve(2000, true, 1),
  shouldResolve(1000, true, 2),
  shouldResolve(2000, true, 3),
];

(async (array) => {
  try {
    let raceResult = await Promise.race(array);
    console.log(raceResult);
    resultP.innerText = `${raceResult}`;
  } catch (error) {
    console.log(error.message);
    resultP.innerText = error.message;
  }
})(question3Array);

//--Question 4--//
const result4P = document.querySelector('#question4-result');
const question4Array = [
  shouldResolve(2000, true, 1),
  shouldResolve(1000, true, 2),
  shouldResolve(2000, false, 3),
];

(async (array) => {
  try {
    const raceResult = await Promise.allSettled(array);
    console.log(raceResult);
    raceResult.map((result) => (result4P.innerText += JSON.stringify(result)));
  } catch (error) {
    result4P.innerText = error.message;
  }
})(question4Array);
