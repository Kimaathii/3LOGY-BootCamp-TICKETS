// DEMO 07: Logical Operators
// Week 1 Tuesday - Control Structures
// Demonstrates && (AND), || (OR), and ! (NOT)

console.log("=== LOGICAL OPERATORS DEMO ===\n");

// Example 1: AND operator (&&)
console.log("Example 1: AND (&&) - Both must be true");
console.log("---");

const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive! ✅");
} else {
  console.log("You cannot drive ❌");
}

console.log("\nTruth table for AND:");
console.log(`true && true   = ${true && true}`);
console.log(`true && false  = ${true && false}`);
console.log(`false && true  = ${false && true}`);
console.log(`false && false = ${false && false}`);

// Example 2: OR operator (||)
console.log("\n\nExample 2: OR (||) - At least one must be true");
console.log("---");

const day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend! 🎉");
} else {
  console.log("It's a weekday 📅");
}

console.log("\nTruth table for OR:");
console.log(`true || true   = ${true || true}`);
console.log(`true || false  = ${true || false}`);
console.log(`false || true  = ${false || true}`);
console.log(`false || false = ${false || false}`);

// Example 3: NOT operator (!)
console.log("\n\nExample 3: NOT (!) - Reverses boolean");
console.log("---");

const isRaining = false;

if (!isRaining) {
  console.log("No umbrella needed! ☀️");
} else {
  console.log("Bring an umbrella ☔");
}

console.log("\nNOT examples:");
console.log(`!true  = ${!true}`);
console.log(`!false = ${!false}`);

// Example 4: Combining logical operators
console.log("\n\nExample 4: Combining operators");
console.log("---");

const temperature = 78;
const isSunny = true;

if (temperature > 70 && temperature < 85 && isSunny) {
  console.log("Perfect beach day! 🏖️");
} else {
  console.log("Not ideal beach weather");
}

// Example 5: More complex logic
console.log("\n\nExample 5: Student discount eligibility");
console.log("---");

const studentAge = 20;
const isStudent = true;
const hasID = true;

if ((studentAge >= 18 && studentAge <= 25) && isStudent && hasID) {
  console.log("Eligible for student discount! 🎓");
} else {
  console.log("Not eligible for student discount");
}

// Example 6: Using OR for multiple conditions
console.log("\n\nExample 6: Valid password characters");
console.log("---");

const input = "a";

if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
  console.log(`${input} is a vowel`);
} else {
  console.log(`${input} is not a vowel (or not a single letter)`);
}

// Example 7: Short-circuit evaluation
console.log("\n\nExample 7: Short-circuit evaluation");
console.log("---");

const value = null;

// AND short-circuit: If first is false, second isn't checked
if (value && value.length > 0) {
  console.log("Value has length");
} else {
  console.log("Value is null/undefined or empty");
}

// Without short-circuit, this would crash:
// if (value.length > 0) { } // ERROR! Can't read .length of null

// Example 8: Practical validation
console.log("\n\nExample 8: Form validation");
console.log("---");

const username = "alice123";
const password = "secretpass";
const agreedToTerms = true;

if (username.length >= 3 && password.length >= 8 && agreedToTerms) {
  console.log("✅ Registration successful!");
} else {
  console.log("❌ Registration failed:");
  
  if (username.length < 3) {
    console.log("  - Username must be at least 3 characters");
  }
  if (password.length < 8) {
    console.log("  - Password must be at least 8 characters");
  }
  if (!agreedToTerms) {
    console.log("  - You must agree to terms");
  }
}

console.log("\n💡 KEY POINTS:");
console.log("- && (AND): Both conditions must be true");
console.log("- || (OR): At least one condition must be true");
console.log("- ! (NOT): Reverses the boolean value");
console.log("- Use parentheses () to make complex logic clear");
console.log("- Short-circuit: && stops at first false, || stops at first true");
