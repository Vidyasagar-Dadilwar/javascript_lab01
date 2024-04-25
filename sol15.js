// Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.


try {
  let undefinedObject = undefined;
  console.log(undefinedObject.someProperty); 
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Caught TypeError:", error.message);
    console.log("Default value set: 'undefined'");
  } else {
    console.log("Unexpected error occurred:", error);
  }
}
