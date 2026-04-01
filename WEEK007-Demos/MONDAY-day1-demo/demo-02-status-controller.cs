// ============================================
// Demo 02: Custom Status Controller
// Week 7 Monday
// ============================================
//
// INSTRUCTOR: Build this live, test each endpoint in Swagger/Postman

using Microsoft.AspNetCore.Mvc;

// ============================================
// Step 1: Create the model (data shape)
// ============================================
public class StatusResponse
{
    public string Status { get; set; } = "OK";
    public DateTime ServerTime { get; set; } = DateTime.UtcNow;
    public string Message { get; set; } = string.Empty;
    public string Version { get; set; } = "1.0.0";
}

// ============================================
// Step 2: Create the controller
// ============================================
[ApiController]
[Route("api/[controller]")]   // URL will be: /api/status
public class StatusController : ControllerBase
{
    // GET /api/status
    // Returns server health check
    [HttpGet]
    public ActionResult<StatusResponse> GetStatus()
    {
        return Ok(new StatusResponse
        {
            Status = "Running",
            Message = "Hello from my first .NET API!",
            ServerTime = DateTime.UtcNow
        });
    }

    // GET /api/status/time
    // Returns current server time
    [HttpGet("time")]
    public ActionResult<object> GetTime()
    {
        return Ok(new
        {
            utc = DateTime.UtcNow,
            local = DateTime.Now,
            timezone = TimeZoneInfo.Local.DisplayName
        });
    }

    // GET /api/status/greet/Alice
    // Personalized greeting with URL parameter
    [HttpGet("greet/{name}")]
    public ActionResult<object> Greet(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
        {
            return BadRequest(new { error = "Name is required" });
        }

        return Ok(new
        {
            message = $"Hello, {name}! Welcome to .NET 🚀",
            timestamp = DateTime.UtcNow
        });
    }

    // POST /api/status/echo
    // Returns whatever the client sends (echo)
    [HttpPost("echo")]
    public ActionResult<object> Echo([FromBody] object data)
    {
        return Ok(new
        {
            echo = data,
            receivedAt = DateTime.UtcNow,
            message = "Your data was received!"
        });
    }

    // GET /api/status/calculate/{a}/{b}
    // Simple math operations
    [HttpGet("calculate/{a}/{b}")]
    public ActionResult<object> Calculate(int a, int b)
    {
        return Ok(new
        {
            a,
            b,
            sum = a + b,
            difference = a - b,
            product = a * b,
            quotient = b != 0 ? (double)a / b : 0
        });
    }
}

// ============================================
// TEACHING POINTS:
// 1. [Route("api/[controller]")] → URL = /api/status
// 2. [HttpGet("time")] → URL = /api/status/time  
// 3. {name} in route → parameter passed to method
// 4. Ok() = 200, BadRequest() = 400, NotFound() = 404
// 5. ActionResult<T> wraps response with status code
// 6. Anonymous objects (new { }) work for quick responses
// 7. [FromBody] reads JSON from request body
// ============================================
