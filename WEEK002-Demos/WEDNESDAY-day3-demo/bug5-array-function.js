// BUG #5: LOGICAL ERROR (EDGE CASE) - Doesn't handle empty arrays

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

// Edge case - THIS ONE DOESN'T FAIL but returns undefined values
const empty = [];
const result3 = getFirstAndLast(empty);
console.log(`First: ${result3.first}, Last: ${result3.last}`);

// Bug: Doesn't validate empty array, returns { first: undefined, last: undefined }
// Should check if array is empty and handle gracefully!
