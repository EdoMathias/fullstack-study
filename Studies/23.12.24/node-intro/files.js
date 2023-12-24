const fs = require('fs');
const fsPromise = require('fs/promises');

// Blocking code
/*
console.log('init');
const fileContent = fs.readFileSync('./hello.txt', 'utf-8');
console.log(fileContent);
console.log('end');
console.log('//------//');
*/

// Async code
/*
console.log('init async');
fs.readFile('./hello.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
console.log('end async');
console.log('//------//');
*/

// Promise code
/*
console.log('init promise read');
const callRead = async () => {
  try {
    const contents = await fsPromise.readFile('./hello.txt', 'utf-8');
    console.log(contents);
  } catch (error) {
    console.log(error);
  }
};
callRead();
console.log('end promise read');
*/

//---//
// Write then read
/*
console.log('init read');
const fileContent = fs.readFileSync('./hello.txt', 'utf-8');
console.log('end read');
console.log('init write');
fs.writeFileSync('./writeFileSync.txt', fileContent);
// fs.writeFileSync('./writeFileSync.txt', fileContent, { flag: 'a' }); // Will append instead of override
console.log('end write');
*/

//---//
// async Write then read
/*
console.log('init async read then write');
fs.readFile('./hello.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('./readThenWrite.txt', data, { flag: 'a' }, (err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log(data);
  }
});
console.log('end async read then write');
console.log('//------//');
*/

//---//
// promise Write then read
console.log('init promise read then write');
const readThenWrite = async () => {
  try {
    const data = await fsPromise.readFile('./hello.txt', 'utf-8');
    await fsPromise.writeFile('./promiseReadThenWrite.txt', data, {
      flag: 'a',
    });
  } catch (error) {
    console.log(error);
  }
};
readThenWrite();
console.log('end promise read then write');
console.log('//------//');
