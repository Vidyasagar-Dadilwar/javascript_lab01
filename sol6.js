// Write a program to calculate sum of all even numbers from 1 to 100 using while loop.

let sum = 0;
let number = 2;

while (number <= 100) {
  sum += number;
  number += 2;
}

console.log("Sum of even numbers from 1 to 100:", sum);