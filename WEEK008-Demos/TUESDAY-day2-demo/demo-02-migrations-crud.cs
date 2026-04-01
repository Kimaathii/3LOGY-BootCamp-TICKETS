// ============================================
// Demo 02: Migrations & CRUD with EF Core
// Week 8 Tuesday
// ============================================

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// === Repository using EF Core (replaces InMemoryRepository!) ===
public class TaskRepository : ITaskRepository
{
    private readonly AppDbContext _context;

    public TaskRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<TaskItem>> GetAllAsync()
    {
        return await _context.Tasks.ToListAsync();
    }

    public async Task<TaskItem?> GetByIdAsync(int id)
    {
        return await _context.Tasks.FindAsync(id);
    }

    public async Task<TaskItem> AddAsync(TaskItem task)
    {
        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();   // MUST call to persist!
        return task;
    }

    public async Task UpdateAsync(TaskItem task)
    {
        _context.Tasks.Update(task);
        await _context.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var task = await _context.Tasks.FindAsync(id);
        if (task == null) return false;

        _context.Tasks.Remove(task);
        await _context.SaveChangesAsync();
        return true;
    }

    // LINQ queries work with EF Core too!
    public async Task<List<TaskItem>> GetCompletedAsync()
    {
        return await _context.Tasks
            .Where(t => t.IsCompleted)
            .OrderByDescending(t => t.CreatedAt)
            .ToListAsync();
    }

    public async Task<List<TaskItem>> SearchAsync(string query)
    {
        return await _context.Tasks
            .Where(t => t.Title.Contains(query))
            .ToListAsync();
    }
}

// === Swap in Program.cs ===
// OLD: builder.Services.AddScoped<ITaskRepository, InMemoryTaskRepository>();
// NEW: builder.Services.AddScoped<ITaskRepository, TaskRepository>();
// Controller & Service = ZERO changes needed!

// ============================================
// TEACHING POINTS:
// 1. SaveChangesAsync() — MUST call to write to database
// 2. FindAsync() — finds by primary key, very efficient
// 3. ToListAsync() — executes query and returns results
// 4. LINQ works the same as with in-memory lists!
// 5. ONE line change in Program.cs swaps the implementation
// ============================================
