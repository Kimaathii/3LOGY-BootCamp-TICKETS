// BUG #3: LOGICAL ERROR - Wrong comparison operator

function isEven(number) {
  return number % 2 === 1;  // Bug: Should be === 0 for even numbers!
}

// Test cases
console.log(`Is 4 even? ${isEven(4)}`);  // Should be true, returns false
console.log(`Is 7 even? ${isEven(7)}`);  // Should be false, returns true
console.log(`Is 10 even? ${isEven(10)}`);  // Should be true, returns false
console.log(`Is 15 even? ${isEven(15)}`);  // Should be false, returns true

// Logic is inverted!
