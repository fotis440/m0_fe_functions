// Each example below has at least one opportunity for improvement.

// YOUR TASK:
// Modify the code to make that improvement(s)
// write a JS comment to explain what you changed, and why
// make sure the code you submit WORKS - you can run this entire file 
// using `node cleanUp.js` or copy and paste into a replit


// EX 1:
//function askForName() { console.log("Hello, what is your name?")
//                      }

//askForName();

console.log("Hello, what is your name?");
//Notes: Logs the fuction directly into the console since there is only one function.

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third
  //return sum;
}

console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));
//addThreeNums(1, 2, 3);
//addThreeNums(4, 2, 7);
//Notes: Logging the result of the function directly to the console by adding console.log in front of each function

// EX 3:

console.log(
  "Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper\n" +
  "Pulse basil and pine nuts\n" +
  "Add garlic and cheeses\n" +
  "Slowly pour in oil\n" +
  "Season"
);

// function makeFreshPesto(){
//   console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
//   console.log("Pulse basil and pine nuts");
//   console.log("Add garlic and cheeses");
//   console.log("Slowly pour in oil");
//   console.log("Season");    }

// makeFreshPesto();
//Notes: Initally I removed the declaration and executed the statements directly. After doing some research I found out about \n, which can be used to combine the messages into a single statement. 

//  EX 4:
// function average(num1, num2) 
//   {
// var sum = num1 + num2;
//     var avg = sum / 2;

// return avg
//   }

function average(num1, num2) {
  return (num1 + num2) / 2;
}

//Notes: The sum variable was removed and both functions are performed in a single statement.