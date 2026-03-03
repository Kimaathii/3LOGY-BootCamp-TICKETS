# PULL REQUEST WORKFLOW GUIDE
# Week 1 Thursday - Git Collaboration

Complete step-by-step guide to forking, creating PRs, and collaborating on GitHub.

---

## OVERVIEW

This is the professional workflow used by development teams at Google, Facebook, and every tech company.

**Workflow:**
```
Fork → Clone → Branch → Edit → Commit → Push → Pull Request → Review → Merge
```

---

## PART 1: FORK & CLONE

### Step 1: Fork the Repository

**On GitHub.com:**
1. Navigate to the repository you want to contribute to
   Example: `https://github.com/partner-username/lab-02`

2. Click the **"Fork"** button (top right corner)

3. GitHub creates YOUR copy of the repository
   - Original: `github.com/partner-username/lab-02`
   - Your fork: `github.com/YOUR-USERNAME/lab-02`

**What forking does:**
- Creates independent copy you own
- You can make changes without affecting original
- Changes stay in your fork until you create PR

---

### Step 2: Clone Your Fork

**In Terminal:**
```bash
# Navigate to your bootcamp folder
cd ~/Desktop/bootcamp

# Clone YOUR fork (not the original repo!)
git clone https://github.com/YOUR-USERNAME/lab-02.git

# Navigate into cloned repository
cd lab-02

# Verify you're in the right place
pwd
git remote -v
```

**Expected output from `git remote -v`:**
```
origin  https://github.com/YOUR-USERNAME/lab-02.git (fetch)
origin  https://github.com/YOUR-USERNAME/lab-02.git (push)
```

**Note:** `origin` points to YOUR fork, not original repo.

---

### Step 3: (Optional) Add Upstream Remote

If you want to keep your fork updated with original repo:

```bash
# Add original repo as "upstream"
git remote add upstream https://github.com/partner-username/lab-02.git

# Verify remotes
git remote -v
```

**Now you'll see:**
```
origin    https://github.com/YOUR-USERNAME/lab-02.git (fetch)
origin    https://github.com/YOUR-USERNAME/lab-02.git (push)
upstream  https://github.com/partner-username/lab-02.git (fetch)
upstream  https://github.com/partner-username/lab-02.git (push)
```

**Pull latest from original repo:**
```bash
git pull upstream main
```

---

## PART 2: CREATE FEATURE BRANCH

### Step 4: Create Branch for Your Work

**Never work directly on main when collaborating!**

```bash
# Create and switch to new branch
git checkout -b add-input-validation

# OR using modern syntax:
git switch -c add-input-validation
```

**Branch naming conventions:**
```
Good branch names:
✅ add-input-validation
✅ fix-crash-on-empty-input
✅ feature-play-again
✅ refactor-validation-logic

Bad branch names:
❌ fix
❌ changes
❌ test
❌ my-branch
```

**Verify you're on the right branch:**
```bash
git branch
# * add-input-validation  ← asterisk shows current branch
#   main
```

---

## PART 3: MAKE CHANGES

### Step 5: Implement Your Feature

**Open project in VS Code:**
```bash
code .
```

**Make your changes:**
- Edit files
- Add new features
- Fix bugs
- Improve code quality

**Example: Adding input validation**

**Before:**
```javascript
// guessing-game.js
readline.question("Enter your guess: ", guess => {
  if (parseInt(guess) === secretNumber) {
    console.log("You win!");
  }
});
```

**After (with validation):**
```javascript
// guessing-game.js
readline.question("Enter your guess: ", guess => {
  // Validate input
  const parsedGuess = parseInt(guess);
  
  if (isNaN(parsedGuess)) {
    console.log("Error: Please enter a valid number");
    return;
  }
  
  if (parsedGuess < 1 || parsedGuess > 100) {
    console.log("Error: Number must be between 1 and 100");
    return;
  }
  
  // Check guess
  if (parsedGuess === secretNumber) {
    console.log("You win!");
  }
});
```

---

### Step 6: Test Your Changes

**Run the program:**
```bash
node guessing-game.js
```

**Test thoroughly:**
- [ ] Valid inputs (numbers 1-100)
- [ ] Invalid inputs (letters, symbols)
- [ ] Edge cases (empty input, very large numbers)
- [ ] Original functionality still works

**Don't commit broken code!**

---

## PART 4: COMMIT & PUSH

### Step 7: Stage Your Changes

```bash
# Check what changed
git status

# Stage specific file
git add guessing-game.js

# OR stage all changes
git add .
```

---

### Step 8: Commit with Clear Message

```bash
git commit -m "Add input validation to handle non-numeric guesses"
```

**Good commit message structure:**
```
Format: [Action] + [What] + [Optional: Why]

Good examples:
✅ "Add input validation to prevent crashes"
✅ "Fix bug where empty input caused error"
✅ "Implement play-again feature for better UX"
✅ "Refactor validation logic into separate function"

Bad examples:
❌ "Fix"
❌ "Update file"
❌ "Changes"
❌ "asdfasdf"
```

**For larger changes, use multi-line message:**
```bash
git commit -m "Add input validation to guessing game

- Validate input is a number using parseInt/isNaN
- Check input is within 1-100 range
- Display helpful error messages
- Prevents crashes from invalid input"
```

---

### Step 9: Push to Your Fork

```bash
# Push branch to YOUR fork on GitHub
git push origin add-input-validation
```

**Expected output:**
```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
...
remote: 
remote: Create a pull request for 'add-input-validation' on GitHub by visiting:
remote:      https://github.com/YOUR-USERNAME/lab-02/pull/new/add-input-validation
remote: 
To https://github.com/YOUR-USERNAME/lab-02.git
 * [new branch]      add-input-validation -> add-input-validation
```

**Note the URL** - you can click it to create PR immediately!

---

## PART 5: CREATE PULL REQUEST

### Step 10: Open Pull Request on GitHub

**Option A: Use link from git push output**
- Click the link from previous step

**Option B: Navigate manually**
1. Go to **ORIGINAL repository** (partner's repo, not your fork!)
   `https://github.com/partner-username/lab-02`

2. GitHub shows banner:
   ```
   add-input-validation had recent pushes
   [Compare & pull request]
   ```

3. Click **"Compare & pull request"**

---

### Step 11: Fill in PR Description

**PR Title:**
```
Add input validation to guessing game
```

**PR Description (use template):**
```markdown
## What I Changed
Added input validation to handle non-numeric and out-of-range guesses

## Why This Improves the Project
Previously, entering letters or invalid numbers caused the program to crash 
or behave unexpectedly. This validation provides better user experience and 
prevents crashes.

## How It Works
- Uses `parseInt()` and `isNaN()` to check if input is a valid number
- Validates the number is within the 1-100 range
- Displays clear error messages for invalid input
- Original game logic unchanged

## Testing Performed
- [x] Tested with valid numbers (1-100)
- [x] Tested with invalid inputs (letters, symbols)
- [x] Tested with empty string (pressing Enter)
- [x] Tested with out-of-range numbers (-5, 150)
- [x] Tested with decimal numbers (3.14)
- [x] Confirmed no errors or crashes
- [x] Original win/lose logic still works

## Screenshots / Output
```
$ node guessing-game.js
Enter your guess: abc
Error: Please enter a valid number
Enter your guess: 150
Error: Number must be between 1 and 100
Enter your guess: 50
Too high! Try again.
```
```

---

### Step 12: Create the PR

1. Review the description one more time
2. Check **"Files changed"** tab to verify correct files
3. Ensure PR is going to correct repository (partner's, not yours!)
4. Click **"Create pull request"**

**Success!** PR is now open for review.

---

## PART 6: RESPOND TO CODE REVIEW

### Step 13: Receive Feedback

Your partner will review your code and might:
- ✅ **Approve** - Code looks good, ready to merge
- 💬 **Comment** - Questions or suggestions
- 🔄 **Request Changes** - Issues need fixing before merge

**Example review comment:**
```
Great validation! One suggestion:

Line 15: The error message could be more specific.
Instead of "Error: Please enter a valid number"
Consider: "Error: Please enter a number between 1 and 100"

This tells users exactly what's expected.
```

---

### Step 14: Address Feedback

**Make requested changes locally:**

```bash
# Make sure you're on feature branch
git checkout add-input-validation

# Edit the file
code guessing-game.js
# Update line 15 with more specific error message

# Test changes
node guessing-game.js

# Stage and commit
git add guessing-game.js
git commit -m "Improve error message clarity based on code review"

# Push to same branch
git push origin add-input-validation
```

**PR updates automatically!** (GitHub is smart)

---

### Step 15: Respond to Review Comments

**On GitHub PR page:**
1. Find reviewer's comment
2. Click **"Reply"**
3. Explain changes you made

**Example response:**
```
Thanks for the feedback!

I've updated the error message to be more specific. Now it tells users 
exactly what range is expected.

Changes pushed - please review again when you have a chance!
```

4. Click **"Resolve conversation"** (if issue is fully addressed)

---

## PART 7: MERGE

### Step 16: Get Approval

Once reviewer approves:
- ✅ Green checkmark appears
- "Approved" status shown
- Ready to merge!

---

### Step 17: Merge Pull Request

**Repository owner (partner) will:**
1. Click **"Merge pull request"**
2. Confirm merge
3. Delete branch (optional but recommended)

**Or if you have permission:**
- Click **"Merge pull request"** yourself
- Choose merge type:
  - **Create merge commit** (default, recommended for learning)
  - Squash and merge (combines all commits into one)
  - Rebase and merge (applies commits one-by-one)

4. Click **"Confirm merge"**

**Success message:**
```
Pull request successfully merged and closed
```

---

### Step 18: Clean Up

**On your local machine:**

```bash
# Switch back to main
git checkout main

# Pull latest changes (includes your merged PR!)
git pull origin main

# Delete feature branch (no longer needed)
git branch -d add-input-validation

# Delete remote branch
git push origin --delete add-input-validation
```

**Start fresh for next feature!**

---

## QUICK REFERENCE

### Fork & Clone Workflow
```bash
# On GitHub: Click Fork button
git clone https://github.com/YOUR-USERNAME/repo.git
cd repo
git checkout -b feature-name
# Make changes
git add .
git commit -m "Clear message"
git push origin feature-name
# On GitHub: Create Pull Request
```

### Update Fork with Original
```bash
git remote add upstream https://github.com/original-owner/repo.git
git pull upstream main
git push origin main
```

### Address Code Review
```bash
# Make requested changes
git add .
git commit -m "Address code review feedback"
git push origin feature-name
# PR updates automatically
```

### After Merge
```bash
git checkout main
git pull origin main
git branch -d feature-name
```

---

## TROUBLESHOOTING

### "I forked but can't push"
**Problem:** You cloned original repo, not your fork  
**Solution:**
```bash
git remote -v  # Check current remote
git remote set-url origin https://github.com/YOUR-USERNAME/repo.git
```

### "PR went to my fork instead of original"
**Problem:** Wrong base repository selected  
**Solution:** Close PR and create new one pointing to correct repo

### "I don't see partner's PR"
**Problem:** Looking at fork instead of original  
**Solution:** Go to YOUR original repo (not your fork of partner's)

### "Merge conflict!"
**Solution:** See MERGE-CONFLICT-RESOLUTION.md (coming in Week 2)

---

## BEST PRACTICES

### Do:
- ✅ Fork before contributing to others' repos
- ✅ Create feature branch for each change
- ✅ Write descriptive commit messages
- ✅ Test thoroughly before pushing
- ✅ Fill in complete PR description
- ✅ Respond to code review promptly
- ✅ Keep PRs focused (one feature per PR)

### Don't:
- ❌ Push directly to main when collaborating
- ❌ Create PR with vague description
- ❌ Commit broken code
- ❌ Ignore code review feedback
- ❌ Mix multiple unrelated changes in one PR
- ❌ Commit sensitive data (passwords, API keys)

---

## REMOTE REPOSITORY DIAGRAM

```
┌─────────────────────────────────────────────────────────┐
│              REMOTE REPOSITORY SETUP                     │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Original Repo (partner's):                             │
│  github.com/partner/lab-02                              │
│         ↑                                                │
│         │ (You create PR here)                          │
│         │                                                │
│  Your Fork:                                              │
│  github.com/you/lab-02                                  │
│         ↑                                                │
│         │ (You push here)                               │
│         │                                                │
│  Local Clone:                                            │
│  ~/Desktop/bootcamp/lab-02                              │
│  (You work here)                                         │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

**This is the professional Git collaboration workflow!  
You'll use this in every Sprint project!**
