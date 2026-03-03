# LAB 07: BUG HUNT CHALLENGE
## 5 Buggy Programs to Fix

**Instructions:**
1. Read each program carefully
2. Identify the bug type (Syntax, Runtime, or Logical)
3. Explain what's wrong
4. Fix the bug
5. Test your fix works correctly
6. Document your solution in `LAB-07-SOLUTIONS.md`

---

## BUG #1: SYNTAX ERROR

**File:** `bug1-greeting.js`

```javascript
function greet(name) {
  console.log(`Hello, ${name}! Welcome to our program.`)
// Missing closing brace

greet("Alice");
greet("Bob");
```

**Expected Output:**
```
Hello, Alice! Welcome to our program.
Hello, Bob! Welcome to our program.
```

**Current Output:**
```
SyntaxError: Unexpected end of input
```

**Your Task:**
- **Bug Type:** ___________
- **What's Wrong:** ___________
- **How to Fix:** ___________

---

## BUG #2: RUNTIME ERROR (ish)

**File:** `bug2-array-loop.js`

```javascript
const numbers = [10, 20, 30, 40, 50];

console.log("Printing all numbers:");
for (let i = 0; i < 10; i++) {
  console.log(`Number ${i + 1}: ${numbers[i]}`);
}
```

**Expected Output:**
```
Printing all numbers:
Number 1: 10
Number 2: 20
Number 3: 30
Number 4: 40
Number 5: 50
```

**Current Output:**
```
Printing all numbers:
Number 1: 10
Number 2: 20
Number 3: 30
Number 4: 40
Number 5: 50
Number 6: undefined
Number 7: undefined
Number 8: undefined
Number 9: undefined
Number 10: undefined
```

**Your Task:**
- **Bug Type:** ___________
- **What's Wrong:** ___________
- **How to Fix:** ___________

---

## BUG #3: LOGICAL ERROR

**File:** `bug3-even-checker.js`

```javascript
function isEven(number) {
  return number % 2 === 1;  // Bug here!
}

// Test cases
console.log(`Is 4 even? ${isEven(4)}`);  // Should be true
console.log(`Is 7 even? ${isEven(7)}`);  // Should be false
console.log(`Is 10 even? ${isEven(10)}`);  // Should be true
console.log(`Is 15 even? ${isEven(15)}`);  // Should be false
```

**Expected Output:**
```
Is 4 even? true
Is 7 even? false
Is 10 even? true
Is 15 even? false
```

**Current Output:**
```
Is 4 even? false
Is 7 even? true
Is 10 even? false
Is 15 even? true
```

**Your Task:**
- **Bug Type:** ___________
- **What's Wrong:** ___________
- **How to Fix:** ___________

---

## BUG #4: TYPE ERROR / LOGICAL ERROR

**File:** `bug4-calculator.js`

```javascript
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function addTen(value) {
  return value + 10;
}

readline.question("Enter a number: ", userInput => {
  const result = addTen(userInput);  // Bug: userInput is a STRING!
  console.log(`Your number plus 10 is: ${result}`);
  readline.close();
});
```

**Expected Output (if user enters 25):**
```
Enter a number: 25
Your number plus 10 is: 35
```

**Current Output (if user enters 25):**
```
Enter a number: 25
Your number plus 10 is: 2510
```

**Your Task:**
- **Bug Type:** ___________
- **What's Wrong:** ___________
- **How to Fix:** ___________

---

## BUG #5: LOGICAL ERROR (EDGE CASE)

**File:** `bug5-array-function.js`

```javascript
function getFirstAndLast(items) {
  const first = items[0];
  const last = items[items.length - 1];
  return { first, last };
}

// Test cases
const fruits = ["apple", "banana", "cherry", "date"];
const result1 = getFirstAndLast(fruits);
console.log(`First: ${result1.first}, Last: ${result1.last}`);

const numbers = [1, 2, 3, 4, 5];
const result2 = getFirstAndLast(numbers);
console.log(`First: ${result2.first}, Last: ${result2.last}`);

// Edge case - THIS ONE BREAKS!
const empty = [];
const result3 = getFirstAndLast(empty);
console.log(`First: ${result3.first}, Last: ${result3.last}`);
```

**Expected Output:**
```
First: apple, Last: date
First: 1, Last: 5
First: undefined, Last: undefined
```
Or better yet, handle the edge case with helpful message:
```
First: apple, Last: date
First: 1, Last: 5
Error: Array is empty!
```

**Current Output:**
```
First: apple, Last: date
First: 1, Last: 5
First: undefined, Last: undefined
```
(Works but doesn't handle edge case well)

**Your Task:**
- **Bug Type:** ___________
- **What's Wrong:** ___________
- **How to Fix:** ___________

---

## BONUS BUG #6 (Optional Challenge)

**File:** `bug6-sum-function.js`

```javascript
function sumToN(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {  // Bug: off-by-one error
    total += i;
  }
  return total;
}

// Test cases
console.log(`Sum to 1: ${sumToN(1)}`);    // Expected: 1, Actual: 0
console.log(`Sum to 5: ${sumToN(5)}`);    // Expected: 15, Actual: 10
console.log(`Sum to 10: ${sumToN(10)}`);  // Expected: 55, Actual: 45
```

**Expected Formula:** 1 + 2 + 3 + ... + n

**Examples:**
- Sum to 1: 1 = **1**
- Sum to 5: 1 + 2 + 3 + 4 + 5 = **15**
- Sum to 10: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = **55**

**Your Task:**
- **Bug Type:** ___________
- **What's Wrong:** ___________
- **How to Fix:** ___________

---

## SUBMISSION FORMAT

Create a file called `LAB-07-SOLUTIONS.md` with the following format:

```markdown
# LAB 07: Bug Hunt Solutions
**Student Name:** [Your Name]
**Date:** [Today's Date]

---

## Bug #1: Greeting Function

**Bug Type:** Syntax Error

**Problem Description:**
The function is missing a closing brace. JavaScript requires all opening 
braces { to have a matching closing brace }.

**Fix Applied:**
Added closing brace } on line 3 after the console.log statement.

**Fixed Code:**
```javascript
function greet(name) {
  console.log(`Hello, ${name}! Welcome to our program.`);
}

greet("Alice");
greet("Bob");
```

**Test Results:**
✅ Works correctly - prints greetings for both Alice and Bob.

---

## Bug #2: [Your Title]

**Bug Type:** [Syntax/Runtime/Logical]

**Problem Description:**
[Explain what's wrong in your own words]

**Fix Applied:**
[Describe what you changed]

**Fixed Code:**
```javascript
[Your corrected code here]
```

**Test Results:**
[Confirm it works]

---

[Continue for all 5 bugs...]

```

---

## GRADING RUBRIC

**Complete (✅):**
- Fixed all 5 bugs correctly
- Identified correct bug types
- Provided clear explanations
- Code runs without errors
- OR fixed 3-4 bugs (partial credit - keep working!)

**Incomplete (⏳):**
- Fixed < 3 bugs
- Missing explanations
- Code still has errors

**Tips for Success:**
1. Start with the syntax error (easiest!)
2. Run each program to see the actual error
3. Read error messages carefully
4. Use console.log to debug logical errors
5. Test your fixes thoroughly
6. Ask for help if stuck > 5 minutes

---

**Good luck, Bug Hunters! 🕵️🐛**
