// DEMO 3: Good vs Bad Variable Names
// Use this to teach code readability

console.log("========================================");
console.log("❌ BAD VARIABLE NAMES (Hard to understand)");
console.log("========================================\n");

let x = 5;
let y = 10;
let z = x + y;
console.log(`Result: ${z}`);

// What does this code do? Who knows!

console.log("\n========================================");
console.log("✅ GOOD VARIABLE NAMES (Clear meaning)");
console.log("========================================\n");

let apples = 5;
let oranges = 10;
let totalFruit = apples + oranges;
console.log(`Total fruit: ${totalFruit}`);

// Now it's obvious what's happening!

console.log("\n========================================");
console.log("🎯 MORE EXAMPLES");
console.log("========================================\n");

// BAD
let a = 25;
let b = a * 12;
console.log(`Bad: ${b}`);

// GOOD
let ageInYears = 25;
let ageInMonths = ageInYears * 12;
console.log(`Good: ${ageInMonths} months old`);

/* 
TEACHING POINTS:
- Variable names should explain what they store
- Use camelCase in JavaScript (firstWordLowercase, restUppercase)
- Avoid single letters except in loops (i, j, k) or math (x, y)
- Be descriptive but not excessive (totalFruitItems vs total)

CODE IS FOR HUMANS!
The computer doesn't care if variable is 'x' or 'userName'
But your teammates (and future you) definitely care!
*/
