// ============================================
// Demo 02: Model Validation
// Week 7 Wednesday
// ============================================

using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

// === DTO with validation attributes ===
public class CreateProductDto
{
    [Required(ErrorMessage = "Name is required")]
    [StringLength(100, MinimumLength = 2, ErrorMessage = "Name must be 2-100 characters")]
    public string Name { get; set; } = string.Empty;

    [Required]
    [Range(0.01, 99999.99, ErrorMessage = "Price must be between $0.01 and $99,999.99")]
    public decimal Price { get; set; }

    [StringLength(500)]
    public string? Description { get; set; }

    [Required]
    [RegularExpression("^(Electronics|Books|Office|Clothing)$",
        ErrorMessage = "Category must be: Electronics, Books, Office, or Clothing")]
    public string Category { get; set; } = string.Empty;

    [Range(0, 10000, ErrorMessage = "Quantity must be 0-10000")]
    public int Quantity { get; set; }

    [EmailAddress(ErrorMessage = "Invalid supplier email")]
    public string? SupplierEmail { get; set; }
}

// === Controller with validation ===
[ApiController]  // This enables automatic model validation!
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpPost]
    public ActionResult<object> Create([FromBody] CreateProductDto dto)
    {
        // With [ApiController], invalid models automatically return 400
        // You don't need to manually check ModelState!

        return Created("", new
        {
            message = "Product created successfully",
            product = dto
        });
    }
}

// ============================================
// TEACHING POINTS:
// - [ApiController] auto-validates and returns 400
// - Data Annotations: [Required], [StringLength], [Range], etc.
// - Custom error messages in ErrorMessage parameter
// - Show what happens when sending invalid JSON in Postman
//   → Automatic 400 with validation errors
// ============================================
