// DEMO 03: Common Mistake - Assignment vs Comparison
// Week 1 Tuesday - Control Structures
// Shows the difference between = and ===

console.log("=== COMMON MISTAKE: = vs === ===\n");

// WRONG: Using = (assignment) instead of === (comparison)
console.log("Example 1: THE WRONG WAY ❌");
console.log("---");

let age = 25;
console.log(`age is currently: ${age}`);

if (age = 18) {  // ❌ This ASSIGNS 18 to age!
  console.log("Inside if block");
  console.log(`age is now: ${age}`);  // age changed to 18!
}

console.log("This is a bug! We accidentally changed age to 18.\n");

// CORRECT: Using === (comparison)
console.log("Example 2: THE RIGHT WAY ✅");
console.log("---");

age = 25;  // Reset to 25
console.log(`age is: ${age}`);

if (age === 18) {  // ✅ This COMPARES age to 18
  console.log("You are exactly 18");
} else {
  console.log("You are not 18");
  console.log(`age is still: ${age}`);  // age unchanged!
}

console.log("\n=== COMPARISON OPERATORS ===");
console.log("===  strict equal (checks value AND type)");
console.log("!==  not equal");
console.log(">    greater than");
console.log("<    less than");
console.log(">=   greater than or equal");
console.log("<=   less than or equal");

console.log("\n=== LIVE EXAMPLES ===");
console.log(`5 === 5:        ${5 === 5}`);        // true
console.log(`5 === "5":      ${5 === "5"}`);      // false (different types!)
console.log(`5 == "5":       ${5 == "5"}`);       // true (loose equality - avoid!)
console.log(`10 > 5:         ${10 > 5}`);         // true
console.log(`3 !== 4:        ${3 !== 4}`);        // true
console.log(`"cat" === "dog":${("cat" === "dog")}`); // false

console.log("\n💡 KEY TAKEAWAY:");
console.log("=   assigns a value (age = 18)");
console.log("=== compares values (age === 18)");
console.log("Always use === for comparisons!");
