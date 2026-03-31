# Thursday Demos - Forms & LocalStorage

**Session:** Physical Class (Thursday 2:00-5:00 PM)  
**Topic:** Form Handling, Data Validation, Browser Storage

---

## DEMO FILES

1. **demo-01-form-basics.html** - Form elements, getting values, preventDefault
2. **demo-02-form-validation.html** - Validation, error messages, disabled states
3. **demo-03-localstorage.html** - setItem, getItem, removeItem, clear
4. **demo-04-json-storage.html** - Storing arrays/objects with JSON.stringify/parse
5. **demo-05-notes-app.html** - Complete notes app with persistence

---

## KEY CONCEPTS

### Form Handling
- Getting input values
- Form submit preventDefault
- Input validation
- Error messages
- Disabled buttons

### LocalStorage
- `localStorage.setItem(key, value)` - Save data
- `localStorage.getItem(key)` - Retrieve data  
- `localStorage.removeItem(key)` - Delete data
- `localStorage.clear()` - Delete all data
- Data persists after page reload!

### JSON for Complex Data
```javascript
//Save array
const todos = ['Task 1', 'Task 2'];
localStorage.setItem('todos', JSON.stringify(todos));

// Retrieve array
const saved = localStorage.getItem('todos');
const todos = JSON.parse(saved);
```

---

## RESOURCES

- [MDN: Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN: LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
