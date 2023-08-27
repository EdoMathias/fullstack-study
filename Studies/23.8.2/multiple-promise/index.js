// function func() {
//   console.log('my function');
// }

// func();

//--IIFE--//
// (function () {
//   console.log('IIFE1');
// })();

// (function (msg) {
//   console.log(msg);
// })('IIFE2');

// (() => console.log('Edo'))();

// (async () => 'Edo in async')().then((result) => console.log(result));

//------------Multiple Promises------------//
const sleep = (timeout, isResolved) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isResolved ? resolve('done') : reject(new Error('error'));
    }, timeout);
  });
};

// run functions one after the other
// (async () => {
//   const now = Date.now();
//   const sleep1 = await sleep(1000, true);
//   const sleep2 = await sleep(2000, true);
//   console.log(`sleep1:${sleep1} //--// sleep2:${sleep2}`);
//   console.log(`Was done in: ${Date.now() - now}ms`);
// })();

// run both functions and wait for the results
// (async () => {
//   const now = Date.now();
//   const sleep1 = sleep(1000, true);
//   const sleep2 = sleep(2000, true);
//   await sleep1;
//   await sleep2;
//   console.log(`sleep1:${sleep1} //--// sleep2:${sleep2}`);
//   console.log(`Was done in: ${Date.now() - now}ms`);
// })();

// using Promise.all to run an array of functions to get their promise
// will reject all if any of the promises have been rejected
// (async () => {
//   const now = Date.now();
//   try {
//     const results = await Promise.all([sleep(2000, true), sleep(1000, true)]);
//     console.log(
//       `results: 1st sleep:${results[0]} //--// 2nd sleep:${results[1]}`
//     );
//   } catch (error) {
//     console.log(error.message);
//   }
//   console.log(`Was done in: ${Date.now() - now}ms`);
// })();

// Promise.any
// Returns the first promise that resolves.
// (async () => {
//   const now = Date.now();
//   try {
//     const result = await Promise.any([sleep(1000, false), sleep(2000, true)]);
//     console.log(`results of .any: ${result}`);
//   } catch (error) {
//     console.log(error.message);
//   }
//   console.log(`Was done in: ${Date.now() - now}ms`);
// })();

// Promise.allSettled
// Returns an array of all promises whether they are resolved or rejected.
// (async () => {
//   const now = Date.now();
//   try {
//     const results = await Promise.allSettled([
//       sleep(2000, false),
//       sleep(1000, true),
//     ]);
//     console.log(
//       `results: 1st status:${results[0].status}
//       //--// 2nd status:${results[1].status}`
//     );
//   } catch (error) {
//     console.log(error.message);
//   }
//   console.log(`Was done in: ${Date.now() - now}ms`);
// })();

(async () => {
  const now = Date.now();
  try {
    const result = await Promise.race([sleep(1000, true), sleep(1000, true)]);
    console.log(`race result: ${result}`);
  } catch (error) {
    console.log(error.message);
  }
  console.log(`Was done in: ${Date.now() - now}ms`);
})();
