// ============================================
// Demo 01: EF Core Setup
// Week 8 Tuesday
// ============================================

// Step 1: Install packages (run in terminal)
// dotnet add package Microsoft.EntityFrameworkCore.SqlServer
// dotnet add package Microsoft.EntityFrameworkCore.Tools
// dotnet add package Microsoft.EntityFrameworkCore.Design

using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

// === Entity Models ===
public class TaskItem
{
    public int Id { get; set; }   // Convention: "Id" = auto PK

    [Required]
    [StringLength(200)]
    public string Title { get; set; } = string.Empty;

    [StringLength(1000)]
    public string? Description { get; set; }

    public bool IsCompleted { get; set; }
    public int Priority { get; set; } = 1;   // 1=Low, 2=Med, 3=High
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

// === DbContext ===
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    // Each DbSet = one database table
    public DbSet<TaskItem> Tasks => Set<TaskItem>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Seed data for testing
        modelBuilder.Entity<TaskItem>().HasData(
            new TaskItem { Id = 1, Title = "Learn EF Core", Priority = 3 },
            new TaskItem { Id = 2, Title = "Build API", Priority = 2 },
            new TaskItem { Id = 3, Title = "Write tests", Priority = 1 }
        );
    }
}

// === Program.cs configuration ===
// Add this to Program.cs:
//
// builder.Services.AddDbContext<AppDbContext>(options =>
//     options.UseSqlServer(
//         builder.Configuration.GetConnectionString("DefaultConnection")));

// === appsettings.json ===
// {
//   "ConnectionStrings": {
//     "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=TaskApiDb;Trusted_Connection=True;"
//   }
// }

// === Terminal commands ===
// dotnet ef migrations add InitialCreate
// dotnet ef database update
// Then check database in Azure Data Studio!
