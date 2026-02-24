// DEMO 01: If/Else Basics
// Week 1 Tuesday - Control Structures
// Demonstrates simple if statements and if/else

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== DEMO 01: If/Else Basics ===\n");

// Example 1: Simple If Statement
console.log("Example 1: Simple If");
console.log("---");

readline.question("How old are you? ", ageInput => {
  const age = parseInt(ageInput);
  
  if (age >= 18) {
    console.log("You can vote!");
    console.log("Voting is a responsibility.");
  }
  
  console.log("Thank you for your input.");
  
  // Example 2: If/Else
  console.log("\n\nExample 2: If/Else");
  console.log("---");
  
  readline.question("What's the temperature in Fahrenheit? ", tempInput => {
    const temperature = parseInt(tempInput);
    
    if (temperature > 75) {
      console.log("It's hot! 🥵 Wear shorts.");
    } else {
      console.log("It's cool. 🧥 Bring a jacket.");
    }
    
    console.log("Have a great day!");
    
    readline.close();
  });
});
