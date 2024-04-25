// Write a program to find max number among two numbers passed in to a function, use ternary operator to find max number.

function findMax(a, b) {
  return a > b ? a : b;
}

const result = findMax(10, 5);
console.log("Max number:", result);
