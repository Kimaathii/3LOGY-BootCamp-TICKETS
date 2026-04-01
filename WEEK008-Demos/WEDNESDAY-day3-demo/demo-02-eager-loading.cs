// ============================================
// Demo 02: Eager Loading & Querying Related Data
// Week 8 Wednesday
// ============================================

using Microsoft.EntityFrameworkCore;

// === WITHOUT Include — Related data is NULL ===
var project = await _context.Projects.FindAsync(1);
// project.Tasks = null! ← Not loaded!
// project.User = null!  ← Not loaded!

// === WITH Include — Related data is LOADED ===

// Load project with its tasks
var projectWithTasks = await _context.Projects
    .Include(p => p.Tasks)
    .FirstOrDefaultAsync(p => p.Id == 1);
// projectWithTasks.Tasks = [Task1, Task2, ...] ✅

// Load project with user AND tasks
var projectFull = await _context.Projects
    .Include(p => p.User)
    .Include(p => p.Tasks)
    .FirstOrDefaultAsync(p => p.Id == 1);

// Deep include: User → Projects → Tasks
var userWithEverything = await _context.Users
    .Include(u => u.Projects)
        .ThenInclude(p => p.Tasks)
    .FirstOrDefaultAsync(u => u.Id == 1);

// === Filtered queries with relationships ===

// All projects for a specific user
var aliceProjects = await _context.Projects
    .Include(p => p.Tasks)
    .Where(p => p.UserId == 1)
    .ToListAsync();

// All incomplete tasks for a user
var userTasks = await _context.Tasks
    .Include(t => t.Project)
    .Where(t => t.Project!.UserId == 1 && !t.IsCompleted)
    .OrderByDescending(t => t.Priority)
    .ToListAsync();

// Count tasks per project
var taskCounts = await _context.Projects
    .Select(p => new
    {
        p.Title,
        TaskCount = p.Tasks.Count,
        CompletedCount = p.Tasks.Count(t => t.IsCompleted)
    })
    .ToListAsync();

// === N+1 Problem Demo ===
// BAD: N+1 queries
var projects = await _context.Projects.ToListAsync();
foreach (var p in projects)
{
    // This triggers a SEPARATE query for each project's tasks!
    var tasks = await _context.Tasks.Where(t => t.ProjectId == p.Id).ToListAsync();
}
// 1 query for projects + N queries for tasks = SLOW!

// GOOD: 1 query with Include
var projectsWithTasks = await _context.Projects
    .Include(p => p.Tasks)
    .ToListAsync();
// 1 query gets EVERYTHING = FAST!

// ============================================
// TEACHING POINTS:
// 1. Without Include → related data is null
// 2. Include loads related data in the SAME query
// 3. ThenInclude for nested relationships
// 4. N+1 problem: 1+N queries vs 1 query with Include
// 5. ALWAYS use Include when you need related data
// ============================================
