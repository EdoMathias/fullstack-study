let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ id: 1, name: 'edo' });
    reject(new Error('Error'));
  }, 2000);
});

console.log(promise);

// Old method
/*
promise.then(
  (result) => console.log(result.name),
  (error) => console.log(error)
);
*/

// promise
//   .then((result) => {
//     console.log(result.name);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log('finally'));

function getCourse(courseName) {
  courses = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'javascript' },
    { id: 3, name: 'css' },
  ];
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Error'));
      resolve(courses.find((course) => course.name === courseName));
    }, 1000);
  });
  return promise;
}

getCourse('javascript')
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
