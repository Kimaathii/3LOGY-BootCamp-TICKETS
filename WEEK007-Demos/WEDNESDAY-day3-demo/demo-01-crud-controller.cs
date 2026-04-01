// ============================================
// Demo 01: Complete CRUD Controller
// Week 7 Wednesday
// ============================================

using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

// === Models ===
public class TaskItem
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public bool IsCompleted { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

// === DTOs ===
public class CreateTaskDto
{
    [Required(ErrorMessage = "Title is required")]
    [StringLength(200, MinimumLength = 1, ErrorMessage = "Title must be 1-200 characters")]
    public string Title { get; set; } = string.Empty;

    [StringLength(1000)]
    public string? Description { get; set; }
}

public class UpdateTaskDto : CreateTaskDto
{
    public bool IsCompleted { get; set; }
}

public class TaskDto
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public bool IsCompleted { get; set; }
    public DateTime CreatedAt { get; set; }
}

// === Controller ===
[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    // In-memory storage (replaced by database in Week 8)
    private static readonly List<TaskItem> _tasks = new();
    private static int _nextId = 1;

    // GET /api/tasks
    [HttpGet]
    public ActionResult<IEnumerable<TaskDto>> GetAll()
    {
        var dtos = _tasks.Select(MapToDto).ToList();
        return Ok(dtos);
    }

    // GET /api/tasks/5
    [HttpGet("{id}")]
    public ActionResult<TaskDto> GetById(int id)
    {
        var task = _tasks.FirstOrDefault(t => t.Id == id);
        if (task == null)
            return NotFound(new { error = $"Task {id} not found" });
        return Ok(MapToDto(task));
    }

    // POST /api/tasks
    [HttpPost]
    public ActionResult<TaskDto> Create([FromBody] CreateTaskDto dto)
    {
        var task = new TaskItem
        {
            Id = _nextId++,
            Title = dto.Title,
            Description = dto.Description
        };
        _tasks.Add(task);

        // 201 Created with Location header
        return CreatedAtAction(
            nameof(GetById),
            new { id = task.Id },
            MapToDto(task));
    }

    // PUT /api/tasks/5
    [HttpPut("{id}")]
    public ActionResult<TaskDto> Update(int id, [FromBody] UpdateTaskDto dto)
    {
        var task = _tasks.FirstOrDefault(t => t.Id == id);
        if (task == null)
            return NotFound(new { error = $"Task {id} not found" });

        task.Title = dto.Title;
        task.Description = dto.Description;
        task.IsCompleted = dto.IsCompleted;

        return Ok(MapToDto(task));
    }

    // DELETE /api/tasks/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var task = _tasks.FirstOrDefault(t => t.Id == id);
        if (task == null)
            return NotFound(new { error = $"Task {id} not found" });

        _tasks.Remove(task);
        return NoContent(); // 204
    }

    // Helper: Map entity to DTO
    private static TaskDto MapToDto(TaskItem t) => new()
    {
        Id = t.Id,
        Title = t.Title,
        Description = t.Description,
        IsCompleted = t.IsCompleted,
        CreatedAt = t.CreatedAt
    };
}
