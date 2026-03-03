# MERGE CONFLICT EXAMPLES & RESOLUTION
# Week 1 Thursday - Git Collaboration

Understanding and resolving merge conflicts.

---

## WHAT IS A MERGE CONFLICT?

A merge conflict happens when:
- Two people edit the **SAME line** of the **SAME file**
- Both try to merge their changes
- Git can't automatically decide which version to keep

**Important:** This is NORMAL and happens all the time in professional development!

---

## SIMPLE EXAMPLE

### Scenario:

**Starting file (app.js on main branch):**
```javascript
const name = "Bootcamp";
console.log("Hello, " + name);
console.log("Welcome to Git!");
```

**Developer A (on branch `update-greeting`):**
```javascript
const name = "Bootcamp";
console.log("Good morning, " + name);  // ← Changed line 2
console.log("Welcome to Git!");
```

**Developer B (on branch `personalize-message`):**
```javascript
const name = "Bootcamp";
console.log("Hello, " + name + "! Ready to code?");  // ← Also changed line 2
console.log("Welcome to Git!");
```

### What Happens:
1. Developer A merges first → No problem ✅
2. Developer B tries to merge → **CONFLICT!** ⚠️

Git doesn't know which version of line 2 to keep.

---

## WHAT A CONFLICT LOOKS LIKE

After attempting to merge, Git marks the conflict in the file:

```javascript
const name = "Bootcamp";
<<<<<<< HEAD
console.log("Good morning, " + name);
=======
console.log("Hello, " + name + "! Ready to code?");
>>>>>>> personalize-message
console.log("Welcome to Git!");
```

### Understanding the Markers:

```
<<<<<<< HEAD
   ↑ Start of CURRENT branch (what's already in target branch)

Your current code version

=======
   ↑ Separator between the two versions

Incoming code version (from branch being merged)

>>>>>>> feature-branch
   ↑ End of INCOMING branch (what's trying to be merged in)
```

---

## CONFLICT MARKERS EXPLAINED

### Visual Breakdown:

```javascript
// Regular code (no conflict)
const name = "Bootcamp";

// CONFLICT STARTS HERE ↓
<<<<<<< HEAD                          // Marker: Start of current version
console.log("Good morning, " + name); // Current branch version
=======                               // Marker: Separator
console.log("Hello, " + name + "! Ready to code?"); // Incoming version
>>>>>>> personalize-message          // Marker: End of incoming version
// CONFLICT ENDS HERE ↑

// Regular code continues (no conflict)
console.log("Welcome to Git!");
```

---

## RESOLVING THE CONFLICT

### Step 1: Identify the Conflict

```bash
# Git tells you there's a conflict
git merge feature-branch

# Output:
Auto-merging app.js
CONFLICT (content): Merge conflict in app.js
Automatic merge failed; fix conflicts and then commit the result.
```

```bash
# Check status
git status

# Output shows:
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  both modified:   app.js
```

---

### Step 2: Open the Conflicted File

```bash
code app.js
```

**You'll see:**
```javascript
const name = "Bootcamp";
<<<<<<< HEAD
console.log("Good morning, " + name);
=======
console.log("Hello, " + name + "! Ready to code?");
>>>>>>> personalize-message
console.log("Welcome to Git!");
```

---

### Step 3: Decide How to Resolve

You have **4 options:**

#### Option 1: Keep CURRENT version (HEAD)
```javascript
const name = "Bootcamp";
console.log("Good morning, " + name);  // Kept this one
console.log("Welcome to Git!");
```

#### Option 2: Keep INCOMING version (branch)
```javascript
const name = "Bootcamp";
console.log("Hello, " + name + "! Ready to code?");  // Kept this one
console.log("Welcome to Git!");
```

#### Option 3: Keep BOTH (combine)
```javascript
const name = "Bootcamp";
console.log("Good morning, " + name);  // Kept both!
console.log("Hello, " + name + "! Ready to code?");
console.log("Welcome to Git!");
```

#### Option 4: Write SOMETHING NEW
```javascript
const name = "Bootcamp";
console.log("Good morning, " + name + "! Ready to code?");  // Combined ideas
console.log("Welcome to Git!");
```

---

### Step 4: Remove Conflict Markers

**IMPORTANT:** You MUST remove these markers:
- `<<<<<<< HEAD`
- `=======`
- `>>>>>>> branch-name`

**Bad (will cause syntax error):**
```javascript
<<<<<<< HEAD
console.log("Good morning, " + name);
=======
```
This is not valid JavaScript!

**Good (conflict resolved):**
```javascript
console.log("Good morning, " + name + "! Ready to code?");
```

---

### Step 5: Test the Code

```bash
# Make sure code runs!
node app.js
```

If it works, you resolved correctly! ✅

---

### Step 6: Commit the Resolution

```bash
# Stage the resolved file
git add app.js

# Commit the merge
git commit -m "Resolve merge conflict in app.js greeting message"

# Or just:
git commit
# (Git will auto-fill merge commit message)
```

**Conflict resolved!** ✅

---

## CONFLICT RESOLUTION IN VS CODE

VS Code has built-in conflict resolution UI:

### Visual Indicators:

When you open conflicted file in VS Code:

```javascript
const name = "Bootcamp";
[ Accept Current Change | Accept Incoming Change | Accept Both Changes | Compare Changes ]
<<<<<<< HEAD
console.log("Good morning, " + name);
=======
console.log("Hello, " + name + "! Ready to code?");
>>>>>>> personalize-message
console.log("Welcome to Git!");
```

### Buttons:
- **Accept Current Change** - Keep HEAD version
- **Accept Incoming Change** - Keep branch version
- **Accept Both Changes** - Keep both (one after the other)
- **Compare Changes** - See side-by-side diff

**Click the option you want** → Conflict markers removed automatically! 🎉

---

## MULTIPLE CONFLICTS IN ONE FILE

Sometimes one file has multiple conflicts:

```javascript
const name = "Bootcamp";

// Conflict #1
<<<<<<< HEAD
console.log("Good morning, " + name);
=======
console.log("Hello, " + name);
>>>>>>> feature

// Some regular code
const year = 2026;

// Conflict #2
<<<<<<< HEAD
console.log("Year: " + year);
=======
console.log("Current year is: " + year);
>>>>>>> feature

// More regular code
console.log("End of program");
```

**Resolve each conflict separately:**
1. Fix conflict #1
2. Fix conflict #2
3. Remove ALL markers
4. Test code
5. Commit

---

## CONFLICTS ACROSS MULTIPLE FILES

```bash
# Merge attempt shows:
CONFLICT (content): Merge conflict in app.js
CONFLICT (content): Merge conflict in utils.js
CONFLICT (content): Merge conflict in README.md
```

**Resolve each file:**
1. Open app.js → resolve → save
2. Open utils.js → resolve → save
3. Open README.md → resolve → save
4. Stage all resolved files:
   ```bash
   git add app.js utils.js README.md
   ```
5. Commit:
   ```bash
   git commit -m "Resolve merge conflicts in app, utils, and README"
   ```

---

## ABORTING A MERGE

If you don't want to deal with conflicts right now:

```bash
# Cancel the merge and go back to before merge attempt
git merge --abort
```

Everything returns to state before `git merge` command.

**Use when:**
- Conflicts are too complex right now
- You need to talk to team first
- You merged the wrong branch by mistake

---

## PREVENTING CONFLICTS

### Best Practices:

1. **Pull frequently**
   ```bash
   git pull origin main
   ```
   Stay updated with team changes

2. **Keep feature branches short-lived**
   - Work on feature
   - Merge quickly
   - Don't let branches diverge for weeks

3. **Communicate with team**
   - "I'm editing auth.js, lines 50-100"
   - Team can avoid editing same lines

4. **Work on different files when possible**
   - Less likely to conflict

5. **Merge main into your branch regularly**
   ```bash
   git checkout my-feature
   git merge main
   # Resolve conflicts in YOUR branch
   # Then PR to main is clean
   ```

---

## CONFLICT SCENARIOS

### Scenario 1: Both Added Same File

**Developer A adds:** `config.json`  
**Developer B adds:** `config.json` (different content)

**Conflict:**
```
both added:   config.json
```

**Resolution:** Decide which version to keep or merge contents

---

### Scenario 2: One Deleted, One Modified

**Developer A:** Deletes `old-utils.js`  
**Developer B:** Edits `old-utils.js`

**Conflict:**
```
deleted by us:   old-utils.js
modified by them: old-utils.js
```

**Resolution:** Decide if file should be deleted or kept with modifications

---

### Scenario 3: Different Changes to Same Function

**Developer A:**
```javascript
function greet(name) {
  return "Hello, " + name + "!";
}
```

**Developer B:**
```javascript
function greet(name) {
  return `Hi ${name}, welcome!`;
}
```

**Conflict:** Both changed same function signature and body

**Resolution:** Decide on one approach or combine features from both

---

## PRACTICE SCENARIOS

### Practice 1: Simple Greeting Conflict

**Your version:**
```javascript
console.log("Good morning!");
```

**Their version:**
```javascript
console.log("Hello there!");
```

**Task:** Resolve to output both greetings

**Solution:**
```javascript
console.log("Good morning!");
console.log("Hello there!");
```

---

### Practice 2: Variable Declaration Conflict

**Your version:**
```javascript
const MAX_ATTEMPTS = 10;
```

**Their version:**
```javascript
const MAX_ATTEMPTS = 5;
```

**Task:** Decide which limit makes sense for the game

**Solution (example):**
```javascript
const MAX_ATTEMPTS = 10;  // Using higher limit for better UX
```

---

### Practice 3: Function Implementation Conflict

**Your version:**
```javascript
function calculateTotal(price) {
  return price * 1.08;  // 8% tax
}
```

**Their version:**
```javascript
function calculateTotal(price, tax) {
  return price + tax;
}
```

**Task:** Combine to accept tax as parameter with 8% default

**Solution:**
```javascript
function calculateTotal(price, tax = price * 0.08) {
  return price + tax;
}
```

---

## CHECKING FOR CONFLICTS BEFORE MERGING

### Check if merge will conflict (dry run):

```bash
# See if merge would cause conflicts WITHOUT actually merging
git merge --no-commit --no-ff feature-branch

# If conflicts appear, resolve them
# If no conflicts:
git merge --abort  # Cancel the test merge
```

---

## CONFLICT RESOLUTION WORKFLOW

```
1. Attempt merge
   git merge feature-branch

2. Conflict detected
   CONFLICT (content): Merge conflict in file.js

3. Check which files have conflicts
   git status

4. Open each conflicted file
   code file.js

5. Find conflict markers
   <<<<<<< HEAD ... ======= ... >>>>>>>

6. Decide resolution (keep current, incoming, both, or new)

7. Remove ALL conflict markers

8. Test code
   node file.js

9. Stage resolved files
   git add file.js

10. Commit merge
    git commit -m "Resolve merge conflict in file.js"

11. Push (if needed)
    git push origin main
```

---

## COMMON MISTAKES

### Mistake 1: Leaving Conflict Markers
```javascript
// ❌ BAD - This will cause syntax error!
<<<<<<< HEAD
console.log("Hello");
=======
console.log("Hi");
>>>>>>> feature
```

**Fix:** Remove markers!

---

### Mistake 2: Not Testing After Resolving
```javascript
// Resolved to:
console.log("Hello" + name;  // Missing closing parenthesis!
```

**Fix:** Always run code after resolving!

---

### Mistake 3: Accepting Wrong Version
```javascript
// Accidentally kept old version with bug
// instead of fixed version from other branch
```

**Fix:** Read both versions carefully before choosing!

---

## MERGE CONFLICT CHECKLIST

When resolving conflicts:

- [ ] Identified all conflicted files (`git status`)
- [ ] Opened each file
- [ ] Found all conflict markers in each file
- [ ] Decided on resolution (current, incoming, both, new)
- [ ] Removed ALL `<<<<<<<`, `=======`, `>>>>>>>` markers
- [ ] Tested code - runs without errors
- [ ] Code makes logical sense (not broken logic)
- [ ] Staged resolved files (`git add`)
- [ ] Committed merge (`git commit`)
- [ ] Checked `git status` - clean working tree

---

## RESOURCES

- [Git Merge Conflicts Docs](https://git-scm.com/docs/git-merge#_how_conflicts_are_presented)
- [VS Code Merge Conflict Help](https://code.visualstudio.com/docs/sourcecontrol/overview#_merge-conflicts)

---

## REMEMBER:

> **Merge conflicts are NOT errors - they're decisions!**

Git is asking: "Two people changed the same thing. Which version should we keep?"

You decide, then tell Git by:
1. Removing markers
2. Keeping desired code
3. Committing resolution

**You'll get comfortable with conflicts quickly - they're part of daily development!**

---

**Practice conflicts in a safe environment before Sprint projects!**
**Week 2: More merge conflict practice with pair programming!**
