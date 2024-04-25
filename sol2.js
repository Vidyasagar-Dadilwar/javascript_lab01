//Write a program to accept a number from user input and print whether the number is even or odd.

const number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
  console.log(`${number} is even.`);
} else {
  console.log(`${number} is odd.`);
}
