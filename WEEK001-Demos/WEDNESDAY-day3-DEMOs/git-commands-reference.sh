# Git Commands Quick Reference
# Week 1 Wednesday - Git Workshop

# This is a reference sheet for students during the hands-on lab
# Keep this open while working through Git exercises

# =============================================================================
# CONFIGURATION (One-time setup)
# =============================================================================

# Set your name (appears in commits)
git config --global user.name "Your Name"

# Set your email (appears in commits)
git config --global user.email "your.email@example.com"

# Check your configuration
git config --global user.name
git config --global user.email

# List all configuration
git config --list

# =============================================================================
# STARTING A REPOSITORY
# =============================================================================

# Initialize Git in current folder
git init

# Clone existing repository from GitHub
git clone https://github.com/username/repo-name.git

# =============================================================================
# BASIC WORKFLOW
# =============================================================================

# Check status of your repository
git status

# Stage specific file
git add filename.js

# Stage all changes
git add .

# Commit staged changes
git commit -m "Your descriptive message"

# Stage and commit in one command (only for modified files, not new files)
git commit -am "Your message"

# View commit history
git log

# View simplified history
git log --oneline

# =============================================================================
# BRANCHING
# =============================================================================

# List all branches (* shows current)
git branch

# Create new branch
git branch branch-name

# Switch to branch
git checkout branch-name

# Create and switch in one command
git checkout -b branch-name

# Modern way to switch branches
git switch branch-name

# Merge branch into current branch
git merge branch-name

# Delete branch (after merging)
git branch -d branch-name

# Force delete branch (even if not merged)
git branch -D branch-name

# =============================================================================
# REMOTE REPOSITORIES (GitHub)
# =============================================================================

# Add remote repository
git remote add origin https://github.com/username/repo.git

# View remotes
git remote -v

# Push to remote (first time)
git push -u origin main

# Push to remote (after first time)
git push

# Pull latest changes from remote
git pull

# Fetch changes without merging
git fetch

# =============================================================================
# VIEWING CHANGES
# =============================================================================

# See unstaged changes
git diff

# See staged changes
git diff --staged

# Show details of last commit
git show

# Show log with branch graph
git log --oneline --graph --all

# =============================================================================
# UNDOING CHANGES
# =============================================================================

# Unstage file (keep changes)
git restore --staged filename.js

# Discard changes in working directory
git restore filename.js

# Undo last commit (keep changes staged)
git reset --soft HEAD~1

# Undo last commit (unstage but keep changes)
git reset HEAD~1

# Undo last commit (DISCARD changes)
git reset --hard HEAD~1

# =============================================================================
# USEFUL COMMANDS
# =============================================================================

# Create .gitignore file
echo "node_modules/" >> .gitignore

# Remove file from Git but keep locally
git rm --cached filename.js

# Rename or move file
git mv old-name.js new-name.js

# Show who changed each line
git blame filename.js

# Search commit messages
git log --grep="search term"

# Create tag for version
git tag v1.0.0

# =============================================================================
# GETTING HELP
# =============================================================================

# Help for specific command
git help <command>
git <command> --help

# Example
git help commit

# =============================================================================
# COMMON WORKFLOWS
# =============================================================================

# Daily workflow:
git status                    # See what changed
git add .                     # Stage changes
git commit -m "Description"   # Commit
git push                      # Upload to GitHub

# Feature branch workflow:
git checkout -b feature-name  # Create feature branch
# ... make changes ...
git add .
git commit -m "Add feature"
git checkout main             # Switch to main
git merge feature-name        # Merge feature
git push                      # Push to GitHub

# Fix mistake workflow:
git status                    # See current state
git log --oneline             # Find commit to undo
git reset HEAD~1              # Undo last commit
# ... fix the issue ...
git add .
git commit -m "Fixed version"

# =============================================================================
# TIPS & BEST PRACTICES
# =============================================================================

# ✅ DO:
# - Commit often (small, focused commits)
# - Write clear commit messages
# - Pull before you push
# - Use branches for features
# - Keep main branch working

# ❌ DON'T:
# - Commit broken code to main
# - Use vague messages ("fix stuff")
# - Commit large binary files
# - Commit passwords or secrets
# - Work directly on main for features

# =============================================================================
# KEYBOARD SHORTCUTS (Git Log)
# =============================================================================

# When viewing git log:
# SPACE    - Next page
# b        - Previous page
# q        - Quit/exit
# /text    - Search for "text"

# =============================================================================

# Remember: git status is your friend!
# When in doubt, check git status to see what's happening.

# Need more help?
# - Git Documentation: https://git-scm.com/doc
# - GitHub Guides: https://guides.github.com/
# - Bootcamp cheat sheet: RESOURCES/CHEAT-SHEETS/git-commands.md
