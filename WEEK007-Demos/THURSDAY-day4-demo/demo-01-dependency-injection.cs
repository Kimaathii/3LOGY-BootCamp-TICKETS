// ============================================
// Demo 01: Dependency Injection
// Week 7 Thursday
// ============================================

// === Step 1: Define Interface ===
public interface ITaskRepository
{
    List<TaskItem> GetAll();
    TaskItem? GetById(int id);
    TaskItem Add(TaskItem task);
    void Update(TaskItem task);
    bool Delete(int id);
}

// === Step 2: Implement Interface ===
public class InMemoryTaskRepository : ITaskRepository
{
    private readonly List<TaskItem> _tasks = new();
    private int _nextId = 1;

    public List<TaskItem> GetAll() => _tasks;

    public TaskItem? GetById(int id) =>
        _tasks.FirstOrDefault(t => t.Id == id);

    public TaskItem Add(TaskItem task)
    {
        task.Id = _nextId++;
        task.CreatedAt = DateTime.UtcNow;
        _tasks.Add(task);
        return task;
    }

    public void Update(TaskItem task)
    {
        var existing = GetById(task.Id);
        if (existing != null)
        {
            existing.Title = task.Title;
            existing.Description = task.Description;
            existing.IsCompleted = task.IsCompleted;
        }
    }

    public bool Delete(int id)
    {
        var task = GetById(id);
        if (task == null) return false;
        _tasks.Remove(task);
        return true;
    }
}

// === Step 3: Register in Program.cs ===
// builder.Services.AddScoped<ITaskRepository, InMemoryTaskRepository>();

// === Step 4: Inject into Controller ===
[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private readonly ITaskRepository _repo;

    // Constructor injection — .NET provides the repository
    public TasksController(ITaskRepository repo)
    {
        _repo = repo;
    }

    [HttpGet]
    public ActionResult<List<TaskItem>> GetAll() => Ok(_repo.GetAll());

    [HttpGet("{id}")]
    public ActionResult<TaskItem> GetById(int id)
    {
        var task = _repo.GetById(id);
        return task == null ? NotFound() : Ok(task);
    }

    [HttpPost]
    public ActionResult<TaskItem> Create(CreateTaskDto dto)
    {
        var task = _repo.Add(new TaskItem { Title = dto.Title, Description = dto.Description });
        return CreatedAtAction(nameof(GetById), new { id = task.Id }, task);
    }
}

// ============================================
// TEACHING POINT: 
// "ONE line in Program.cs decides the implementation.
//  The controller doesn't know or care which repository
//  it gets. That's the power of DI!"
// ============================================
