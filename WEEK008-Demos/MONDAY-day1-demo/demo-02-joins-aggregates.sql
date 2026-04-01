-- ============================================
-- Demo 02: JOINs & Aggregate Functions
-- Week 8 Monday
-- ============================================

-- === INNER JOIN ===
-- Get tasks with their project names
SELECT t.Title AS TaskTitle, t.IsCompleted, p.Title AS ProjectName
FROM Tasks t
INNER JOIN Projects p ON t.ProjectId = p.Id;

-- Get tasks with project AND user info
SELECT t.Title AS Task, p.Title AS Project, u.Name AS Owner
FROM Tasks t
INNER JOIN Projects p ON t.ProjectId = p.Id
INNER JOIN Users u ON p.UserId = u.Id;

-- === LEFT JOIN ===
-- All users, even those without projects
SELECT u.Name, p.Title AS Project
FROM Users u
LEFT JOIN Projects p ON u.Id = p.UserId;

-- === FILTERED JOIN ===
-- Only incomplete tasks for Alice's projects
SELECT t.Title, t.Priority, p.Title AS Project
FROM Tasks t
INNER JOIN Projects p ON t.ProjectId = p.Id
INNER JOIN Users u ON p.UserId = u.Id
WHERE u.Name = 'Alice Kamau' AND t.IsCompleted = 0
ORDER BY t.Priority DESC;

-- === AGGREGATE FUNCTIONS ===
-- Count all tasks
SELECT COUNT(*) AS TotalTasks FROM Tasks;

-- Count completed vs incomplete
SELECT IsCompleted, COUNT(*) AS Count
FROM Tasks
GROUP BY IsCompleted;

-- Tasks per project
SELECT p.Title, COUNT(t.Id) AS TaskCount
FROM Projects p
LEFT JOIN Tasks t ON p.Id = t.ProjectId
GROUP BY p.Title;

-- Tasks per user
SELECT u.Name, COUNT(t.Id) AS TotalTasks,
       SUM(CASE WHEN t.IsCompleted = 1 THEN 1 ELSE 0 END) AS Completed
FROM Users u
LEFT JOIN Projects p ON u.Id = p.UserId
LEFT JOIN Tasks t ON p.Id = t.ProjectId
GROUP BY u.Name;

-- Average priority by project
SELECT p.Title, AVG(CAST(t.Priority AS FLOAT)) AS AvgPriority
FROM Projects p
INNER JOIN Tasks t ON p.Id = t.ProjectId
GROUP BY p.Title;

-- HAVING: projects with more than 2 tasks
SELECT p.Title, COUNT(t.Id) AS TaskCount
FROM Projects p
INNER JOIN Tasks t ON p.Id = t.ProjectId
GROUP BY p.Title
HAVING COUNT(t.Id) > 2;
