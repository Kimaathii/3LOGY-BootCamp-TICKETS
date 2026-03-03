# CODE REVIEW CHECKLIST
# Week 1 Thursday - Git Collaboration

Use this checklist when reviewing pull requests.  
Don't just approve quickly - take time to review thoroughly!

---

## FUNCTIONALITY ✅

### Does the code work?
- [ ] Code runs without errors
- [ ] Feature works as described in PR description
- [ ] All requirements met
- [ ] No unexpected behavior

### Testing
- [ ] Reviewer tested code locally (if possible)
- [ ] PR author documented testing performed
- [ ] Edge cases considered and tested
- [ ] Error cases handled appropriately

**Notes:**
```
Test cases to verify:
- Valid inputs
- Invalid inputs (empty, null, wrong type)
- Edge cases (very large numbers, special characters, etc.)
- Boundary conditions
```

---

## CODE QUALITY 📏

### Readability
- [ ] Variable names are clear and descriptive
- [ ] Function names explain what they do
- [ ] Code structure is logical and easy to follow
- [ ] Comments explain complex logic (but code is self-documenting where possible)

**Good variable naming:**
```javascript
✅ numberOfGuesses
✅ userInput
✅ secretNumber

❌ x
❌ num
❌ temp
```

### Maintainability
- [ ] No unnecessary code repetition (DRY principle)
- [ ] Functions do ONE thing (Single Responsibility)
- [ ] Code is modular and reusable
- [ ] Magic numbers replaced with named constants

**Example - Replace magic numbers:**
```javascript
❌ if (attempts > 10) { ... }
✅ const MAX_ATTEMPTS = 10;
   if (attempts > MAX_ATTEMPTS) { ... }
```

### Documentation
- [ ] Complex functions have JSDoc comments
- [ ] Non-obvious logic is explained
- [ ] README updated if needed
- [ ] API changes documented

**JSDoc example:**
```javascript
/**
 * Calculate total price including tax
 * @param {number} price - Base price of item
 * @param {number} tax - Tax amount
 * @returns {number} Total price
 */
function calculateTotal(price, tax) {
  return price + tax;
}
```

---

## CONSISTENCY 🎯

### Code Style
- [ ] Matches existing code style in project
- [ ] Indentation consistent (2 or 4 spaces)
- [ ] Quote style consistent (single ' or double ")
- [ ] Naming conventions followed (camelCase for variables/functions)

### Patterns
- [ ] Uses same patterns as rest of codebase
- [ ] Error handling approach consistent
- [ ] File structure follows project conventions

---

## SECURITY 🔒

### No Sensitive Data
- [ ] No passwords in code
- [ ] No API keys hardcoded
- [ ] No personal information committed
- [ ] Secrets in environment variables (.env)

**Red flags:**
```javascript
❌ const API_KEY = "sk_live_abc123...";
❌ const PASSWORD = "mypassword";
❌ const DATABASE_URL = "postgres://user:pass@host/db";
```

### Input Validation
- [ ] User input is validated
- [ ] Handles unexpected input gracefully
- [ ] Prevents injection attacks (if applicable)
- [ ] Error messages don't reveal sensitive info

**Example validation:**
```javascript
function processUserGuess(input) {
  // Validate it's a number
  const guess = parseInt(input);
  if (isNaN(guess)) {
    return "Please enter a valid number";
  }
  
  // Validate range
  if (guess < 1 || guess > 100) {
    return "Number must be between 1 and 100";
  }
  
  return guess;
}
```

---

## PULL REQUEST DESCRIPTION 📝

### Information Quality
- [ ] Title clearly describes change
- [ ] Description explains WHAT changed
- [ ] Description explains WHY (rationale)
- [ ] Testing performed is documented
- [ ] Screenshots included (if UI change)

**Good PR description template:**
```markdown
## What I Changed
Added input validation to handle non-numeric guesses

## Why
Previously, entering letters caused the program to crash.
This provides better user experience.

## How It Works
Uses `parseInt()` and `isNaN()` to validate input before processing

## Testing Performed
- [x] Tested with valid numbers
- [x] Tested with letters
- [x] Tested with empty string
- [x] No errors or crashes
```

### Scope
- [ ] PR focuses on ONE feature/fix (not multiple unrelated changes)
- [ ] Doesn't include unnecessary file changes
- [ ] Commit messages are clear and descriptive

---

## PERFORMANCE CONSIDERATIONS ⚡

(Optional for bootcamp - but good to think about!)

- [ ] No obvious performance issues
- [ ] Loops are efficient (avoid nested loops if possible)
- [ ] No redundant operations
- [ ] Appropriate data structures used

---

## PROVIDE FEEDBACK ✍️

### Your Review Should Include:

#### 1. Positive Feedback (Always!)
```
What the developer did well:
- [ ] Noted at least one positive aspect
```

**Examples:**
- "Great variable naming!"
- "Love the thorough testing!"
- "Clear commit messages!"

#### 2. Constructive Suggestions
```
Areas for improvement:
- [ ] Specific lines or sections identified
- [ ] Explanations provided (WHY it matters)
- [ ] Code examples given (when helpful)
```

#### 3. Questions
```
Clarifications needed:
- [ ] Asked about unclear logic
- [ ] Questioned potential edge cases
- [ ] Discussed alternative approaches
```

---

## REVIEW DECISION 🎯

### Choose One:

#### ✅ APPROVE
**When:**
- All critical items pass
- No bugs or security issues
- Minor suggestions are optional
- Code ready to merge

**Example comment:**
```
Great work! Code looks solid. 

Minor suggestion: Consider adding a comment explaining 
the validation logic, but this is optional.

Approved! ✅
```

---

#### 💬 COMMENT (No Approval)
**When:**
- Want to provide feedback but not ready to approve/reject
- Asking questions
- Neutral observations
- Waiting for discussion

**Example comment:**
```
Thanks for the contribution!

I have a few questions about the approach:
1. Have you considered using a Set for faster lookups?
2. What happens if the array is empty?

Let's discuss before I approve.
```

---

#### 🔄 REQUEST CHANGES
**When:**
- Critical bug must be fixed
- Security vulnerability present
- Doesn't meet requirements
- Breaking changes without discussion

**Example comment:**
```
Thanks for working on this feature!

I noticed a critical issue on line 45: the password is 
stored in plain text, which is a security risk.

Please hash the password using bcrypt before storing.
I've added inline comments with example code.

Once this is addressed, happy to approve!
```

---

## INLINE COMMENT TIPS 💡

When adding comments on specific lines:

### Be Specific
```
❌ "This could be better"
✅ "Consider extracting this into a helper function to reduce repetition"
```

### Provide Context
```
❌ "Use const here"
✅ "This variable isn't reassigned, so we can use `const` instead of `let` 
    for immutability"
```

### Suggest, Don't Demand
```
❌ "Change this to a for loop"
✅ "Have you considered a for loop here? It might be more readable"
```

### Give Examples
```
"Consider adding validation:

if (guess < 1 || guess > 100) {
  console.log('Please enter a number between 1 and 100');
  return;
}

This handles the edge case where users enter out-of-range numbers."
```

---

## AFTER SUBMITTING REVIEW

### Follow Up
- [ ] Respond to developer's questions
- [ ] Re-review after changes made
- [ ] Mark conversations as "Resolved" when addressed
- [ ] Approve once all critical issues fixed

### Be Responsive
- Check GitHub notifications
- Don't leave developers waiting days
- If busy, acknowledge and give timeline

**Example:**
```
Thanks for addressing my feedback!

I'm reviewing your updates now and will respond by tomorrow morning.
```

---

## COMMON PITFALLS TO AVOID ⚠️

### Don't:
- ❌ Approve without actually reading code ("LGTM" syndrome)
- ❌ Be overly critical or harsh
- ❌ Focus only on negatives (always find positives too)
- ❌ Nitpick trivial style issues
- ❌ Demand changes without explaining why
- ❌ Leave vague comments ("this is confusing")
- ❌ Review your own PRs (get another set of eyes!)

### Do:
- ✅ Take time to understand the code
- ✅ Balance criticism with praise
- ✅ Explain reasoning behind suggestions
- ✅ Focus on important issues first
- ✅ Provide specific, actionable feedback
- ✅ Ask questions when unsure
- ✅ Be kind and professional

---

## REMEMBER:

> "Code review is not about finding fault.  
> It's about making good code great together."

### Code Review Benefits:
1. **Catches bugs** before production
2. **Shares knowledge** across team
3. **Maintains quality** standards
4. **Mentors** junior developers
5. **Improves** both reviewer and developer

---

## QUICK REFERENCE

**Review Workflow:**
1. Read PR description thoroughly
2. Check out code locally and test (if possible)
3. Review each changed file
4. Use this checklist
5. Leave inline comments on specific lines
6. Write summary review
7. Choose: Approve / Comment / Request Changes
8. Follow up on developer responses

**Professional Tone:**
- Start with positive observation
- Explain WHY suggestions matter
- Provide examples when helpful
- Ask questions instead of commanding
- End with encouragement

---

**Print this checklist or keep it open during code reviews!**
**Use it for LAB-04 and all future Sprint projects!**
