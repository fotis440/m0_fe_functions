// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE

"Hello World".toLowerCase();
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"

"Hello World".includes("Hello");
//The includes() method is checking if the string "Hello World" contains the substring "Hello". It does, so this will return an argument with a "true" value

"Hello World".endsWith("Hello");
//The endsWith() method is checking if the string "Hello World" ends with the substring "Hello". It does not, so this will return an argument with a "false" value

"Hello World".endsWith("rld");
//The endsWith() method is checking if the string "Hello World" ends with the substring "rld". It does, so this will return an argument with a "true" value



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE

var firstName = "Jeff";
console.log(firstName.startsWith("J"));
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.



const greeting = '   Hello world!   ';
console.log(greeting);
// Expected output: "   Hello world!   ";
console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
// The trim.Start() method is called on the greeting variable, which stores the string object "    Hello world"
// If present, the trim.Start() method eliminates any present spaces between the open quotes and first letter of the statement.
// In this example there are spaces that were removed from the statement. 
// The console prints the updated message.

const num1 = '5';

console.log(num1.padStart(2, '0'));
// Expected output: "05"
// The pad.Start() method is called on the number variable, which has a value of 5
// The method indicates the maxLength value, fillString value, which determines the output
// The console prints the updated message.




// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// 1. Declare first array variable
let numbers = [10, 20, 30, 40, 50];

// 2. Call a built-in method - slice() method
let slicedArray = numbers.slice(1, 4);
console.log(slicedArray);
//Expected output: 20, 30, 40
//Used the slice method on an array of 5 values
//Defined the slice start and end number within the array 

// 1. Declare second array variable
let colors = ['red', 'green', 'blue', 'yellow'];

// 2. Call a built-in method - reverse() method
console.log(colors.reverse());
// Expected output: yellow', 'blue', 'green', 'red'
// Used the reverse() method on the array defined as colors.