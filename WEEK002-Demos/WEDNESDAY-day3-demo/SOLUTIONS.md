# LAB 07: BUG HUNT SOLUTIONS (INSTRUCTOR KEY)

Complete solutions for all 6 buggy programs.

---

## BUG #1: GREETING FUNCTION (Syntax Error)

**Bug Type:** Syntax Error

**Problem:**
The function is missing a closing brace. JavaScript requires all opening braces `{` to have a matching closing brace `}`.

**Original Code:**
```javascript
function greet(name) {
  console.log(`Hello, ${name}! Welcome to our program.`)
// SyntaxError: Unexpected end of input

greet("Alice");
greet("Bob");
```

**Fixed Code:**
```javascript
function greet(name) {
  console.log(`Hello, ${name}! Welcome to our program.`);
}  // Added closing brace

greet("Alice");
greet("Bob");
```

**Output:**
```
Hello, Alice! Welcome to our program.
Hello, Bob! Welcome to our program.
```

---

## BUG #2: ARRAY LOOP (Runtime/Logical Error)

**Bug Type:** Logical Error (accessing beyond array bounds)

**Problem:**
The loop iterates 10 times (`i < 10`) but the array only has 5 elements. JavaScript doesn't throw error when accessing non-existent array indices - it returns `undefined`.

**Original Code:**
```javascript
const numbers = [10, 20, 30, 40, 50];

console.log("Printing all numbers:");
for (let i = 0; i < 10; i++) {  // Bug!
  console.log(`Number ${i + 1}: ${numbers[i]}`);
}
```

**Fixed Code (Solution 1 - Use array length):**
```javascript
const numbers = [10, 20, 30, 40, 50];

console.log("Printing all numbers:");
for (let i = 0; i < numbers.length; i++) {  // Fixed!
  console.log(`Number ${i + 1}: ${numbers[i]}`);
}
```

**Fixed Code (Solution 2 - Modern for...of):**
```javascript
const numbers = [10, 20, 30, 40, 50];

console.log("Printing all numbers:");
let index = 1;
for (const num of numbers) {
  console.log(`Number ${index}: ${num}`);
  index++;
}
```

**Output:**
```
Printing all numbers:
Number 1: 10
Number 2: 20
Number 3: 30
Number 4: 40
Number 5: 50
```

---

## BUG #3: EVEN CHECKER (Logical Error)

**Bug Type:** Logical Error

**Problem:**
The function checks if remainder is 1 (`=== 1`), which is the condition for **odd** numbers. For even numbers, remainder should be 0 (`=== 0`).

**Original Code:**
```javascript
function isEven(number) {
  return number % 2 === 1;  // Bug: checks for odd!
}

console.log(`Is 4 even? ${isEven(4)}`);   // false (wrong!)
console.log(`Is 7 even? ${isEven(7)}`);   // true (wrong!)
```

**Fixed Code:**
```javascript
function isEven(number) {
  return number % 2 === 0;  // Fixed: checks for even
}

console.log(`Is 4 even? ${isEven(4)}`);   // true ✓
console.log(`Is 7 even? ${isEven(7)}`);   // false ✓
console.log(`Is 10 even? ${isEven(10)}`); // true ✓
console.log(`Is 15 even? ${isEven(15)}`); // false ✓
```

**Output:**
```
Is 4 even? true
Is 7 even? false
Is 10 even? true
Is 15 even? false
```

---

## BUG #4: CALCULATOR (Type Error / Logical Error)

**Bug Type:** Logical Error (type coercion issue)

**Problem:**
`readline.question()` returns user input as a **string**. When you add a string and number (`"25" + 10`), JavaScript concatenates them instead of adding mathematically, resulting in `"2510"`.

**Original Code:**
```javascript
function addTen(value) {
  return value + 10;  // Bug: value is string!
}

readline.question("Enter a number: ", userInput => {
  const result = addTen(userInput);  // userInput is STRING
  console.log(`Your number plus 10 is: ${result}`);
  // Outputs: "Your number plus 10 is: 2510" when user enters 25
  readline.close();
});
```

**Fixed Code (Solution 1 - parseInt):**
```javascript
function addTen(value) {
  return value + 10;
}

readline.question("Enter a number: ", userInput => {
  const number = parseInt(userInput);  // Convert to number
  const result = addTen(number);
  console.log(`Your number plus 10 is: ${result}`);
  readline.close();
});
```

**Fixed Code (Solution 2 - Fix inside function):**
```javascript
function addTen(value) {
  const number = parseFloat(value);  // Convert to number
  return number + 10;
}

readline.question("Enter a number: ", userInput => {
  const result = addTen(userInput);
  console.log(`Your number plus 10 is: ${result}`);
  readline.close();
});
```

**Fixed Code (Solution 3 - Unary plus):**
```javascript
function addTen(value) {
  return (+value) + 10;  // Unary + converts to number
}

readline.question("Enter a number: ", userInput => {
  const result = addTen(userInput);
  console.log(`Your number plus 10 is: ${result}`);
  readline.close();
});
```

**Output (when user enters 25):**
```
Enter a number: 25
Your number plus 10 is: 35
```

---

## BUG #5: ARRAY FUNCTION (Edge Case / Logical Error)

**Bug Type:** Logical Error (doesn't handle edge case)

**Problem:**
Function doesn't validate that the array has elements. When called with empty array, it returns `{ first: undefined, last: undefined }` instead of handling gracefully.

**Original Code:**
```javascript
function getFirstAndLast(items) {
  const first = items[0];
  const last = items[items.length - 1];
  return { first, last };
}

const empty = [];
const result3 = getFirstAndLast(empty);
console.log(`First: ${result3.first}, Last: ${result3.last}`);
// Output: First: undefined, Last: undefined
```

**Fixed Code (Solution 1 - Return null):**
```javascript
function getFirstAndLast(items) {
  if (items.length === 0) {
    return null;  // Signal that array is empty
  }
  
  const first = items[0];
  const last = items[items.length - 1];
  return { first, last };
}

const result = getFirstAndLast([]);
if (result === null) {
  console.log("Error: Array is empty!");
} else {
  console.log(`First: ${result.first}, Last: ${result.last}`);
}
```

**Fixed Code (Solution 2 - Throw error):**
```javascript
function getFirstAndLast(items) {
  if (items.length === 0) {
    throw new Error("Cannot get first and last of empty array");
  }
  
  const first = items[0];
  const last = items[items.length - 1];
  return { first, last };
}

try {
  const result = getFirstAndLast([]);
  console.log(`First: ${result.first}, Last: ${result.last}`);
} catch (error) {
  console.log(`Error: ${error.message}`);
}
```

**Fixed Code (Solution 3 - Return default values):**
```javascript
function getFirstAndLast(items) {
  if (items.length === 0) {
    return { first: null, last: null };
  }
  
  const first = items[0];
  const last = items[items.length - 1];
  return { first, last };
}

const result = getFirstAndLast([]);
console.log(`First: ${result.first}, Last: ${result.last}`);
// Output: First: null, Last: null (clearer than undefined)
```

---

## BONUS BUG #6: SUM FUNCTION (Off-by-One Error)

**Bug Type:** Logical Error (off-by-one)

**Problem:**
Loop starts at `i = 0` and goes while `i < n`, so it adds `0 + 1 + 2 + ... + (n-1)`. Should add `1 + 2 + 3 + ... + n`.

**Original Code:**
```javascript
function sumToN(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {  // Bug: starts at 0
    total += i;
  }
  return total;
}

console.log(sumToN(5));  // Returns 10 (0+1+2+3+4), should be 15
```

**Fixed Code (Solution 1 - Start at 1):**
```javascript
function sumToN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {  // Fixed: start at 1, go to n
    total += i;
  }
  return total;
}

console.log(sumToN(5));  // Returns 15 ✓ (1+2+3+4+5)
```

**Fixed Code (Solution 2 - Add n to result):**
```javascript
function sumToN(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total + n;  // Add the missing n
}

console.log(sumToN(5));  // Returns 15 ✓
```

**Fixed Code (Solution 3 - Mathematical formula):**
```javascript
function sumToN(n) {
  // Gauss formula: sum = n * (n + 1) / 2
  return n * (n + 1) / 2;
}

console.log(sumToN(5));   // Returns 15 ✓
console.log(sumToN(100)); // Returns 5050 ✓ (instantly!)
```

**Output:**
```
Sum to 1: 1
Sum to 5: 15
Sum to 10: 55
```

---

## DEBUGGING TIPS USED

**For Each Bug:**

1. **Syntax Error (Bug #1):**
   - ✅ Read error message: "Unexpected end of input"
   - ✅ Check matching braces
   - ✅ VS Code highlights missing brace

2. **Array Loop (Bug #2):**
   - ✅ Print `numbers[i]` at each iteration
   - ✅ See "undefined" appear
   - ✅ Check loop condition vs array length

3. **Even Checker (Bug #3):**
   - ✅ Test with known values (4 should be true)
   - ✅ Check logic of modulo operator
   - ✅ Verify % 2 === 0 for even, === 1 for odd

4. **Calculator (Bug #4):**
   - ✅ Print `typeof userInput` (see it's "string")
   - ✅ Understand string concatenation vs addition
   - ✅ Convert string to number before math

5. **Array Function (Bug #5):**
   - ✅ Test edge cases (empty array)
   - ✅ Add validation for empty input
   - ✅ Handle gracefully (return null or throw error)

6. **Sum Function (Bug #6):**
   - ✅ Test with known result (sum to 5 = 15)
   - ✅ Print each value added to `total`
   - ✅ Notice missing the final `n`

---

## COMMON STUDENT MISTAKES TO WATCH FOR

1. **Guessing instead of systematic debugging**
   - Changing random things hoping it works
   - Solution: Require written explanation of WHY

2. **Not testing after fixing**
   - Assume fix works without verification
   - Solution: Require test output in submission

3. **Fixing symptom, not cause**
   - Bug #2: Manually adding 5 to length instead of using `numbers.length`
   - Solution: Discuss why dynamic solution better

4. **Type confusion**
   - Not understanding string vs number
   - Solution: Review typeof operator

---

**All students should complete bugs #1-5. Bug #6 is bonus credit!**
