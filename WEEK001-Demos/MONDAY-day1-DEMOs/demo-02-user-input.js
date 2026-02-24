// DEMO 2: User Input and Type Conversion
// Shows common bug and the fix

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("What's your name? ", userName => {
  console.log(`Welcome to bootcamp, ${userName}!`);
  
  readline.question("How old are you? ", userAge => {
    
    // FIRST: Show the BUG (comment this out after demonstrating)
    /*
    console.log(`\n❌ BUG EXAMPLE:`);
    console.log(`In 10 years, you'll be ${userAge + 10}`);
    // Shows "2510" instead of 35!
    // WHY? userAge is a STRING, + concatenates!
    */
    
    // THEN: Show the FIX
    console.log(`\n✅ CORRECT VERSION:`);
    const ageNum = parseInt(userAge);
    console.log(`In 10 years, you'll be ${ageNum + 10}`);
    // Now shows 35 correctly
    
    // Show type checking
    console.log(`\n📊 Type Information:`);
    console.log(`userAge type: ${typeof userAge}`);        // string
    console.log(`ageNum type: ${typeof ageNum}`);          // number
    
    readline.close();
  });
});

/* 
TEACHING SEQUENCE:
1. Run with bug version first - let students see "2510"
2. Ask: "Why did this happen?"
3. Explain: User input is ALWAYS a string
4. Show the fix with parseInt()
5. Demonstrate typeof to prove data types

KEY MESSAGE:
- User input = strings (even numbers!)
- Must convert with parseInt(), parseFloat(), or Number()
- This is THE most common beginner mistake!
*/
