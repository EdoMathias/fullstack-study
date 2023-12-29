const fs = require('fs');

const addThenWrite = () => {
  const fileToRead = fs.readFileSync('./a.txt', 'utf-8');
  arrayOfNums = fileToRead.split(',').map(Number);
  let result = 0;
  for (i = 0; i < arrayOfNums.length; i++) {
    result += arrayOfNums[i];
  }
  stringResult = result.toString();
  fs.writeFileSync('./addResult', stringResult);
};
addThenWrite();
