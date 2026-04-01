// ============================================
// Demo 01: EF Core Repository (replaces InMemory)
// Week 8 Thursday
// ============================================

using Microsoft.EntityFrameworkCore;

// Same interface from Week 7!
public interface ITaskRepository
{
    Task<List<TaskItem>> GetAllAsync();
    Task<TaskItem?> GetByIdAsync(int id);
    Task<TaskItem> AddAsync(TaskItem task);
    Task UpdateAsync(TaskItem task);
    Task<bool> DeleteAsync(int id);
}

// NEW: EF Core implementation
public class TaskRepository : ITaskRepository
{
    private readonly AppDbContext _context;

    public TaskRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<TaskItem>> GetAllAsync()
        => await _context.Tasks
            .Include(t => t.Project)
            .OrderByDescending(t => t.CreatedAt)
            .ToListAsync();

    public async Task<TaskItem?> GetByIdAsync(int id)
        => await _context.Tasks
            .Include(t => t.Project)
            .FirstOrDefaultAsync(t => t.Id == id);

    public async Task<TaskItem> AddAsync(TaskItem task)
    {
        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();
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
}

// In Program.cs — THE ONE LINE THAT CHANGES EVERYTHING:
// builder.Services.AddScoped<ITaskRepository, TaskRepository>();

// ============================================
// TEACHING POINT:
// "ONE line changed. The entire app now uses a real database. 
//  Controller? Untouched. Service? Untouched.
//  THAT is the power of interfaces + DI + Repository."
// ============================================
