function getCourse(courseName, callback) {
  courses = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'javascript' },
    { id: 3, name: 'css' },
  ];

  setTimeout(() => {
    callback(courses.find((course) => course.name === courseName));
  }, 1000);
}

function getStudents(courseId, callback) {
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

  setTimeout(() => {
    callback(students[courseId]);
  }, 1000);
}

function getScore(studentId, callback) {
  setTimeout(() => {
    callback({
      studentId: studentId,
      score: Math.round(Math.random() * 101),
    });
  }, 1000);
}

function getStudentScore(courseName, studentName) {
  getCourse(courseName, (course) => {
    getStudents(course.id, (students) => {
      const student = students.find((student) => student.name === studentName);
      getScore(student.id, (result) => {
        console.log(result);
      });
    });
  });
}

getStudentScore('css', 'aa32');
