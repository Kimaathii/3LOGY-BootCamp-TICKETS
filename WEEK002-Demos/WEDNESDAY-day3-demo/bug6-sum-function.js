// BONUS BUG #6: LOGICAL ERROR - Off-by-one error

function sumToN(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {  // Bug: Starts at 0, should start at 1 OR use <=
    total += i;
  }
  return total;
}

// Test cases showing the bug
console.log(`Sum to 1: ${sumToN(1)}`);    // Expected: 1, Actual: 0  (adds only 0)
console.log(`Sum to 5: ${sumToN(5)}`);    // Expected: 15, Actual: 10 (adds 0+1+2+3+4)
console.log(`Sum to 10: ${sumToN(10)}`);  // Expected: 55, Actual: 45 (adds 0+1+...+9)

// Bug: Loop adds 0 through n-1 instead of 1 through n
// Classic off-by-one error!
