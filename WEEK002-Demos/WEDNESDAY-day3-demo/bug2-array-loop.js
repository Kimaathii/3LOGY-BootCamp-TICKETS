// BUG #2: RUNTIME ERROR (ish) - Loop goes beyond array bounds

const numbers = [10, 20, 30, 40, 50];

console.log("Printing all numbers:");
for (let i = 0; i < 10; i++) {  // Bug: Should be i < numbers.length
  console.log(`Number ${i + 1}: ${numbers[i]}`);
}

// This prints "undefined" for indices 5-9 since array only has 5 elements
