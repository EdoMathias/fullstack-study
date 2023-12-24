const fs = require('fs');
const fsPromise = require('fs/promises');

// sync way
const calcNums = () => {
  try {
    const num1 = fs.readFileSync('./number1.txt', 'utf-8');
    const num2 = fs.readFileSync('./number2.txt', 'utf-8');
    const result = Number(num1) + Number(num2);
    const data = `${num1} + ${num2} = ${result}`;
    fs.writeFileSync('./calcResult.txt', data);
  } catch (error) {
    console.log(error);
  }
};
// calcNums();

//--//

// async way
const readFromFile = async (filePath) => {
  const readResult = fsPromise.readFile(filePath, 'utf-8');
  return readResult;
};

const addAndWriteResult = async (file1, file2, resultFile) => {
  try {
    const [num1, num2] = await Promise.all([
      readFromFile(file1),
      readFromFile(file2),
    ]);

    const result = Number(num1) + Number(num2);

    const resultString = `${num1} + ${num2} = ${result}`;
    await fsPromise.writeFile(resultFile, resultString);

    console.log(`Result has been written to ${resultFile}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

addAndWriteResult('number1.txt', 'number2.txt', 'result.txt');
