// Write a program that creates an array of numbers and returns a new array that contains only the unique numbers using reduce function.

const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 7, 5];

const uniqueNumbers = numbers.reduce((unique, num) => {
  if (!unique.includes(num)) {
    unique.push(num);
  }
  return unique;
}, []);

console.log("Unique Numbers:", uniqueNumbers);