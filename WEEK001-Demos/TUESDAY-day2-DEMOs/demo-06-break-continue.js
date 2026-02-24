// DEMO 06: Break and Continue
// Week 1 Tuesday - Control Structures
// Demonstrates break and continue statements

console.log("=== BREAK AND CONTINUE DEMO ===\n");

// Example 1: BREAK - Exit loop immediately
console.log("Example 1: BREAK - Stop at 5");
console.log("---");

for (let num = 1; num <= 10; num++) {
  if (num === 5) {
    console.log("Found 5! Stopping loop.");
    break;  // Exit loop completely
  }
  console.log(num);
}

console.log("Loop exited\n");

// Example 2: CONTINUE - Skip to next iteration
console.log("Example 2: CONTINUE - Skip even numbers");
console.log("---");

for (let num = 1; num <= 10; num++) {
  if (num % 2 === 0) {  // If even
    continue;  // Skip rest of loop body, go to next iteration
  }
  console.log(num);  // Only prints odd numbers
}

console.log("\n");

// Example 3: BREAK in while loop - Search for target
console.log("Example 3: Search in array with BREAK");
console.log("---");

const numbers = [3, 7, 12, 19, 24, 8, 15];
const target = 19;
let found = false;
let index = 0;

while (index < numbers.length) {
  console.log(`Checking index ${index}: ${numbers[index]}`);
  
  if (numbers[index] === target) {
    console.log(`Found ${target} at index ${index}!`);
    found = true;
    break;  // Stop searching
  }
  
  index++;
}

if (!found) {
  console.log(`${target} not found in array`);
}

// Example 4: CONTINUE to skip negative numbers
console.log("\n\nExample 4: Sum only positive numbers");
console.log("---");

const values = [5, -3, 10, -1, 8, -7, 12];
let sum = 0;

for (const value of values) {
  if (value < 0) {
    console.log(`Skipping negative: ${value}`);
    continue;  // Skip negative numbers
  }
  
  sum += value;
  console.log(`Adding ${value}, sum now: ${sum}`);
}

console.log(`Final sum (positives only): ${sum}\n`);

// Example 5: BREAK with labels (advanced - rarely used)
console.log("Example 5: Finding first divisible pair");
console.log("---");

const nums1 = [2, 3, 5, 7];
const nums2 = [4, 6, 8, 10];
let foundPair = false;

outerLoop: for (let i = 0; i < nums1.length; i++) {
  for (let j = 0; j < nums2.length; j++) {
    console.log(`Checking ${nums1[i]} and ${nums2[j]}`);
    
    if (nums2[j] % nums1[i] === 0) {
      console.log(`${nums2[j]} is divisible by ${nums1[i]}!`);
      foundPair = true;
      break outerLoop;  // Break out of BOTH loops
    }
  }
}

if (foundPair) {
  console.log("Found a divisible pair!");
} else {
  console.log("No divisible pairs found");
}

// Practical example: Input validation
console.log("\n\nExample 6: Skip invalid inputs");
console.log("---");

const inputs = ["42", "hello", "17", "world", "99", "3.14"];

for (const input of inputs) {
  const num = parseInt(input);
  
  if (isNaN(num)) {
    console.log(`"${input}" is not a valid number, skipping...`);
    continue;
  }
  
  console.log(`Processing number: ${num}`);
}

console.log("\n💡 KEY POINTS:");
console.log("- break: Exit loop completely");
console.log("- continue: Skip to next iteration");
console.log("- Use break when you found what you're looking for");
console.log("- Use continue to skip invalid/unwanted items");
console.log("- Both work in for and while loops");
