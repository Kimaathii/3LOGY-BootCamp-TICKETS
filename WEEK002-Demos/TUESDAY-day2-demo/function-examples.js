# FUNCTION EXAMPLES FOR TEACHING
# Week 2 Tuesday - Functions

Complete set of function examples progressing from simple to complex.

---

## BASIC FUNCTIONS

```javascript
// Example 1: No parameters, no return
function sayHello() {
  console.log("Hello, World!");
}

sayHello();  // Call the function


// Example 2: With parameters, no return
function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}

greetPerson("Alice");  // Hello, Alice!
greetPerson("Bob");    // Hello, Bob!


// Example 3: With parameters AND return
function add(a, b) {
  const result = a + b;
  return result;
}

const total = add(5, 3);  // total = 8
console.log(`Sum: ${total}`);


// Example 4: Multiple parameters
function calculateGrade(score, totalPossible) {
  const percentage = (score / totalPossible) * 100;
  return percentage;
}

const grade = calculateGrade(85, 100);  // 85
console.log(`You scored ${grade}%`);


// Example 5: Default parameters
function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet("Alice"));          // Hello, Alice!
console.log(greet("Bob", "Hi"));      // Hi, Bob!
console.log(greet("Charlie", "Hey")); // Hey, Charlie!


// Example 6: Return multiple values (using object)
function calculateStats(numbers) {
  const minimum = Math.min(...numbers);
  const maximum = Math.max(...numbers);
  const average = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
  
  return { min: minimum, max: maximum, avg: average };
}

const stats = calculateStats([10, 20, 30, 40, 50]);
console.log(`Min: ${stats.min}, Max: ${stats.max}, Avg: ${stats.avg}`);

// Or use destructuring
const { min, max, avg } = calculateStats([10, 20, 30]);
console.log(`Results: ${min}, ${max}, ${avg}`);
```

---

## SCOPE EXAMPLES

```javascript
// Global vs Local Scope
let globalVariable = "I'm accessible everywhere";

function demonstrateScope() {
  let localVariable = "I only exist inside this function";
  
  console.log(globalVariable);  // ✓ Can access
  console.log(localVariable);   // ✓ Can access
}

demonstrateScope();
console.log(globalVariable);  // ✓ Works
// console.log(localVariable);  // ✗ ERROR! Not defined


// Common Mistake: Not using return value
function addTen(num) {
  num = num + 10;  // Creates new local variable
  return num;
}

let value = 5;
addTen(value);        // Function runs but...
console.log(value);   // Still 5! Function didn't change it

// Correct way:
value = addTen(value);  // Reassign with return value
console.log(value);     // Now 15


// Block scope with let/const
function testBlockScope() {
  if (true) {
    let blockVar = "Only in this block";
    console.log(blockVar);  // Works
  }
  // console.log(blockVar);  // ERROR! Out of scope
}
```

---

## UTILITY FUNCTIONS

```javascript
// String Functions
function reverseString(text) {
  return text.split('').reverse().join('');
}

function countWords(text) {
  return text.trim().split(/\s+/).length;
}

function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/\s/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}


// Math Functions
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Array Functions  
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function findMax(numbers) {
  let largest = numbers[0];
  for (const num of numbers) {
    if (num > largest) largest = num;
  }
  return largest;
}

function findMedian(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 
    ? (sorted[mid - 1] + sorted[mid]) / 2 
    : sorted[mid];
}

function shuffle(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
```

---

## JSDOC EXAMPLES

```javascript
/**
 * Calculate the Body Mass Index (BMI).
 * 
 * BMI is calculated as weight in kg divided by height in meters squared.
 * 
 * @param {number} weightKg - Weight in kilograms
 * @param {number} heightM - Height in meters
 * @returns {number} BMI value rounded to 2 decimal places
 * 
 * @example
 * calculateBMI(70, 1.75);  // Returns 22.86
 * calculateBMI(90, 1.80);  // Returns 27.78
 */
function calculateBMI(weightKg, heightM) {
  const bmi = weightKg / (heightM ** 2);
  return Math.round(bmi * 100) / 100;
}


/**
 * Convert temperature from Celsius to Fahrenheit.
 * 
 * @param {number} celsius - Temperature in Celsius
 * @returns {number} Temperature in Fahrenheit
 * 
 * @example
 * celsiusToFahrenheit(0);    // Returns 32
 * celsiusToFahrenheit(100);  // Returns 212
 */
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}


/**
 * Validate if email address has basic correct format.
 * 
 * Checks for presence of @ symbol and at least one dot.
 * This is a simple validation, not RFC-compliant.
 * 
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email appears valid, false otherwise
 * 
 * @example
 * isValidEmail("test@example.com");  // Returns true
 * isValidEmail("invalid.email");     // Returns false
 * isValidEmail("@nouser.com");       // Returns false
 */
function isValidEmail(email) {
  return email.includes('@') && email.includes('.');
}


/**
 * Calculate compound interest.
 * 
 * @param {number} principal - Initial amount invested
 * @param {number} rate - Annual interest rate (as decimal, e.g., 0.05 for 5%)
 * @param {number} years - Number of years
 * @param {number} [compoundFrequency=12] - Times per year interest compounds (default: monthly)
 * @returns {number} Final amount after compound interest
 * 
 * @example
 * calculateCompoundInterest(1000, 0.05, 10);      // Returns 1647.01 (monthly compounding)
 * calculateCompoundInterest(1000, 0.05, 10, 1);   // Returns 1628.89 (annual compounding)
 */
function calculateCompoundInterest(principal, rate, years, compoundFrequency = 12) {
  const amount = principal * Math.pow(1 + (rate / compoundFrequency), compoundFrequency * years);
  return Math.round(amount * 100) / 100;
}
```

---

## FUNCTION COMPOSITION EXAMPLE

```javascript
// Building complex behavior from simple functions

function validateNumber(input) {
  return !isNaN(parseFloat(input)) && isFinite(input);
}

function convertToNumber(input) {
  return parseFloat(input);
}

function calculateSum(numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  return calculateSum(numbers) / numbers.length;
}

function formatResult(label, value, decimals = 2) {
  return `${label}: ${value.toFixed(decimals)}`;
}

// Compose them together
function processUserScores(scoreInputs) {
  // Validate all inputs
  const validInputs = scoreInputs.filter(validateNumber);
  
  // Convert to numbers
  const scores = validInputs.map(convertToNumber);
  
  // Calculate average
  const average = calculateAverage(scores);
  
  // Format and return
  return formatResult("Average Score", average);
}

// Usage
const inputs = ["85", "90", "78", "invalid", "92", "88"];
console.log(processUserScores(inputs));  // Average Score: 86.60
```

---

## PRACTICE EXERCISES

```javascript
// Exercise 1: Temperature Converter
function celsiusToFahrenheit(celsius) {
  // TODO: Implement conversion
  // Formula: F = (C * 9/5) + 32
}

// Test
console.log(celsiusToFahrenheit(0));    // Should be 32
console.log(celsiusToFahrenheit(100));  // Should be 212


// Exercise 2: Validate Email
function isValidEmail(email) {
  // TODO: Return true if email contains @ and .
}

// Test
console.log(isValidEmail("test@example.com"));  // true
console.log(isValidEmail("invalid.email"));     // false


// Exercise 3: Find Largest
function findLargest(numbers) {
  // TODO: Return largest number (don't use Math.max)
}

// Test
console.log(findLargest([3, 7, 2, 9, 1]));  // 9


// SOLUTIONS (reveal after practice)
/*
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function isValidEmail(email) {
  return email.includes('@') && email.includes('.');
}

function findLargest(numbers) {
  let largest = numbers[0];
  for (const num of numbers) {
    if (num > largest) largest = num;
  }
  return largest;
}
*/
```

---

**Use these examples during lecture for hands-on practice!**
**Students should build similar functions for LAB-06!**
