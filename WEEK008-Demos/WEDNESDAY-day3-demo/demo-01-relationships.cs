// ============================================
// Demo 01: Entity Relationships
// Week 8 Wednesday
// ============================================

using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

// === Entities with Relationships ===

public class User
{
    public int Id { get; set; }

    [Required, StringLength(100)]
    public string Name { get; set; } = string.Empty;

    [Required, StringLength(200)]
    public string Email { get; set; } = string.Empty;

    // Navigation: One User has Many Projects
    public List<Project> Projects { get; set; } = new();
}

public class Project
{
    public int Id { get; set; }

    [Required, StringLength(200)]
    public string Title { get; set; } = string.Empty;

    [StringLength(1000)]
    public string? Description { get; set; }

    // Foreign Key → Users table
    public int UserId { get; set; }
    public User? User { get; set; }  // Navigation to parent

    // Navigation: One Project has Many Tasks
    public List<TaskItem> Tasks { get; set; } = new();
}

public class TaskItem
{
    public int Id { get; set; }

    [Required, StringLength(200)]
    public string Title { get; set; } = string.Empty;

    public string? Description { get; set; }
    public bool IsCompleted { get; set; }
    public int Priority { get; set; } = 1;

    // Foreign Key → Projects table
    public int ProjectId { get; set; }
    public Project? Project { get; set; }  // Navigation to parent

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

// === DbContext with Fluent API ===
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<User> Users => Set<User>();
    public DbSet<Project> Projects => Set<Project>();
    public DbSet<TaskItem> Tasks => Set<TaskItem>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // User → Projects (one-to-many)
        modelBuilder.Entity<Project>()
            .HasOne(p => p.User)
            .WithMany(u => u.Projects)
            .HasForeignKey(p => p.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        // Project → Tasks (one-to-many)
        modelBuilder.Entity<TaskItem>()
            .HasOne(t => t.Project)
            .WithMany(p => p.Tasks)
            .HasForeignKey(t => t.ProjectId)
            .OnDelete(DeleteBehavior.Cascade);

        // Unique email
        modelBuilder.Entity<User>()
            .HasIndex(u => u.Email)
            .IsUnique();

        // Seed data
        modelBuilder.Entity<User>().HasData(
            new User { Id = 1, Name = "Alice Kamau", Email = "alice@devhub.co.ke" },
            new User { Id = 2, Name = "Bob Ochieng", Email = "bob@devhub.co.ke" }
        );

        modelBuilder.Entity<Project>().HasData(
            new Project { Id = 1, Title = "DevHub Frontend", UserId = 1 },
            new Project { Id = 2, Title = "DevHub API", UserId = 1 },
            new Project { Id = 3, Title = "Portfolio", UserId = 2 }
        );

        modelBuilder.Entity<TaskItem>().HasData(
            new TaskItem { Id = 1, Title = "Build navbar", ProjectId = 1, Priority = 2 },
            new TaskItem { Id = 2, Title = "Create models", ProjectId = 2, Priority = 3 },
            new TaskItem { Id = 3, Title = "Hero section", ProjectId = 3, Priority = 1 }
        );
    }
}

// Terminal: dotnet ef migrations add AddRelationships
// Terminal: dotnet ef database update
