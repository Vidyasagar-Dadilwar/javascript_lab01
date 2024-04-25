// Write a program to create an array of 10 string, create a function that returns longest string from the array.

const strings = ["apple", "banana", "orange", "kiwi", "strawberry"];

function findLongestString(arr) {
  return arr.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}

const longestString = findLongestString(strings);
console.log("Longest string:", longestString);