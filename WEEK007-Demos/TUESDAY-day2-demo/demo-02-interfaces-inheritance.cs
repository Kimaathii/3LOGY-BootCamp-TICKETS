// ============================================
// Demo 02: Interfaces & Inheritance
// Week 7 Tuesday
// ============================================

// === Interface (Contract) ===
public interface IRepository<T>
{
    List<T> GetAll();
    T? GetById(int id);
    T Add(T item);
    bool Delete(int id);
}

// === Base class ===
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Price { get; set; }

    public virtual string GetDescription() => $"{Name} - ${Price:F2}";
}

// === Inheritance ===
public class DigitalProduct : Product
{
    public string DownloadUrl { get; set; } = string.Empty;
    public double FileSizeMB { get; set; }

    public override string GetDescription() =>
        $"{Name} (Digital, {FileSizeMB}MB) - ${Price:F2}";
}

public class PhysicalProduct : Product
{
    public double WeightKg { get; set; }
    public string ShippingClass { get; set; } = "Standard";

    public override string GetDescription() =>
        $"{Name} (Physical, {WeightKg}kg) - ${Price:F2}";
}

// === Interface implementation ===
public class InMemoryProductRepository : IRepository<Product>
{
    private readonly List<Product> _products = new();
    private int _nextId = 1;

    public List<Product> GetAll() => _products;

    public Product? GetById(int id) =>
        _products.FirstOrDefault(p => p.Id == id);

    public Product Add(Product product)
    {
        product.Id = _nextId++;
        _products.Add(product);
        return product;
    }

    public bool Delete(int id)
    {
        var product = GetById(id);
        if (product == null) return false;
        _products.Remove(product);
        return true;
    }
}

// === Usage ===
IRepository<Product> repo = new InMemoryProductRepository();

repo.Add(new DigitalProduct { Name = "E-Book", Price = 9.99m, FileSizeMB = 5.2 });
repo.Add(new PhysicalProduct { Name = "Laptop", Price = 999m, WeightKg = 1.5 });

foreach (var p in repo.GetAll())
{
    Console.WriteLine(p.GetDescription());
    // E-Book (Digital, 5.2MB) - $9.99
    // Laptop (Physical, 1.5kg) - $999.00
}

// ============================================
// TEACHING POINTS:
// - Interface = contract (WHAT, not HOW)
// - Generic interface IRepository<T> works for any type
// - Inheritance: DigitalProduct IS A Product
// - virtual/override for polymorphism
// - Later: swap InMemoryRepo for DatabaseRepo!
// ============================================
