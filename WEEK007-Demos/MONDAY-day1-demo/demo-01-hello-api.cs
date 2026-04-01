// ============================================
// Demo 01: Hello API — First .NET Core Project
// Week 7 Monday
// ============================================
// 
// INSTRUCTOR: Run these commands live, explain each step
//
// Step 1: Create the project
// > dotnet new webapi -n HelloApi
// > cd HelloApi
//
// Step 2: Explore the structure
// - Program.cs          → App configuration
// - Controllers/        → API endpoints
// - appsettings.json    → Configuration settings
// - HelloApi.csproj     → Project dependencies (like package.json)
//
// Step 3: Run the project
// > dotnet run
// Open: https://localhost:5001/swagger
//
// Step 4: Show the default WeatherForecast controller
// - Explain [ApiController], [Route], [HttpGet]
// - Click "Try it out" in Swagger
// - Show the JSON response

// ============================================
// KEY CONCEPTS TO HIGHLIGHT:
// ============================================

// 1. Program.cs — The entry point
// (Show students this file and explain each line)

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();            // Enable API controllers
builder.Services.AddEndpointsApiExplorer();   // Enable endpoint discovery
builder.Services.AddSwaggerGen();             // Enable Swagger docs

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();       // Swagger JSON
    app.UseSwaggerUI();     // Swagger UI page
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();       // Map controller routes

app.Run();

// ============================================
// 2. The default WeatherForecast controller
// (Walk through each attribute and method)
// ============================================

using Microsoft.AspNetCore.Mvc;

[ApiController]                        // Marks this class as API controller
[Route("[controller]")]                // URL: /WeatherForecast
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild",
        "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    [HttpGet(Name = "GetWeatherForecast")]  // HTTP GET method
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}

// ============================================
// TEACHING POINTS:
// - [ApiController] = "this handles HTTP requests"
// - [Route] = "this is the URL path"
// - [HttpGet] = "respond to GET requests"
// - ControllerBase = base class (provides Ok(), NotFound(), etc.)
// - Return type = the shape of the JSON response
// ============================================
