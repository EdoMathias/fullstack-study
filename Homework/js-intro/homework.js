// Question 1
// function printDivisibleNumbers() {
//   let min = Math.floor(Math.random() * 100) + 1;
//   let max = Math.floor(Math.random() * 100) + 1;

//   if (min > max) {
//     let temp = min;
//     min = max;
//     max = temp;
//   }

//   console.log("min: " + min);
//   console.log("max: " + max);

//   console.log(
//     "Numbers that divide evenly between " + min + " and " + max + ":"
//   );

//   let divisibleNumbers = [];
//   for (let i = min; i <= max; i++) {
//     if (i % min === 0) {
//       divisibleNumbers.push(i);
//     }
//   }

//   console.log(divisibleNumbers);
// }

// printDivisibleNumbers();

// Question 2
// function getNum() {
//   let num;
//   do {
//     num = Math.floor(Math.random() * 100) + 1;
//     console.log(num);
//   } while (num % 2 !== 0 || num % 3 !== 0);

//   const num1 = num / 2;
//   const num2 = num / 3;

//   const average = (num1 + num2) / 2;
//   console.log(average);
// }

// getNum();

// Question 3
// function flipNumber() {
//   let original = Math.floor(Math.random() * 900) + 100;
//   console.log(original);
//   let flipped = 0;

//   while (original !== 0) {
//     flipped = flipped * 10 + (original % 10);
//     original = Math.floor(original / 10);
//   }

//   console.log(flipped);
// }
// flipNumber();
