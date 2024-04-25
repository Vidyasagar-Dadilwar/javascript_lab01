// Write a program that creates two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays) and print the results to console.

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7];

const intersection = array1.filter((num) => array2.includes(num));
console.log("Intersection of arrays:", intersection);