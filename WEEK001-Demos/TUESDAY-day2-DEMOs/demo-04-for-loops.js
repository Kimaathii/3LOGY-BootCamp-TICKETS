// DEMO 04: For Loops
// Week 1 Tuesday - Control Structures
// Demonstrates various for loop patterns

console.log("=== FOR LOOPS DEMO ===\n");

// Example 1: Basic counting
console.log("Example 1: Count to 10");
console.log("---");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Example 2: Count by 2s
console.log("\n\nExample 2: Even numbers 0-20");
console.log("---");

for (let num = 0; num <= 20; num += 2) {
  console.log(num);
}

// Example 3: Countdown
console.log("\n\nExample 3: Countdown to launch!");
console.log("---");

for (let countdown = 10; countdown >= 1; countdown--) {
  console.log(countdown);
}
console.log("🚀 Liftoff!");

// Example 4: Accumulator pattern (IMPORTANT!)
console.log("\n\nExample 4: Sum of 1 to 10 (Accumulator Pattern)");
console.log("---");

let total = 0;  // Start at 0

for (let num = 1; num <= 10; num++) {
  total = total + num;  // Add each number
  console.log(`Adding ${num}, total now: ${total}`);
}

console.log(`\n✅ Final sum: ${total}`);

// Example 5: Loop through array
console.log("\n\nExample 5: Loop through fruits array");
console.log("---");

const fruits = ["apple", "banana", "orange", "grape"];

console.log("Method 1: Traditional for loop");
for (let i = 0; i < fruits.length; i++) {
  console.log(`I like ${fruits[i]}!`);
}

console.log("\nMethod 2: For...of loop (modern)");
for (const fruit of fruits) {
  console.log(`I like ${fruit}!`);
}

// Example 6: Multiplication table
console.log("\n\nExample 6: Multiplication table (3x3)");
console.log("---");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("---");
}

console.log("\n💡 KEY POINTS:");
console.log("- for loops are great when you know iteration count");
console.log("- i++ means i = i + 1");
console.log("- Accumulator pattern: start at 0, add each iteration");
console.log("- for...of is cleaner for arrays");
