// Using spread operator, write a program to create a new object that will look exactly like the one given in the output


const originalObject = { name: "John", age: 30 };

const copiedObject = { ...originalObject };

console.log("Copied Object:", copiedObject);