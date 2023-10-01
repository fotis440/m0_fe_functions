// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "Hello! How can I assist you today?";
  }
  let message = greeting();
  console.log(message); 
  // Output expected: Hello! How can I assist you today?
  

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
    return `Hello, ${name}! How can I assist you today?`;
  }
  let message = customGreeting("Fotis");
  console.log(message); 
  // Output expected: Hello, Fotis! How can I assist you today?

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(firstName, middleName, lastName) {
    return `Hello, ${firstName} ${middleName} ${lastName}!`;
  }

  let greeting = greetPerson("Joe", "John", "Smith");
console.log(greeting); 

// Output expected: Hello, Joe John Smith!

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(number) {
return number * number;
}

let num = 33
let result = square(33);
console.log(result)
console.log(`The square of the number ${num} is ${result}`);


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkStock(quantity, item) {
    if (quantity > 0) {
      if (quantity >= 4) {
        return `${item} is stocked`;} 
          else {
            return `${item} is running low!`;
            else {
              return `${item} is out of stock`;}
  
  console.log(checkStock(1, "Coffee"));
  console.log(checkStock(3, "Tortillas"));
  console.log(checkStock(0, "Cheese"));
  console.log(checkStock(1, "Salsa"));