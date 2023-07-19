const scores = [90, 85, 70, 100, 67, 45, 54, 30, 88, 77];

// .length
console.log(`scores length: ${scores.length}`); // 10

// .push -> Appends new elements to the end of an array, and returns the new length of the array.
scores.push(95);
console.log(`scores are: ${scores}`);
console.log(`scores length: ${scores.length}`); // 11

// .concat -> Combines two or more arrays.
let scores1 = [70, 80, 90];
const allScores = scores.concat(scores1);
console.log(`allScores are: ${allScores}`);
console.log(`scores length: ${allScores.length}`);

// .join -> Adds all the elements of an array into a string, separated by the specified separator string.
const strScores = scores.join(' -> ');
console.log(`strScores: ${strScores}`);

// .slice -> gives a section of the array from the index 1(included) until index 2 (not included)
console.log(scores.slice(1, 4)); // from index element [1] to the forth (not including the forth)
console.log(scores.slice(2)); // from index element [2] to the end of the array
console.log(scores.slice(-2)); // from the second to last element
console.log(scores.slice(2, -1)); // from index element [2] to first to the last element
