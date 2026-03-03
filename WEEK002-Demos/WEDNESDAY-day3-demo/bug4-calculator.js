// BUG #4: TYPE ERROR / LOGICAL ERROR - String concatenation instead of addition

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function addTen(value) {
  return value + 10;  // Bug: value is a string, so this concatenates!
}

readline.question("Enter a number: ", userInput => {
  const result = addTen(userInput);  // userInput is STRING from readline
  console.log(`Your number plus 10 is: ${result}`);
  readline.close();
});

// If user enters "25", result is "2510" (string concatenation)
// Should convert userInput to number first!
