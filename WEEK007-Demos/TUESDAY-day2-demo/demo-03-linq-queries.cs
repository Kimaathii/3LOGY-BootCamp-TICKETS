// ============================================
// Demo 03: LINQ Queries
// Week 7 Tuesday
// ============================================

using System;
using System.Collections.Generic;
using System.Linq;

// Sample data
var products = new List<Product>
{
    new() { Id = 1, Name = "Laptop", Price = 999m, Category = "Electronics", InStock = true },
    new() { Id = 2, Name = "Phone", Price = 699m, Category = "Electronics", InStock = true },
    new() { Id = 3, Name = "Book", Price = 25m, Category = "Books", InStock = true },
    new() { Id = 4, Name = "Headphones", Price = 149m, Category = "Electronics", InStock = false },
    new() { Id = 5, Name = "Pen", Price = 2m, Category = "Office", InStock = true },
    new() { Id = 6, Name = "Notebook", Price = 8m, Category = "Office", InStock = true },
    new() { Id = 7, Name = "Monitor", Price = 450m, Category = "Electronics", InStock = false },
};

// === WHERE (filter) ===
// JS: products.filter(p => p.price > 100)
var expensive = products.Where(p => p.Price > 100).ToList();
// Result: Laptop, Phone, Headphones, Monitor

// === SELECT (transform/map) ===
// JS: products.map(p => p.name)
var names = products.Select(p => p.Name).ToList();
// Result: ["Laptop", "Phone", "Book", ...]

// === FIRSTORDEFAULT (find) ===
// JS: products.find(p => p.id === 3)
var book = products.FirstOrDefault(p => p.Id == 3);
// Result: Book object (or null if not found)

// === ORDERBY / ORDERBYDESCENDING (sort) ===
// JS: products.sort((a,b) => a.price - b.price)
var cheapToExpensive = products.OrderBy(p => p.Price).ToList();
var expensiveToCheap = products.OrderByDescending(p => p.Price).ToList();

// === ANY (some) ===
// JS: products.some(p => p.price > 500)
bool hasExpensive = products.Any(p => p.Price > 500); // true

// === ALL (every) ===
// JS: products.every(p => p.inStock)
bool allInStock = products.All(p => p.InStock); // false

// === COUNT ===
int totalProducts = products.Count();
int electronicsCount = products.Count(p => p.Category == "Electronics");

// === AGGREGATE FUNCTIONS ===
decimal totalValue = products.Sum(p => p.Price);
decimal averagePrice = products.Average(p => p.Price);
decimal maxPrice = products.Max(p => p.Price);
decimal minPrice = products.Min(p => p.Price);

// === CHAINING (powerful!) ===
// "Get names of in-stock electronics, sorted by price"
var result = products
    .Where(p => p.Category == "Electronics")
    .Where(p => p.InStock)
    .OrderBy(p => p.Price)
    .Select(p => new { p.Name, p.Price })
    .ToList();
// Result: [{ Phone, 699 }, { Laptop, 999 }]

// === GROUPBY ===
var byCategory = products
    .GroupBy(p => p.Category)
    .Select(g => new { Category = g.Key, Count = g.Count(), TotalValue = g.Sum(p => p.Price) })
    .ToList();

// ============================================
// TEACHING POINTS:
// - LINQ methods match JS array methods
// - Chain methods for complex queries
// - Always call .ToList() to execute the query
// - This is the SAME syntax used with EF Core (Week 8)!
// ============================================
