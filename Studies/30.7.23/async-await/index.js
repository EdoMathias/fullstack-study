/*
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('error'));
    }, 1000);
  });
}

// return in async function will always
// return a promise
async function getData2() {
  return { id: 1, name: 'dima' };
}

async function init() {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  const user = await getData2();
  console.log(user);
}

init();
*/

/*
//--Refactoring callback lesson--//
function getCourse(courseName) {
  courses = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'javascript' },
    { id: 3, name: 'css' },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(courses.find((course) => course.name === courseName));
    }, 1000);
  });
}

function getStudents(courseId) {
  const students = {
    1: [
      { id: 1, name: 'aa11' },
      { id: 2, name: 'aa12' },
      { id: 3, name: 'aa13' },
    ],
    2: [
      { id: 4, name: 'aa21' },
      { id: 5, name: 'aa22' },
      { id: 6, name: 'aa23' },
    ],
    3: [
      { id: 7, name: 'aa31' },
      { id: 8, name: 'aa32' },
      { id: 9, name: 'aa33' },
    ],
  };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(students[courseId]);
    }, 1000);
  });
}

function getScore(studentId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        studentId: studentId,
        score: Math.round(Math.random() * 101),
      });
    }, 1000);
  });
}

async function getStudentScore(courseName, studentName) {
  const course = await getCourse(courseName);
  const students = await getStudents(course.id);
  const student = students.find((student) => student.name === studentName);
  const score = await getScore(student.id);
  console.log(score);
}

getStudentScore('css', 'aa32');
*/

//--Class assignment--//
async function getNum() {
  return Math.round(Math.random() * 100);
}
async function printNum() {
  let num = await getNum();
  console.log(num);
}
printNum();

function returnRandomNum() {
  return new Promise((resolve) => {
    resolve(Math.round(Math.random() * 100));
  });
}

async function printMyNum() {
  let num = await returnRandomNum();
  console.log(num);
}
printMyNum();
