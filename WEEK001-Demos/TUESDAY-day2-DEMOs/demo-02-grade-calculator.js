// DEMO 02: Grade Calculator
// Week 1 Tuesday - Control Structures
// Demonstrates if/else if/else chains

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("=== GRADE CALCULATOR ===\n");

readline.question("Enter your test score (0-100): ", scoreInput => {
  const score = parseInt(scoreInput);
  let grade;
  
  // if/else if/else chain
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  
  console.log(`\nYou scored ${score} points.`);
  console.log(`Your grade is: ${grade}`);
  
  // Bonus: Add message based on grade
  if (grade === "A" || grade === "B") {
    console.log("Great job! 🎉");
  } else if (grade === "C" || grade === "D") {
    console.log("You passed! Keep studying. 📚");
  } else {
    console.log("Don't give up! Study and try again. 💪");
  }
  
  readline.close();
});
