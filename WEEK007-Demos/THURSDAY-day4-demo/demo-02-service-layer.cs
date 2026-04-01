// ============================================
// Demo 02: Service Layer Pattern
// Week 7 Thursday
// ============================================

// Architecture: Controller → Service → Repository

// === Service Interface ===
public interface ITaskService
{
    List<TaskDto> GetAll();
    TaskDto? GetById(int id);
    TaskDto Create(CreateTaskDto dto);
    TaskDto? Update(int id, UpdateTaskDto dto);
    bool Delete(int id);
}

// === Service Implementation ===
public class TaskService : ITaskService
{
    private readonly ITaskRepository _repo;

    public TaskService(ITaskRepository repo)
    {
        _repo = repo;
    }

    public List<TaskDto> GetAll() =>
        _repo.GetAll().Select(MapToDto).ToList();

    public TaskDto? GetById(int id)
    {
        var task = _repo.GetById(id);
        return task == null ? null : MapToDto(task);
    }

    public TaskDto Create(CreateTaskDto dto)
    {
        var task = new TaskItem
        {
            Title = dto.Title,
            Description = dto.Description
        };
        var created = _repo.Add(task);
        return MapToDto(created);
    }

    public TaskDto? Update(int id, UpdateTaskDto dto)
    {
        var task = _repo.GetById(id);
        if (task == null) return null;

        task.Title = dto.Title;
        task.Description = dto.Description;
        task.IsCompleted = dto.IsCompleted;
        _repo.Update(task);

        return MapToDto(task);
    }

    public bool Delete(int id) => _repo.Delete(id);

    // Private helper — mapping logic stays in service
    private static TaskDto MapToDto(TaskItem t) => new()
    {
        Id = t.Id,
        Title = t.Title,
        Description = t.Description,
        IsCompleted = t.IsCompleted,
        CreatedAt = t.CreatedAt
    };
}

// === Clean Controller (uses service only) ===
[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private readonly ITaskService _service;

    public TasksController(ITaskService service)
    {
        _service = service;
    }

    [HttpGet]
    public ActionResult<List<TaskDto>> GetAll()
        => Ok(_service.GetAll());

    [HttpGet("{id}")]
    public ActionResult<TaskDto> GetById(int id)
    {
        var task = _service.GetById(id);
        return task == null ? NotFound() : Ok(task);
    }

    [HttpPost]
    public ActionResult<TaskDto> Create(CreateTaskDto dto)
    {
        var task = _service.Create(dto);
        return CreatedAtAction(nameof(GetById), new { id = task.Id }, task);
    }

    [HttpPut("{id}")]
    public ActionResult<TaskDto> Update(int id, UpdateTaskDto dto)
    {
        var task = _service.Update(id, dto);
        return task == null ? NotFound() : Ok(task);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
        => _service.Delete(id) ? NoContent() : NotFound();
}

// === Program.cs Registration ===
// builder.Services.AddScoped<ITaskRepository, InMemoryTaskRepository>();
// builder.Services.AddScoped<ITaskService, TaskService>();

// ============================================
// TEACHING POINT:
// "Look at the controller — it's CLEAN! 
//  Each method is 1-3 lines. All logic in the service.
//  All data access in the repository.
//  THAT is professional architecture."
// ============================================
