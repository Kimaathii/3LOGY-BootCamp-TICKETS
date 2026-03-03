# DRY PRINCIPLE: DON'T REPEAT YOURSELF
# Week 2 Tuesday - Refactoring Examples

Demonstrating code transformation from repetitive to reusable.

---

## EXAMPLE 1: GREETING MESSAGES

### ❌ BEFORE (Repetitive)
```javascript
console.log("Hello, Alice! Welcome to our site.");
console.log("Hello, Bob! Welcome to our site.");
console.log("Hello, Charlie! Welcome to our site.");
console.log("Hello, Diana! Welcome to our site.");
console.log("Hello, Eve! Welcome to our site.");
```

**Problems:**
- Same code structure repeated 5 times
- Hard to update (change "site" to "app" = 5 edits)
- Error-prone (typos in individual lines)

### ✅ AFTER (Using Function)
```javascript
function greetUser(name) {
  console.log(`Hello, ${name}! Welcome to our site.`);
}

greetUser("Alice");
greetUser("Bob");
greetUser("Charlie");
greetUser("Diana");
greetUser("Eve");
```

**Benefits:**
- Single source of truth
- One place to update
- Consistent behavior
- Easier to test

---

## EXAMPLE 2: CALCULATING DISCOUNTS

### ❌ BEFORE (Repetitive)
```javascript
// Discount for item 1
const item1Price = 50;
const item1Discount = item1Price * 0.15;
const item1Final = item1Price - item1Discount;
console.log(`Item 1: $${item1Final}`);

// Discount for item 2
const item2Price = 75;
const item2Discount = item2Price * 0.15;
const item2Final = item2Price - item2Discount;
console.log(`Item 2: $${item2Final}`);

// Discount for item 3
const item3Price = 100;
const item3Discount = item3Price * 0.15;
const item3Final = item3Price - item3Discount;
console.log(`Item 3: $${item3Final}`);
```

**Problems:**
- Repeated formula (3 times)
- Magic number 0.15 (unclear meaning)
- Hard to change discount rate

### ✅ AFTER (Using Function)
```javascript
function calculateDiscount(price, discountRate = 0.15) {
  const discount = price * discountRate;
  const finalPrice = price - discount;
  return finalPrice;
}

console.log(`Item 1: $${calculateDiscount(50)}`);
console.log(`Item 2: $${calculateDiscount(75)}`);
console.log(`Item 3: $${calculateDiscount(100)}`);

// Easy to change discount rate
console.log(`VIP Item 1: $${calculateDiscount(50, 0.25)}`);  // 25% off
```

**Benefits:**
- Clear, named discount rate
- Easy to change calculation
- Can support different discount rates
- Reusable across codebase

---

## EXAMPLE 3: FORM VALIDATION

### ❌ BEFORE (Repetitive)
```javascript
// Validate username
const username = document.getElementById('username').value;
if (username.trim() === '') {
  console.log('Username is required');
  isValid = false;
}

// Validate email
const email = document.getElementById('email').value;
if (email.trim() === '') {
  console.log('Email is required');
  isValid = false;
}

// Validate password
const password = document.getElementById('password').value;
if (password.trim() === '') {
  console.log('Password is required');
  isValid = false;
}

// Validate phone
const phone = document.getElementById('phone').value;
if (phone.trim() === '') {
  console.log('Phone is required');
  isValid = false;
}
```

**Problems:**
- Same validation logic repeated 4 times
- Hard to add new validation rules
- Inconsistent error messages

### ✅ AFTER (Using Function)
```javascript
function validateField(fieldName) {
  const value = document.getElementById(fieldName).value;
  if (value.trim() === '') {
    console.log(`${capitalize(fieldName)} is required`);
    return false;
  }
  return true;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Clean validation
let isValid = true;
isValid = validateField('username') && isValid;
isValid = validateField('email') && isValid;
isValid = validateField('password') && isValid;
isValid = validateField('phone') && isValid;
```

**Even Better:**
```javascript
function validateFields(...fieldNames) {
  let allValid = true;
  for (const field of fieldNames) {
    if (!validateField(field)) {
      allValid = false;
    }
  }
  return allValid;
}

const isValid = validateFields('username', 'email', 'password', 'phone');
```

---

## EXAMPLE 4: DATA PROCESSING

### ❌ BEFORE (Repetitive)
```javascript
// Process Monday sales
const mondaySales = [45, 67, 23, 89, 34];
let mondayTotal = 0;
for (let i = 0; i < mondaySales.length; i++) {
  mondayTotal += mondaySales[i];
}
const mondayAverage = mondayTotal / mondaySales.length;
console.log(`Monday Average: $${mondayAverage}`);

// Process Tuesday sales
const tuesdaySales = [56, 78, 34, 90, 45];
let tuesdayTotal = 0;
for (let i = 0; i < tuesdaySales.length; i++) {
  tuesdayTotal += tuesdaySales[i];
}
const tuesdayAverage = tuesdayTotal / tuesdaySales.length;
console.log(`Tuesday Average: $${tuesdayAverage}`);

// Process Wednesday sales
const wednesdaySales = [67, 89, 45, 78, 56];
let wednesdayTotal = 0;
for (let i = 0; i < wednesdaySales.length; i++) {
  wednesdayTotal += wednesdaySales[i];
}
const wednesdayAverage = wednesdayTotal / wednesdaySales.length;
console.log(`Wednesday Average: $${wednesdayAverage}`);
```

**Problems:**
- Entire calculation repeated 3 times
- Any bug exists in all 3 copies
- Harder to maintain

### ✅ AFTER (Using Functions)
```javascript
function calculateSum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function calculateAverage(numbers) {
  if (numbers.length === 0) return 0;
  return calculateSum(numbers) / numbers.length;
}

function reportDailySales(day, sales) {
  const average = calculateAverage(sales);
  console.log(`${day} Average: $${average.toFixed(2)}`);
}

// Clean, readable code
const mondaySales = [45, 67, 23, 89, 34];
const tuesdaySales = [56, 78, 34, 90, 45];
const wednesdaySales = [67, 89, 45, 78, 56];

reportDailySales('Monday', mondaySales);
reportDailySales('Tuesday', tuesdaySales);
reportDailySales('Wednesday', wednesdaySales);
```

**Even Better (with array of objects):**
```javascript
const weeklySales = [
  { day: 'Monday', sales: [45, 67, 23, 89, 34] },
  { day: 'Tuesday', sales: [56, 78, 34, 90, 45] },
  { day: 'Wednesday', sales: [67, 89, 45, 78, 56] }
];

weeklySales.forEach(dayData => {
  reportDailySales(dayData.day, dayData.sales);
});
```

---

## EXAMPLE 5: HTML GENERATION

### ❌ BEFORE (Repetitive)
```javascript
const user1 = '<div class="user"><h3>Alice</h3><p>alice@example.com</p></div>';
const user2 = '<div class="user"><h3>Bob</h3><p>bob@example.com</p></div>';
const user3 = '<div class="user"><h3>Charlie</h3><p>charlie@example.com</p></div>';
const user4 = '<div class="user"><h3>Diana</h3><p>diana@example.com</p></div>';

document.getElementById('users').innerHTML = user1 + user2 + user3 + user4;
```

**Problems:**
- Repeated HTML structure
- Hard to change styling/structure
- Typos difficult to spot

### ✅ AFTER (Using Function)
```javascript
function createUserCard(name, email) {
  return `
    <div class="user">
      <h3>${name}</h3>
      <p>${email}</p>
    </div>
  `;
}

const users = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
  { name: 'Charlie', email: 'charlie@example.com' },
  { name: 'Diana', email: 'diana@example.com' }
];

const userCards = users.map(user => createUserCard(user.name, user.email));
document.getElementById('users').innerHTML = userCards.join('');
```

**Benefits:**
- Single template for all users
- Easy to update structure
- Works with any number of users
- Scalable solution

---

## COMPLETE REFACTORING WORKFLOW

### Problem: Calculate Order Totals

**Step 1: Identify Repetition**
```javascript
// Original repetitive code
const order1Subtotal = 50 + 30 + 20;
const order1Tax = order1Subtotal * 0.08;
const order1Total = order1Subtotal + order1Tax;

const order2Subtotal = 100 + 45 + 80;
const order2Tax = order2Subtotal * 0.08;
const order2Total = order2Subtotal + order2Tax;

const order3Subtotal = 25 + 15 + 10;
const order3Tax = order3Subtotal * 0.08;
const order3Total = order3Subtotal + order3Tax;
```

**Step 2: Extract Common Pattern**
```javascript
function calculateOrderTotal(items) {
  const subtotal = items.reduce((sum, price) => sum + price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  return total;
}
```

**Step 3: Use the Function**
```javascript
const order1 = [50, 30, 20];
const order2 = [100, 45, 80];
const order3 = [25, 15, 10];

console.log(`Order 1: $${calculateOrderTotal(order1).toFixed(2)}`);
console.log(`Order 2: $${calculateOrderTotal(order2).toFixed(2)}`);
console.log(`Order 3: $${calculateOrderTotal(order3).toFixed(2)}`);
```

**Step 4: Make It More Flexible**
```javascript
function calculateOrderTotal(items, taxRate = 0.08) {
  const subtotal = items.reduce((sum, price) => sum + price, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  
  return {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2)
  };
}

// Now we get detailed breakdown
const order1Details = calculateOrderTotal([50, 30, 20]);
console.log(`Subtotal: $${order1Details.subtotal}`);
console.log(`Tax: $${order1Details.tax}`);
console.log(`Total: $${order1Details.total}`);

// Different tax rate for different regions
const internationalOrder = calculateOrderTotal([100, 50], 0.15);
```

---

## REAL-WORLD ANALOGY

> **Imagine a coffee shop:**
> 
> **❌ BAD:** Every barista makes lattes differently, memorizing each step
> - Inconsistent quality
> - New baristas struggle to learn
> - Recipe changes require retraining everyone
> 
> **✅ GOOD:** Written recipe that everyone follows
> - Consistent drinks
> - Easy to train new staff
> - Update recipe once, benefits everyone
> 
> **Functions are like recipes - write once, use many times!**

---

## KEY PRINCIPLES

1. **DRY = Don't Repeat Yourself**
   - If you copy-paste code, consider a function

2. **Single Source of Truth**
   - One place to update logic
   - Reduces bugs from inconsistency

3. **Abstraction**
   - Hide complexity behind simple interface
   - `calculateTotal(items)` vs. manual calculation

4. **Reusability**
   - Write once, use everywhere
   - Build library of common functions

5. **Maintainability**
   - Easier to find and fix bugs
   - Clearer code structure

---

**Use these examples to show students the transformation from repetitive to clean code!**
