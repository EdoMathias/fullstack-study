// function printNumsWithInterval(interval) {
//     return new Promise((resolve, reject) => {
//         let count = 1;
//         const timer = setInterval(async () => {
//             console.log(count);
//             count++
//             if (count > 10) {
//                 clearInterval(timer);
//                 resolve();
//             }
//         }, interval * 1000);
//     })
// }

// printNumsWithInterval(2);

function printNumbersWithInterval(interval) {
  return new Promise((resolve) => {
    const timer = setInterval(async () => {
      for (let count = 1; count <= 10; count++) {
        console.log(count);
        await new Promise((resolve) => setTimeout(resolve, interval * 1000));
        clearInterval(timer);
      }
      clearInterval(timer);
      resolve();
    }, interval * 1000);
  });
}

async function run() {
  await printNumbersWithInterval(3);
}

run();
