# CODE REVIEW EXAMPLES
# Week 1 Thursday - Git Collaboration

This file contains examples of good and bad code review comments for teaching purposes.

---

## BAD CODE REVIEW EXAMPLES ❌

### Example 1: Not Constructive
```
"This code is terrible."
```

**What's wrong:**
- Not constructive
- No explanation
- Discouraging
- Doesn't help improve code
- Unprofessional

---

### Example 2: Accusatory Tone
```
"Why did you do it this way?"
```

**What's wrong:**
- Sounds accusatory
- Puts developer on defensive
- Doesn't suggest alternative
- Could be rephrased as question: "Have you considered X approach? It might simplify..."

---

### Example 3: Rubber Stamp (LGTM)
```
"LGTM"
```
(Reviewed in 10 seconds)

**What's wrong:**
- Didn't actually review code
- No thoughtful feedback
- Defeats purpose of code review
- Misses opportunity to improve code
- Shows lack of engagement

---

### Example 4: Too Vague
```
"This function is confusing."
```

**What's wrong:**
- Not specific (which part? why?)
- No constructive suggestion
- Doesn't explain what would make it clearer

---

### Example 5: Demanding, Not Suggesting
```
"Change this to use a for loop. Also rename all these variables."
```

**What's wrong:**
- Commands, doesn't suggest
- No explanation of WHY
- Doesn't respect developer's approach
- Better: "Consider using a for loop because..."

---

## GOOD CODE REVIEW EXAMPLES ✅

### Example 1: Constructive with Example
```
Great start! I noticed the loop repeats this logic multiple times. 
Consider extracting it into a function:

function validateInput(userInput) {
  return userInput.length > 0 && !isNaN(userInput);
}

This would make it easier to add more validation rules later.
What do you think?
```

**What's good:**
- Starts positive
- Identifies specific issue (repetition)
- Provides concrete solution (example code)
- Explains benefit (easier to extend)
- Invites discussion ("What do you think?")

---

### Example 2: Identifies Edge Case
```
I noticed you're not handling the case where the user enters an empty string. 
Could you add validation like this:

if (userInput.trim() === '') {
  console.log('Error: Input cannot be empty');
  return;
}

This would prevent the app from crashing when users just press Enter.
```

**What's good:**
- Specific edge case identified
- Polite suggestion ("Could you")
- Provides code example
- Explains consequence (prevents crash)

---

### Example 3: Teaches Principle
```
Love the descriptive variable names! `numberOfGuesses` is much clearer 
than `num`. Makes the code very readable.

One suggestion: This function currently does two things (validation + calculation). 
Consider splitting it into two functions to follow the Single Responsibility Principle:

function validateUserInput(input) { ... }
function calculateScore(validInput) { ... }

This makes testing and maintenance easier. Thoughts?
```

**What's good:**
- Starts with genuine praise (variable naming)
- Teaches a principle (SRP)
- Explains benefit (testing, maintenance)
- Suggests specific refactor
- Asks for developer's thoughts

---

### Example 4: Asks Clarifying Question
```
The logic here works well! Quick question: I'm trying to understand 
the reasoning behind using `let` instead of `const` for this variable.

I don't see it being reassigned - could we use `const` here for 
immutability? Or am I missing something?
```

**What's good:**
- Acknowledges code works
- Frames as learning opportunity ("I'm trying to understand")
- Suggests alternative
- Humble tone ("Or am I missing something?")

---

### Example 5: Security Concern
```
Great feature implementation!

I noticed the API key is hardcoded on line 23:
const API_KEY = "sk_live_abc123...";

For security, we should move this to an environment variable. 
Here's how:

1. Create .env file (add to .gitignore!)
   API_KEY=sk_live_abc123...

2. Install dotenv: npm install dotenv

3. In code:
   require('dotenv').config();
   const API_KEY = process.env.API_KEY;

This prevents accidentally committing secrets to GitHub.
```

**What's good:**
- Praises feature first
- Identifies security issue clearly
- Provides step-by-step solution
- Explains WHY (prevent secrets in repo)

---

### Example 6: Style Consistency
```
Nice work on the array manipulation!

Minor note: I see you're using single quotes for strings here,
but the rest of the codebase uses double quotes. 

Could you switch these to double quotes for consistency?
Line 15: 'hello' → "hello"
Line 18: 'world' → "world"

Keeps our code style uniform. Thanks!
```

**What's good:**
- Positive opening
- Minor issue framed appropriately
- Specific lines mentioned
- Explains value (consistency)

---

### Example 7: Performance Suggestion
```
This function works correctly! Well done.

I noticed you're using a nested loop to find matching items (lines 45-52).
For large datasets, this could be slow (O(n²) complexity).

Have you considered using a Set for faster lookups?

const itemSet = new Set(items);
const matches = users.filter(user => itemSet.has(user.id));

This would improve performance to O(n). Worth considering if the
array might grow large. What are your thoughts?
```

**What's good:**
- Confirms correctness first
- Identifies performance concern
- Explains complexity (teaches concept)
- Suggests optimized alternative with code
- Acknowledges it may not be necessary (depends on scale)
- Invites discussion

---

## CODE REVIEW TEMPLATE

Use this structure for all reviews:

```markdown
[POSITIVE OBSERVATION]
Brief praise or acknowledgment of what works well

[SPECIFIC SUGGESTION]
Identify specific area for improvement
Explain WHY it matters

[CONCRETE EXAMPLE OR QUESTION]
Provide code example OR ask clarifying question

[ENCOURAGING CLOSE]
Thank them, invite discussion, or offer support
```

### Example Using Template:
```
Great job implementing the login feature! The validation logic is solid.

I noticed the password is stored in plain text (line 78). For security,
we should hash passwords before storing them.

Consider using bcrypt:
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);

This protects user passwords if database is compromised. 
Want help implementing this?
```

---

## PROFESSIONAL TONE GUIDE

### Instead of...
- "This is wrong" → "Consider this approach instead"
- "Why didn't you..." → "Have you considered..."
- "You should..." → "Could you..." or "What about..."
- "Obviously..." → Remove entirely (nothing is obvious!)
- "Just..." → Remove (minimizes difficulty)

### Power Words for Reviews:
- ✅ "Consider"
- ✅ "Suggest"
- ✅ "Could"
- ✅ "What about"
- ✅ "Have you thought about"
- ✅ "I'm wondering if"
- ✅ "One approach might be"

---

## CODE REVIEW PRINCIPLES SUMMARY

1. **Be kind and constructive** - "Great work! Consider..."
2. **Explain WHY, not just WHAT** - "This prevents X edge case"
3. **Suggest, don't demand** - "Could you try..." not "Change this"
4. **Always find something positive** - Start with praise
5. **Ask questions** - "Have you considered..." not "You should..."
6. **Be specific** - Point to exact lines, provide examples
7. **Focus on code, not coder** - "This variable" not "You named badly"

---

## WHEN TO APPROVE vs REQUEST CHANGES

### Approve ✅ When:
- Code meets requirements
- No critical bugs or security issues
- Minor suggestions are optional improvements
- Style is consistent with codebase
- Tests pass

### Request Changes 🔄 When:
- Critical bug present
- Security vulnerability
- Breaking change without discussion
- Doesn't meet requirements
- Tests fail
- Significant refactor needed

### Comment Only 💬 When:
- Just asking questions
- Providing optional suggestions
- Not ready to fully approve/reject yet
- Waiting for discussion

---

## REMEMBER:

Code review is about:
- **Making code better**, not criticizing the developer
- **Sharing knowledge**, not showing off
- **Collaboration**, not competition
- **Learning together**, not judging

The best code reviews make both reviewer and developer better programmers!

---

**Use these examples during LAB-04 code review practice!**
