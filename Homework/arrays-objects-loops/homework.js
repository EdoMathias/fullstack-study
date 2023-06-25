// function compareArrays() {
//     let arr1 = [];
//     let arr2 = [];
//     let comparisonArr = [];

//     do {
//         arr1.push(Math.floor(Math.random() * 10));
//         arr2.push(Math.floor(Math.random() * 10));
//     } while (arr1.length < 5 && arr2.length < 5)

//     console.log(arr1);
//     console.log(arr2);

//     let arr3 = arr2;

//     for (let property in arr1) {
//         if (arr1[property] === arr3[property]) {
//             comparisonArr.push(true);
//         } else {
//             comparisonArr.push(false);
//         }
//     }

//     console.log(comparisonArr);
// }
// compareArrays()

// function getYoungest() {
//   let students = [
//     {
//       firstName: 'Shira',
//       lastName: 'Mathias',
//       mail: 'shira.mathias@gmail.com',
//       age: 20,
//     },
//     {
//       firstName: 'Edo',
//       lastName: 'Mathias',
//       mail: 'edo.mathias@gmail.com',
//       age: 23,
//     },
//     {
//       firstName: 'Noa',
//       lastName: 'Martan',
//       mail: 'noa.martan@gmail.com',
//       age: 24,
//     },
//   ];
//   console.log(students);

//   let youngest = students[0];

//   for (let i = 1; i < students.length; i++) {
//     if (students[i].age < youngest.age) {
//       youngest = students[i];
//     }
//   }
//   console.log(
//     `Youngest student is: ${youngest.firstName} ${youngest.lastName} because the students age is ${youngest.age} years old`
//   );
// }
// getYoungest();

function randomString() {
  //   let finalArr = [];
  //   let str = '';
  //   const lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  //   do {
  //     do {
  //       let randomNum = Math.floor(Math.random() * lettersArr.length);
  //       str += lettersArr[randomNum];
  //     } while (str.length < 4);
  //     finalArr.push(str);
  //     str = '';
  //   } while (finalArr.length < 3);
  //   console.log(finalArr);

  const finalArr = [];
  const lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  for (let i = 0; i < 3; i++) {
    let str = '';

    for (let j = 0; j < 4; j++) {
      let randomNum = Math.floor(Math.random() * lettersArr.length);
      str += lettersArr[randomNum];
    }

    finalArr.push(str);
  }

  console.log(finalArr);
}
randomString();
