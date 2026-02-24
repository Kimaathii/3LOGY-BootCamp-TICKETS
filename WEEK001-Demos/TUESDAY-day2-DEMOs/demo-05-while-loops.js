// DEMO 05: While Loops
// Week 1 Tuesday - Control Structures
// Demonstrates while loops and common patterns

console.log("=== WHILE LOOPS DEMO ===\n");

// Example 1: Basic while loop
console.log("Example 1: Basic counting with while");
console.log("---");

let count = 1;

while (count <= 5) {
  console.log(`Count: ${count}`);
  count++;  // CRUCIAL! Without this = infinite loop
}

console.log("Done!\n");

// Example 2: Accumulator with while
console.log("Example 2: Sum of 1 to 100");
console.log("---");

let sum = 0;
let num = 1;

while (num <= 100) {
  sum += num;  // Same as: sum = sum + num
  num++;
}

console.log(`Sum of 1 to 100: ${sum}`);

// Example 3: While with condition that changes
console.log("\n\nExample 3: Countdown");
console.log("---");

let countdown = 5;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}

console.log("Blast off! 🚀\n");

// Example 4: Password validation logic
console.log("Example 4: Password validation simulation");
console.log("---");

let password = "wrong";
let attempts = 0;
const correctPassword = "secret123";

while (password !== correctPassword && attempts < 3) {
  attempts++;
  console.log(`Attempt ${attempts}: Checking password...`);
  
  // Simulate different attempts
  if (attempts === 1) {
    password = "wrong1";
    console.log("Incorrect password!");
  } else if (attempts === 2) {
    password = "wrong2";
    console.log("Incorrect password!");
  } else {
    password = "secret123";  // Correct on 3rd try
  }
}

if (password === correctPassword) {
  console.log("✅ Access granted!");
} else {
  console.log("❌ Too many attempts. Locked out!");
}

// Example 5: Doubling money
console.log("\n\nExample 5: How long to double $10?");
console.log("---");

let money = 10;
let years = 0;
const interestRate = 0.07;  // 7% per year

console.log(`Starting amount: $${money}`);

while (money < 20) {
  money = money * (1 + interestRate);
  years++;
  console.log(`Year ${years}: $${money.toFixed(2)}`);
}

console.log(`It took ${years} years to double your money!\n`);

// WARNING: Infinite loop example (commented out!)
console.log("⚠️ WARNING: Infinite Loop Example (NOT RUNNING)");
console.log("---");
console.log("This code would run forever:");
console.log(`
let count = 1;
while (count <= 5) {
  console.log("Stuck!");
  // Forgot count++!  Loop never ends!
}
`);

console.log("\n💡 KEY POINTS:");
console.log("- while loops continue as long as condition is true");
console.log("- ALWAYS update the condition inside the loop!");
console.log("- Press Ctrl+C to stop infinite loops");
console.log("- Use while when you don't know iteration count in advance");
