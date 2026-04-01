# Demo 03: Testing APIs with Postman
## Week 7 Monday

---

## What is Postman?

Postman is a tool for testing APIs. Unlike a browser (which can only do GET requests), Postman lets you:
- Send any HTTP method (GET, POST, PUT, DELETE)
- Set request headers and body
- Inspect response status codes, headers, and body
- Save requests into collections for reuse

---

## Setup

1. Download Postman from [postman.com/downloads](https://www.postman.com/downloads/)
2. Create a free account
3. Create a new collection: "Week 7 — My API"

---

## Testing Your Status Controller

### Test 1: GET /api/status
```
Method: GET
URL: https://localhost:5001/api/status
Expected: 200 OK
```
**Response:**
```json
{
  "status": "Running",
  "serverTime": "2026-04-01T12:00:00Z",
  "message": "Hello from my first .NET API!",
  "version": "1.0.0"
}
```

### Test 2: GET /api/status/greet/YourName
```
Method: GET
URL: https://localhost:5001/api/status/greet/Alice
Expected: 200 OK
```

### Test 3: POST /api/status/echo
```
Method: POST
URL: https://localhost:5001/api/status/echo
Headers: Content-Type: application/json
Body (raw JSON):
{
  "name": "Alice",
  "message": "Testing my API!"
}
Expected: 200 OK with echoed data
```

### Test 4: GET /api/status/calculate/10/3
```
Method: GET
URL: https://localhost:5001/api/status/calculate/10/3
Expected: 200 OK with math results
```

---

## Tips
- **Save each request** to your collection for easy reuse
- **Check the status code** — it tells you if the request succeeded
- **Use "Pretty" view** to format JSON responses
- **SSL errors?** Disable SSL verification in Postman settings for localhost

---

## Alternative: Using Swagger

1. Run your API (`dotnet run`)
2. Open `https://localhost:5001/swagger`
3. Click any endpoint → "Try it out" → "Execute"
4. See the response right in the browser

**Swagger is auto-generated from your controllers!**
