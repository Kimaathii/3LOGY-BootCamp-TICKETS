// ============================================
// Demo 02: Generic Repository
// Week 8 Thursday
// ============================================

using Microsoft.EntityFrameworkCore;

// === Generic Interface ===
public interface IRepository<T> where T : class
{
    Task<List<T>> GetAllAsync();
    Task<T?> GetByIdAsync(int id);
    Task<T> AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(int id);
    Task<bool> ExistsAsync(int id);
    Task<int> CountAsync();
}

// === Generic Implementation ===
public class Repository<T> : IRepository<T> where T : class
{
    protected readonly AppDbContext _context;
    protected readonly DbSet<T> _dbSet;

    public Repository(AppDbContext context)
    {
        _context = context;
        _dbSet = context.Set<T>();
    }

    public virtual async Task<List<T>> GetAllAsync()
        => await _dbSet.ToListAsync();

    public virtual async Task<T?> GetByIdAsync(int id)
        => await _dbSet.FindAsync(id);

    public async Task<T> AddAsync(T entity)
    {
        _dbSet.Add(entity);
        await _context.SaveChangesAsync();
        return entity;
    }

    public async Task UpdateAsync(T entity)
    {
        _dbSet.Update(entity);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var entity = await _dbSet.FindAsync(id);
        if (entity != null)
        {
            _dbSet.Remove(entity);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<bool> ExistsAsync(int id)
        => await _dbSet.FindAsync(id) != null;

    public async Task<int> CountAsync()
        => await _dbSet.CountAsync();
}

// === Specific repository (extends generic with custom queries) ===
public interface ITaskRepository : IRepository<TaskItem>
{
    Task<List<TaskItem>> GetByProjectAsync(int projectId);
    Task<List<TaskItem>> GetCompletedAsync();
}

public class TaskRepository : Repository<TaskItem>, ITaskRepository
{
    public TaskRepository(AppDbContext context) : base(context) { }

    // Override to include related data
    public override async Task<List<TaskItem>> GetAllAsync()
        => await _dbSet.Include(t => t.Project).ToListAsync();

    public async Task<List<TaskItem>> GetByProjectAsync(int projectId)
        => await _dbSet.Where(t => t.ProjectId == projectId).ToListAsync();

    public async Task<List<TaskItem>> GetCompletedAsync()
        => await _dbSet.Where(t => t.IsCompleted).ToListAsync();
}

// === Registration in Program.cs ===
// builder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));
// builder.Services.AddScoped<ITaskRepository, TaskRepository>();
