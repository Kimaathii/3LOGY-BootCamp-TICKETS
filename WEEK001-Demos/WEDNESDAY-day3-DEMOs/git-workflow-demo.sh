# Git Workflow Demo Script
# Week 1 Wednesday - Git & Version Control

# This is a step-by-step script for the live Git demonstration
# Instructor: Follow this during LAB 03

# =============================================================================
# PART 1: LOCAL REPOSITORY (20 MIN)
# =============================================================================

# Step 1: Create project folder
echo "Step 1: Creating project folder..."
mkdir my-first-repo
cd my-first-repo
pwd  # Verify location

# Step 2: Initialize Git repository
echo "Step 2: Initializing Git..."
git init
# Expected: "Initialized empty Git repository..."

# Step 3: Check status
echo "Step 3: Checking status..."
git status
# Should show: "On branch main", "No commits yet"

# Step 4: Create first file
echo "Step 4: Creating app.js..."
# (Switch to VS Code to create file)
# File content:
cat > app.js << 'EOF'
// My First Git Project
console.log("Hello, Git!");
EOF

# Step 5: Check status again
echo "Step 5: Status after creating file..."
git status
# Should show: Untracked files: app.js (in red)

# Step 6: Stage the file
echo "Step 6: Staging app.js..."
git add app.js

# Step 7: Check status
echo "Step 7: Status after staging..."
git status
# Should show: Changes to be committed: app.js (in green)

# Step 8: Configure Git (if not done)
echo "Step 8: Configuring Git..."
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Verify configuration
git config --global user.name
git config --global user.email

# Step 9: Make first commit
echo "Step 9: Making first commit..."
git commit -m "Add app.js with initial message"
# Should show: commit created with hash

# Step 10: Check status
echo "Step 10: Status after commit..."
git status
# Should show: "nothing to commit, working tree clean"

# Step 11: View history
echo "Step 11: Viewing commit history..."
git log
# Should show: One commit with details

# =============================================================================
# STUDENT PRACTICE: Modify & Commit (10 MIN)
# =============================================================================

# Practice Step 1: Modify app.js
echo "\n=== STUDENT PRACTICE ==="
echo "Modify app.js - add another console.log..."
cat >> app.js << 'EOF'
console.log("I'm learning Git!");
EOF

# Practice Step 2: Create goodbye.js
echo "Creating goodbye.js..."
cat > goodbye.js << 'EOF'
// Goodbye message
console.log("Goodbye, Git!");
EOF

# Practice Step 3: Stage both files
echo "Staging all changes..."
git add .

# Practice Step 4: Commit
echo "Committing both files..."
git commit -m "Add goodbye message and update app"

# Practice Step 5: View history
echo "Viewing updated history..."
git log --oneline  # Shorter format
# Should show 2 commits now

# =============================================================================
# PART 2: BRANCHING (15 MIN)
# =============================================================================

# Step 1: Check current branch
echo "\n=== BRANCHING DEMO ==="
echo "Step 1: Checking current branch..."
git branch
# Shows: * main

# Step 2: Create new branch
echo "Step 2: Creating feature branch..."
git branch feature-greeting

# Step 3: List branches
echo "Step 3: Listing all branches..."
git branch
# Shows: feature-greeting and * main

# Step 4: Switch to feature branch
echo "Step 4: Switching to feature branch..."
git checkout feature-greeting
# Or: git switch feature-greeting

# Step 5: Verify switch
echo "Step 5: Verifying current branch..."
git branch
# Shows: * feature-greeting

# Step 6: Make changes on branch
echo "Step 6: Modifying app.js on feature branch..."
cat > app.js << 'EOF'
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("What's your name? ", name => {
  console.log(`Hello, ${name}!`);
  readline.close();
});
EOF

# Step 7: Commit on feature branch
echo "Step 7: Committing feature..."
git add app.js
git commit -m "Add personalized greeting feature"

# Step 8: Switch back to main
echo "Step 8: Switching back to main..."
git checkout main

# Step 9: View app.js on main
echo "Step 9: Checking app.js on main branch..."
cat app.js
# Should show old version (no readline!)

# Step 10: Switch back to feature
echo "Step 10: Switching to feature again..."
git checkout feature-greeting
cat app.js
# Should show readline version!

# Step 11: Merge feature into main
echo "Step 11: Merging feature into main..."
git checkout main
git merge feature-greeting

# Step 12: Verify merge
echo "Step 12: Checking app.js after merge..."
cat app.js
# Should now have readline version on main!

# =============================================================================
# STUDENT PRACTICE: Create & Merge Branch (10 MIN)
# =============================================================================

echo "\n=== STUDENT PRACTICE: BRANCHING ==="

# Create fix-typo branch
git branch fix-typo
git checkout fix-typo

# Add comment to app.js
sed -i '1s/^/\/\/ Created during bootcamp\n/' app.js

# Commit the change
git commit -am "Add creation comment"

# Switch to main
git checkout main

# Verify comment is gone
cat app.js | head -1

# Merge fix-typo into main
git merge fix-typo

# Verify comment is back
cat app.js | head -1

# =============================================================================
# PART 3: GITHUB (REMOTE) (15 MIN)
# =============================================================================

echo "\n=== GITHUB REMOTE DEMO ==="

# NOTE: Students must create repo on GitHub.com first!
# Repository name: my-first-repo
# Do NOT initialize with README

# Step 1: Add remote
echo "Step 1: Adding GitHub remote..."
# Replace YOUR_USERNAME with actual username
git remote add origin https://github.com/YOUR_USERNAME/my-first-repo.git

# Step 2: Verify remote
echo "Step 2: Verifying remote connection..."
git remote -v
# Should show origin with fetch and push URLs

# Step 3: Rename branch to main (if needed)
echo "Step 3: Ensuring branch is named 'main'..."
git branch -M main

# Step 4: Push to GitHub
echo "Step 4: Pushing to GitHub..."
git push -u origin main
# Will prompt for GitHub credentials

echo "\n✅ SUCCESS! Code is on GitHub!"
echo "Visit: https://github.com/YOUR_USERNAME/my-first-repo"

# =============================================================================
# ADDITIONAL USEFUL COMMANDS
# =============================================================================

echo "\n=== ADDITIONAL COMMANDS (REFERENCE) ==="

# Show simplified log
echo "Simplified log:"
git log --oneline

# Show log with graph
echo "Log with branch graph:"
git log --oneline --graph --all

# Show what changed in last commit
echo "What changed in last commit:"
git show

# List all branches (including remote)
echo "All branches:"
git branch -a

# Delete a branch
echo "Delete branch (after merge):"
git branch -d feature-greeting

# Undo staging (before commit)
echo "Unstage file:"
git restore --staged <file>

# See changes not yet staged
echo "View unstaged changes:"
git diff

# See changes staged for commit  
echo "View staged changes:"
git diff --staged

# =============================================================================
# TROUBLESHOOTING COMMON ISSUES
# =============================================================================

echo "\n=== TROUBLESHOOTING ==="

# If git not found
echo "If 'git: command not found':"
echo "→ Install Git from https://git-scm.com/downloads"

# If authentification fails
echo "If GitHub password doesn't work:"
echo "→ Need Personal Access Token"
echo "→ GitHub Settings → Developer Settings → Personal Access Tokens"
echo "→ Generate token with 'repo' scope"
echo "→ Use token as password"

# If wrong remote URL
echo "If added wrong remote URL:"
echo "→ git remote remove origin"
echo "→ git remote add origin CORRECT_URL"

# If need to update remote URL
echo "If need to change remote URL:"
echo "→ git remote set-url origin NEW_URL"

echo "\n=== DEMO SCRIPT COMPLETE ==="
echo "Students should now have:"
echo "✅ Local Git repository with commits"
echo "✅ Experience with branching and merging"
echo "✅ Code pushed to GitHub"
echo "✅ Understanding of Git workflow"
