// Write a program to create an array of 5 cities e.g. "Nagpur","Bhopal","Delhi","Udaipur" and accept user input into a variable and print the array index if input value exists in array else print "Not Found".

const cities = ["Nagpur", "Bhopal", "Delhi", "Udaipur"];
const userInput = prompt("Enter a city:");

const index = cities.indexOf(userInput);

if (index !== -1) {
  console.log(`City "${userInput}" found at index ${index}.`);
} else {
  console.log("City not found.");
}