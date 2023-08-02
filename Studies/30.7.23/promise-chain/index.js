let promise = new Promise((resolve, reject) => {
  resolve('data');
});

// promise
//   .then((result) => {
//     console.log(result);
//     return result + '2';
//   })
//   .then((result) => {
//     console.log(result);
//     // throw new Error('Error');
//     return result + '3';
//   })
//   .then((result) => {
//     console.log(result);
//     throw new Error('Error');
//   })
//   .catch((error) => console.log(error));

promise
  .then((result) => {
    console.log(result);
    return result + '2';
  })
  .then((result) => {
    console.log(result);
    throw new Error('Error');
    return result + '3';
  })
  .catch((error) => {
    console.log(error);
    return 'result';
    // MUST RETURN SOMETHING IN ORDER
    // TO KEEP CHAINING .then
  })
  .then((result) => {
    console.log(result);
    throw new Error('Error');
  })
  .catch((error) => console.log(error));
