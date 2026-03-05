# DATA STRUCTURES EXAMPLES
# Week 2 Thursday - Arrays, Objects, Sets

Comprehensive examples demonstrating when to use each data structure.

---

## ARRAYS - ORDERED LISTS

### Basic Array Operations
```javascript
// Creating arrays
const emptyArray = [];
const fruits = ["apple", "banana", "cherry"];
const numbers = [10, 20, 30, 40, 50];
const mixed = [1, "two", true, null];  // Legal but avoid!

// Accessing elements
console.log(fruits[0]);  // "apple"
console.log(fruits[fruits.length - 1]);  // "cherry" (last)

// Modifying elements
fruits[1] = "blueberry";
console.log(fruits);  // ["apple", "blueberry", "cherry"]

// Adding elements
fruits.push("date");  // Add to end
fruits.unshift("apricot");  // Add to beginning

// Removing elements
const last = fruits.pop();  // Remove from end
const first = fruits.shift();  // Remove from beginning

// Finding elements
const has Banana = fruits.includes("banana");  // false (case-sensitive!)
const index = fruits.indexOf("cherry");  // 2
```

### Advanced Array Methods
```javascript
const scores = [85, 90, 78, 92, 88];

// .map - transform each element
const curved = scores.map(score => score + 5);
console.log(curved);  // [90, 95, 83, 97, 93]

// .filter - keep matching elements
const highScores = scores.filter(score => score >= 85);
console.log(highScores);  // [85, 90, 92, 88]

// .reduce - aggregate to single value
const total = scores.reduce((sum, score) => sum + score, 0);
console.log(total);  // 433

const average = total / scores.length;
console.log(average);  // 86.6

// .find - first matching element
const firstHigh = scores.find(score => score >= 90);
console.log(firstHigh);  // 90

// .some - check if any match
const hasFailure = scores.some(score => score < 60);
console.log(hasFailure);  // false

// .every - check if all match
const allPassing = scores.every(score => score >= 60);
console.log(allPassing);  // true
```

### Real-World Array Example: Shopping Cart
```javascript
const shoppingCart = [];

// Add items to cart
function addItem(name, price, quantity = 1) {
  shoppingCart.push({ name, price, quantity });
  console.log(`Added ${quantity}x ${name} to cart`);
}

addItem("Laptop", 999, 1);
addItem("Mouse", 25, 2);
addItem("Keyboard", 75, 1);

// Calculate subtotal
const subtotal = shoppingCart.reduce((sum, item) => {
  return sum + (item.price * item.quantity);
}, 0);

console.log(`Subtotal: $${subtotal}`);  // $1124

// Find expensive items
const expensiveItems = shoppingCart.filter(item => item.price > 50);
console.log("Expensive items:", expensiveItems);

// Get all item names
const itemNames = shoppingCart.map(item => item.name);
console.log("Items:", itemNames.join(", "));  // "Laptop, Mouse, Keyboard"

// Remove item from cart
function removeItem(name) {
  const index = shoppingCart.findIndex(item => item.name === name);
  if (index !== -1) {
    shoppingCart.splice(index, 1);
    console.log(`Removed ${name} from cart`);
  } else {
    console.log(`${name} not found in cart`);
  }
}

removeItem("Mouse");
console.log(`Cart now has ${shoppingCart.length} items`);
```

---

## OBJECTS - KEY-VALUE PAIRS

### Basic Object Operations
```javascript
// Creating objects
const emptyObject = {};

const person = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 25,
  email: "alice@example.com",
  isStudent: false
};

// Accessing properties (dot notation)
console.log(person.firstName);  // "Alice"
console.log(person.age);  // 25

// Accessing properties (bracket notation)
console.log(person["email"]);  // "alice@example.com"

// Useful when key is in variable
const property = "age";
console.log(person[property]);  // 25

// Adding new properties
person.phone = "555-1234";
person.city = "New York";

// Modifying properties
person.age = 26;

// Deleting properties
delete person.isStudent;

console.log(person);
```

### Object Methods
```javascript
const user = {
  username: "johndoe",
  email: "john@example.com",
  age: 30,
  premium: true
};

// Get all keys
const keys = Object.keys(user);
console.log(keys);  // ['username', 'email', 'age', 'premium']

// Get all values
const values = Object.values(user);
console.log(values);  // ['johndoe', 'john@example.com', 30, true]

// Get key-value pairs
const entries = Object.entries(user);
console.log(entries);
// [['username', 'johndoe'], ['email', 'john@example.com'], ...]

// Check if property exists
console.log("age" in user);  // true
console.log("address" in user);  // false

// Iterate over object
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
```

### Nested Objects
```javascript
const company = {
  name: "Tech Corp",
  founded: 2015,
  headquarters: {
    city: "San Francisco",
    state: "CA",
    address: {
      street: "123 Main St",
      zip: "94102"
    }
  },
  ceo: {
    name: "Jane Smith",
    age: 45,
    contact: {
      email: "jane@techcorp.com",
      phone: "555-0123"
    }
  },
  employees: [
    { name: "Alice", role: "Developer", salary: 120000 },
    { name: "Bob", role: "Designer", salary: 100000 },
    { name: "Charlie", role: "Manager", salary: 140000 }
  ]
};

// Access nested properties
console.log(company.ceo.name);  // "Jane Smith"
console.log(company.headquarters.address.zip);  // "94102"
console.log(company.employees[0].name);  // "Alice"

// Optional chaining (safe access)
console.log(company.cfo?.name);  // undefined (no error!)
console.log(company.headquarters.address.unit?.number);  // undefined

// Calculate total payroll
const totalPayroll = company.employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(`Total payroll: $${totalPayroll}`);  // $360000
```

### Real-World Object Example: Word Counter
```javascript
function countWords(text) {
  const words = text.toLowerCase().split(/\s+/);
  const wordCount = {};
  
  for (const word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }
  
  return wordCount;
}

const paragraph = "the quick brown fox jumps over the lazy dog the fox is quick";
const counts = countWords(paragraph);

console.log(counts);
// { the: 3, quick: 2, brown: 1, fox: 2, jumps: 1, over: 1, lazy: 1, dog: 1, is: 1 }

// Find most common word
let mostCommon = "";
let maxCount = 0;

for (const [word, count] of Object.entries(counts)) {
  if (count > maxCount) {
    maxCount = count;
    mostCommon = word;
  }
}

console.log(`Most common word: "${mostCommon}" (${maxCount} times)`);
// Most common word: "the" (3 times)
```

---

## SETS - UNIQUE COLLECTIONS

### Basic Set Operations
```javascript
// Creating sets
const emptySet = new Set();

const numbers = new Set([1, 2, 3, 4, 5]);

// Duplicates automatically removed!
const withDuplicates = new Set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5]);
console.log(withDuplicates);  // Set { 1, 2, 3, 4, 5 }

// Add elements
const colors = new Set();
colors.add("red");
colors.add("blue");
colors.add("green");
colors.add("red");  // Won't be added (duplicate!)

console.log(colors);  // Set { 'red', 'blue', 'green' }
console.log(colors.size);  // 3

// Check membership (FAST - O(1))
console.log(colors.has("red"));  // true
console.log(colors.has("yellow"));  // false

// Remove element
colors.delete("blue");
console.log(colors);  // Set { 'red', 'green' }

// Clear all
colors.clear();
console.log(colors.size);  // 0
```

### Set Iteration
```javascript
const fruits = new Set(["apple", "banana", "cherry"]);

// for...of loop
for (const fruit of fruits) {
  console.log(fruit);
}

// forEach
fruits.forEach(fruit => {
  console.log(fruit);
});

// Convert to array
const fruitArray = [...fruits];  // ["apple", "banana", "cherry"]
const fruitArray2 = Array.from(fruits);  // Same result
```

### Set Operations (Math)
```javascript
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

// UNION (all elements from both sets)
const union = new Set([...setA, ...setB]);
console.log(union);  // Set { 1, 2, 3, 4, 5, 6, 7, 8 }

// INTERSECTION (common elements)
const intersection = new Set(
  [...setA].filter(x => setB.has(x))
);
console.log(intersection);  // Set { 4, 5 }

// DIFFERENCE (in A but not in B)
const difference = new Set(
  [...setA].filter(x => !setB.has(x))
);
console.log(difference);  // Set { 1, 2, 3 }

// SYMMETRIC DIFFERENCE (in A or B, but not both)
const symDiff = new Set([
  ...[...setA].filter(x => !setB.has(x)),
  ...[...setB].filter(x => !setA.has(x))
]);
console.log(symDiff);  // Set { 1, 2, 3, 6, 7, 8 }

// SUBSET (is A contained in B?)
const isSubset = [...setA].every(x => setB.has(x));
console.log(isSubset);  // false

const smallSet = new Set([4, 5]);
const isSmallSubset = [...smallSet].every(x => setB.has(x));
console.log(isSmallSubset);  // true
```

### Real-World Set Example: Unique Email List
```javascript
const emailList = new Set();

function subscribeEmail(email) {
  const normalized = email.toLowerCase().trim();
  
  if (emailList.has(normalized)) {
    console.log(`${email} is already subscribed!`);
    return false;
  }
  
  emailList.add(normalized);
  console.log(`✅ ${email} subscribed successfully!`);
  return true;
}

function unsubscribeEmail(email) {
  const normalized = email.toLowerCase().trim();
  
  if (emailList.delete(normalized)) {
    console.log(`${email} unsubscribed.`);
    return true;
  } else {
    console.log(`${email} not found in list.`);
    return false;
  }
}

// Testing
subscribeEmail("alice@example.com");     // ✅ Subscribed
subscribeEmail("bob@example.com");       // ✅ Subscribed
subscribeEmail("ALICE@EXAMPLE.COM");     // Already subscribed!
subscribeEmail(" charlie@example.com "); // ✅ Subscribed (trimmed)

console.log(`Total subscribers: ${emailList.size}`);  // 3

console.log("All subscribers:");
emailList.forEach(email => console.log(`- ${email}`));

unsubscribeEmail("bob@example.com");  // Unsubscribed
console.log(`Remaining: ${emailList.size}`);  // 2
```

---

## CHOOSING THE RIGHT STRUCTURE

### Decision Matrix

```javascript
// SCENARIO 1: To-Do List (order matters)
// ✅ USE: ARRAY
const todos = [
  { id: 1, task: "Buy groceries", done: false },
  { id: 2, task: "Walk dog", done: true },
  { id: 3, task: "Finish homework", done: false }
];

// SCENARIO 2: User Profile (named properties)
// ✅ USE: OBJECT
const userProfile = {
  username: "johndoe",
  email: "john@example.com",
  age: 30,
  preferences: {
    theme: "dark",
    notifications: true
  }
};

// SCENARIO 3: Unique Tags (no duplicates)
// ✅ USE: SET
const blogTags = new Set(["javascript", "coding", "tutorial"]);
blogTags.add("javascript");  // Won't add duplicate!

// SCENARIO 4: Leaderboard (order + rank)
// ✅ USE: ARRAY of OBJECTS
const leaderboard = [
  { rank: 1, player: "Alice", score: 9850 },
  { rank: 2, player: "Bob", score: 9200 },
  { rank: 3, player: "Charlie", score: 8750 }
];

// SCENARIO 5: Word Frequency Counter
// ✅ USE: OBJECT
const wordFrequency = {
  "the": 15,
  "and": 8,
  "or": 3
};

// SCENARIO 6: Visited URLs (track uniqueness, fast lookup)
// ✅ USE: SET
const visitedUrls = new Set();
visitedUrls.add("https://example.com/page1");
if (!visitedUrls.has("https://example.com/page2")) {
  console.log("Haven't visited this page yet!");
  visitedUrls.add("https://example.com/page2");
}
```

### Performance Comparison

```javascript
// TEST: Finding element in large dataset

const size = 10000;

// Array approach
const arrayTest = Array.from({length: size}, (_, i) => `item${i}`);
console.time("Array includes");
const foundInArray = arrayTest.includes("item9999");
console.timeEnd("Array includes");  // ~0.1-0.5ms (O(n))

// Set approach
const setTest = new Set(arrayTest);
console.time("Set has");
const foundInSet = setTest.has("item9999");
console.timeEnd("Set has");  // ~0.001-0.01ms (O(1))

// Set is 10-100x faster for membership testing!


// TEST: Accessing by index vs key

const itemsArray = Array.from({length: size}, (_, i) => ({ id: i, name: `Item ${i}` }));
const itemsObject = {};
itemsArray.forEach(item => itemsObject[item.id] = item);

console.time("Array find by ID");
const foundById = itemsArray.find(item => item.id === 9999);
console.timeEnd("Array find by ID");  // ~0.5-2ms (O(n))

console.time("Object access by ID");
const foundByKey = itemsObject[9999];
console.timeEnd("Object access by ID");  // ~0.001ms (O(1))

// Object is 100-1000x faster for key-based access!
```

---

## COMBINED EXAMPLE: Contact Manager Data Model

```javascript
// Combining arrays, objects, and sets effectively

class ContactManager {
  constructor() {
    this.contacts = [];  // Array for ordered list
    this.contactById = {};  // Object for fast ID lookup
    this.emailSet = new Set();  // Set to prevent duplicate emails
    this.nextId = 1;
  }
  
  addContact(name, email, phone) {
    // Check for duplicate email
    if (this.emailSet.has(email)) {
      console.log(`Error: ${email} already exists!`);
      return null;
    }
    
    const contact = {
      id: this.nextId++,
      name,
      email,
      phone,
      createdAt: new Date()
    };
    
    this.contacts.push(contact);  // Add to array
    this.contactById[contact.id] = contact;  // Add to object
    this.emailSet.add(email);  // Add to set
    
    console.log(`✅ Added: ${name}`);
    return contact;
  }
  
  getContactById(id) {
    return this.contactById[id];  // O(1) lookup!
  }
  
  getAllContacts() {
    return this.contacts;  // Returns ordered array
  }
  
  searchByName(query) {
    return this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  deleteContact(id) {
    const contact = this.contactById[id];
    if (!contact) {
      console.log(`Contact ${id} not found`);
      return false;
    }
    
    // Remove from all structures
    this.contacts = this.contacts.filter(c => c.id !== id);
    delete this.contactById[id];
    this.emailSet.delete(contact.email);
    
    console.log(`Deleted: ${contact.name}`);
    return true;
  }
}

// Usage
const manager = new ContactManager();
manager.addContact("Alice", "alice@example.com", "555-1234");
manager.addContact("Bob", "bob@example.com", "555-5678");
manager.addContact("Alice", "alice@example.com", "555-9999");  // Error: duplicate email

console.log("All contacts:", manager.getAllContacts());
console.log("Search 'ali':", manager.searchByName("ali"));
console.log("Get ID 1:", manager.getContactById(1));

manager.deleteContact(2);
console.log("After delete:", manager.getAllContacts());
```

---

**Use these examples during lecture to demonstrate practical applications!**
