-- ============================================
-- Demo 03: Schema Design — DevHub ERD
-- Week 8 Monday
-- ============================================

-- This is the schema students will implement with EF Core this week

-- === Complete DevHub Schema ===
CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(200) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(500) NOT NULL,
    Role NVARCHAR(50) DEFAULT 'User',   -- User, Admin
    CreatedAt DATETIME DEFAULT GETDATE(),
    UpdatedAt DATETIME DEFAULT GETDATE()
);

CREATE TABLE Projects (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(200) NOT NULL,
    Description NVARCHAR(2000),
    Status NVARCHAR(50) DEFAULT 'Active',  -- Active, Completed, Archived
    UserId INT NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE(),
    UpdatedAt DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_Projects_Users FOREIGN KEY (UserId)
        REFERENCES Users(Id) ON DELETE CASCADE
);

CREATE TABLE Tasks (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Title NVARCHAR(200) NOT NULL,
    Description NVARCHAR(2000),
    IsCompleted BIT DEFAULT 0,
    Priority INT DEFAULT 1 CHECK (Priority BETWEEN 1 AND 3),
    DueDate DATETIME NULL,
    ProjectId INT NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE(),
    UpdatedAt DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_Tasks_Projects FOREIGN KEY (ProjectId)
        REFERENCES Projects(Id) ON DELETE CASCADE
);

-- === INDEX for performance ===
CREATE INDEX IX_Projects_UserId ON Projects(UserId);
CREATE INDEX IX_Tasks_ProjectId ON Tasks(ProjectId);
CREATE INDEX IX_Tasks_IsCompleted ON Tasks(IsCompleted);
CREATE INDEX IX_Users_Email ON Users(Email);

-- === Relationships Summary ===
-- User 1 ──< many Projects
-- Project 1 ──< many Tasks
-- Cascade delete: Deleting a user removes their projects and tasks
