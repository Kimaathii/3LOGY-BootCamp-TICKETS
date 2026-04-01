-- ============================================
-- Demo 01: SQL Basics
-- Week 8 Monday
-- ============================================
-- Run these queries in Azure Data Studio, DBeaver, or pgAdmin

-- === CREATE TABLES ===
CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),      -- Auto-increment
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(200) NOT NULL UNIQUE,
    CreatedAt DATETIME DEFAULT GETDATE()
);

CREATE TABLE Projects (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(200) NOT NULL,
    Description NVARCHAR(1000),
    UserId INT NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserId) REFERENCES Users(Id)
);

CREATE TABLE Tasks (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(200) NOT NULL,
    Description NVARCHAR(1000),
    IsCompleted BIT DEFAULT 0,
    Priority INT DEFAULT 1,       -- 1=Low, 2=Medium, 3=High
    ProjectId INT NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (ProjectId) REFERENCES Projects(Id)
);

-- === INSERT DATA ===
INSERT INTO Users (Name, Email) VALUES
    ('Alice Kamau', 'alice@devhub.co.ke'),
    ('Bob Ochieng', 'bob@devhub.co.ke'),
    ('Carol Wanjiku', 'carol@devhub.co.ke');

INSERT INTO Projects (Title, Description, UserId) VALUES
    ('DevHub Frontend', 'React frontend for DevHub', 1),
    ('DevHub API', 'Backend REST API', 1),
    ('Portfolio Site', 'Personal portfolio', 2),
    ('Blog Platform', 'Community blog', 3);

INSERT INTO Tasks (Title, Description, IsCompleted, Priority, ProjectId) VALUES
    ('Setup React project', 'Create with CRA', 1, 2, 1),
    ('Build navbar', 'Responsive navigation', 0, 2, 1),
    ('Design login page', 'Auth UI', 0, 3, 1),
    ('Create User model', 'EF Core entity', 1, 3, 2),
    ('Add JWT auth', 'Token-based auth', 0, 3, 2),
    ('Build hero section', 'Landing page hero', 1, 1, 3),
    ('Write blog post', 'First article', 0, 1, 4);

-- === SELECT (Read) ===
-- All tasks
SELECT * FROM Tasks;

-- Specific columns
SELECT Title, IsCompleted FROM Tasks;

-- Filtered
SELECT * FROM Tasks WHERE IsCompleted = 0;
SELECT * FROM Tasks WHERE Priority = 3;

-- Sorted
SELECT * FROM Tasks ORDER BY CreatedAt DESC;
SELECT * FROM Tasks ORDER BY Priority DESC, Title ASC;

-- Search (LIKE)
SELECT * FROM Tasks WHERE Title LIKE '%login%';

-- === UPDATE ===
UPDATE Tasks SET IsCompleted = 1 WHERE Id = 2;
UPDATE Tasks SET Priority = 3 WHERE Title LIKE '%JWT%';

-- === DELETE ===
DELETE FROM Tasks WHERE Id = 7;
