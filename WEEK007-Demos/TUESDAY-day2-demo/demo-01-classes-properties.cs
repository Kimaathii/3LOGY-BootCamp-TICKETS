// ============================================
// Demo 01: Classes & Properties
// Week 7 Tuesday
// ============================================

// === Basic Class ===
public class Product
{
    // Auto-properties with defaults
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public string Category { get; set; } = "General";
    public bool InStock { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    // Computed (read-only) property
    public string DisplayPrice => $"${Price:F2}";
    public string Summary => $"{Name} ({Category}) - {DisplayPrice}";

    // Constructor
    public Product(string name, decimal price, string category = "General")
    {
        Name = name;
        Price = price;
        Category = category;
    }

    // Parameterless constructor (needed for JSON deserialization)
    public Product() { }

    // Methods
    public void ApplyDiscount(decimal percent)
    {
        if (percent < 0 || percent > 100)
            throw new ArgumentException("Percent must be 0-100");
        Price -= Price * (percent / 100);
    }

    public override string ToString() => Summary;
}

// === Usage ===
// Object initializer syntax (most common in APIs)
var laptop = new Product
{
    Id = 1,
    Name = "MacBook Pro",
    Price = 1999.99m,
    Category = "Electronics"
};

// Constructor syntax
var book = new Product("Clean Code", 45.99m, "Books");

Console.WriteLine(laptop);           // MacBook Pro (Electronics) - $1999.99
laptop.ApplyDiscount(10);
Console.WriteLine(laptop.DisplayPrice); // $1799.99
Console.WriteLine(laptop.InStock);      // True (default value)

// ============================================
// TEACHING POINTS:
// - Properties use { get; set; } (not plain fields)
// - Default values with = initializer
// - Computed properties with =>
// - Constructors initialize required data
// - Parameterless constructor needed for API JSON binding
// ============================================
