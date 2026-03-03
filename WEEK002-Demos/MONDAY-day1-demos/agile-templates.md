# AGILE SCRUM ARTIFACTS & TEMPLATES
# Week 2 Monday - SDLC & Agile

Templates and examples for Scrum events and artifacts.

---

## SPRINT PLANNING TEMPLATE

```markdown
# SPRINT PLANNING - [Project Name]

## Sprint Information
**Sprint Number:** 01
**Duration:** 2 weeks (Feb 24 - Mar 9, 2026)
**Team:** [Team Member Names]

## Sprint Goal
[One sentence describing what you'll accomplish]
Example: "Users can create, view, and manage basic tasks"

## Product Backlog (All Features)
Priority | User Story | Story Points
---------|------------|-------------
MUST     | As a user, I want to create tasks | 3
MUST     | As a user, I want to view all tasks | 2
SHOULD   | As a user, I want to mark tasks complete | 3
SHOULD   | As a user, I want to delete tasks | 2
COULD    | As a user, I want to edit tasks | 5
COULD    | As a user, I want to set priorities | 5
WON'T    | As a user, I want email reminders | 8

## Sprint Backlog (Committed for This Sprint)
Ticket # | Description | Story Points | Assignee | Status
---------|-------------|--------------|----------|--------
#1       | Create task feature | 3 | Alice | Not Started
#2       | View all tasks | 2 | Bob | Not Started
#3       | Mark task complete | 3 | Alice | Not Started
#4       | Delete task | 2 | Bob | Not Started

**Total Sprint Points:** 10
**Team Velocity:** 8-12 points per sprint

## Definition of Done
- [ ] Code written and tested
- [ ] Committed to Git with clear messages
- [ ] README updated
- [ ] Peer code review completed
- [ ] Demo-ready

## Notes
[Any assumptions, dependencies, or risks]
```

---

## DAILY STANDUP TRACKER

```markdown
# DAILY STANDUP LOG - Sprint 01

## Monday, Feb 24, 2026

### Alice
**Yesterday:** Set up project repository, initialized Git
**Today:** Start implementing create task feature
**Blockers:** None

### Bob
**Yesterday:** Weekend - reviewed JavaScript documentation
**Today:** Design view all tasks interface
**Blockers:** None

---

## Tuesday, Feb 25, 2026

### Alice
**Yesterday:** Implemented create task, 50% done
**Today:** Complete create task, write tests
**Blockers:** Need clarification on task data structure

### Bob
**Yesterday:** Designed task list view
**Today:** Implement view all tasks feature
**Blockers:** None

[Continue for each day of sprint...]
```

---

## SPRINT RETROSPECTIVE TEMPLATE

```markdown
# SPRINT RETROSPECTIVE - Sprint 01

## Sprint Summary
**Completed:** 9 story points
**Committed:** 10 story points
**Velocity:** 90%

## What Went Well? ✅
- Great Git workflow, minimal merge conflicts
- Clear communication during standups
- Pair programming helped solve tough bugs
- Everyone contributed equally

## What Could Improve? 🔄
- Story point estimates were optimistic
- Needed more time for testing
- Should have broken tickets into smaller tasks
- Documentation was rushed at end

## Action Items for Next Sprint 💡
1. Reduce sprint commitment by 20% until velocity stabilizes
2. Allocate last day of sprint for testing/documentation
3. Break tickets >5 points into subtasks
4. Do code reviews mid-sprint, not just at end

## Appreciation Shoutouts 🎉
- Thanks to Alice for helping debug my code!
- Bob's README writing skills are awesome!
- Team stayed positive even when feature was harder than expected

**Facilitator Notes:** [Instructor observations]
```

---

## SPRINT REVIEW / DEMO TEMPLATE

```markdown
# SPRINT REVIEW - Sprint 01

## Date & Attendees
**Date:** March 9, 2026
**Attendees:** Development Team, Product Owner, Stakeholders

## Sprint Goal Review
**Goal:** "Users can create, view, and manage basic tasks"
**Status:** ✅ ACHIEVED

## Completed Work Demo

### Feature 1: Create Task
**Demo Steps:**
1. Run application
2. Select "Create Task"
3. Enter task details
4. Confirm task added to list

**Status:** ✅ Complete and working

### Feature 2: View All Tasks
**Demo Steps:**
1. View task list
2. Show multiple tasks display correctly
3. Demonstrate empty state message

**Status:** ✅ Complete and working

### Feature 3: Mark Task Complete
**Demo Steps:**
1. Select task
2. Mark as complete
3. Show completed status (strikethrough or checkmark)

**Status:** ✅ Complete and working

### Feature 4: Delete Task
**Demo Steps:**
1. Select task
2. Delete task
3. Confirm removal from list

**Status:** ⚠️ Partial - works but no confirmation dialog (carry to next sprint)

## Metrics
- **Committed:** 10 story points
- **Completed:** 9 story points
- **Bugs Found:** 2 (both fixed)
- **Code Coverage:** 80%

## Feedback from Stakeholders
[Notes from product owner/instructor]

## Backlog Updates
**Add to backlog:**
- Confirmation dialog for delete
- Task editing feature
- Priority levels

**Reprioritize:**
- Move edit task to SHOULD HAVE (was COULD)
```

---

## PRODUCT BACKLOG TEMPLATE

```markdown
# PRODUCT BACKLOG - Task Manager App

## Epic 1: Core Task Management
- [ ] Create task with title and description (3 pts) - MUST
- [ ] View all tasks in list format (2 pts) - MUST  
- [ ] Mark task as complete/incomplete (3 pts) - MUST
- [ ] Delete task (2 pts) - MUST
- [ ] Edit existing task (5 pts) - SHOULD
- [ ] Search tasks by keyword (5 pts) - SHOULD

## Epic 2: Task Organization
- [ ] Add due dates to tasks (3 pts) - SHOULD
- [ ] Set priority levels (High/Med/Low) (3 pts) - SHOULD
- [ ] Organize tasks by category/tags (5 pts) - COULD
- [ ] Filter tasks by status/priority (5 pts) - COULD

## Epic 3: Data Persistence
- [ ] Save tasks to JSON file (5 pts) - MUST
- [ ] Load tasks on app startup (3 pts) - MUST
- [ ] Auto-save on changes (3 pts) - SHOULD

## Epic 4: User Experience
- [ ] Color-coded priorities (2 pts) - COULD
- [ ] Keyboard shortcuts (3 pts) - COULD
- [ ] Undo/redo functionality (8 pts) - WON'T (too complex)
- [ ] Export to CSV (5 pts) - WON'T (not v1)

## Epic 5: Advanced Features
- [ ] Recurring tasks (8 pts) - WON'T
- [ ] Subtasks/nested tasks (8 pts) - WON'T
- [ ] Collaboration/sharing (13 pts) - WON'T
- [ ] Mobile app version (21 pts) - WON'T

**Total Backlog:** 50+ story points
**Sprint Capacity:** ~10 points per 2 weeks
**Estimated Timeline:** 5-6 sprints for MVP
```

---

## STORY POINT ESTIMATION GUIDE

```
STORY POINTS measure EFFORT, not TIME

1 POINT - Trivial
- Add console.log statement
- Update README with one sentence
- Fix typo in variable name
Example: ~30 minutes

2 POINTS - Simple
- Create function with basic logic
- Add input validation
- Write basic test
Example: ~1-2 hours

3 POINTS - Moderate
- Implement new feature with simple logic
- Refactor existing function
- Add error handling
Example: ~3-4 hours

5 POINTS - Complex
- Feature requiring multiple functions
- Significant refactor
- Research needed
Example: ~1 day

8 POINTS - Very Complex
- Large feature with dependencies
- Architectural changes
- Multiple unknowns
Example: ~2-3 days

13+ POINTS - TOO BIG!
Break into smaller tickets
```

---

## DEFINITION OF DONE CHECKLIST

```markdown
# DEFINITION OF DONE

Before marking ticket "Done", verify:

## Code Quality
- [ ] Code follows style guide (camelCase, consistent indentation)
- [ ] No console.log() statements left in production code
- [ ] Variables have descriptive names
- [ ] Functions have JSDoc comments
- [ ] No hardcoded values (use constants)

## Functionality
- [ ] Feature works as described in ticket
- [ ] All edge cases handled
- [ ] No errors in console
- [ ] Tested with multiple inputs

## Git & Documentation
- [ ] Code committed with clear message
- [ ] Feature branch used (not main)
- [ ] Pull request created
- [ ] README updated if needed

## Testing
- [ ] Manually tested all scenarios
- [ ] Tested on different inputs
- [ ] No broken existing features (regression testing)

## Review
- [ ] Peer code review completed
- [ ] Feedback addressed
- [ ] PR approved and merged

## Demo
- [ ] Can demonstrate feature working
- [ ] Prepared talking points for sprint review
```

---

**Use these templates for Sprint 01 planning on Friday!**
**Save to your project repository for reference!**
