# Tuesday Demos - JavaScript Fundamentals (Browser)

**Session:** Virtual Class (Tuesday 6:00-9:00 PM)  
**Topic:** JavaScript Basics in the Browser — Including JS, Connecting to Elements, Events, Arrays

---

## DEMO FILES

1. **demo-01-including-js.html** - Including JS in HTML (inline, internal, external scripts)
2. **demo-02-connecting-elements.html** - Connecting JS to page elements (getElementById, querySelector, textContent, styles)
3. **demo-03-functions-dom.html** - Functions that read inputs and update the page (DOM interaction)
4. **demo-04-event-listeners.html** - Event listeners (click, mouse, input, keyboard events)
5. **demo-05-arrays-loops.html** - Arrays & loops in the browser (rendering lists, forEach, array methods)
6. **demo-06-counter-app.html** - Building a counter app (combining all concepts)

---

## TEACHING STRATEGY

### Demo Sequence:
Each demo builds on the previous:
1. How to include JS in a page
2. How to find and change elements
3. How to write functions that work with inputs/outputs
4. How to respond to user actions (events)
5. How to manage lists of data
6. How to combine everything into a working app

### Interactive Approach:
- Each demo has live interactive areas — students can click buttons and see results immediately
- Code examples shown alongside working demonstrations
- Practice exercises at the end of each demo
- Console output reinforces what's happening behind the scenes

---

## KEY CONCEPTS COVERED

### Demo 1: Including JavaScript in HTML
- Three methods: inline (`onclick`), internal (`<script>`), external (`.js` file)
- Script placement: before `</body>` vs `defer` attribute
- Why external JS is the best practice

### Demo 2: Connecting to Elements
- `document.getElementById('id')`
- `document.querySelector('.class')` and `querySelectorAll`
- Reading: `.textContent` vs `.innerHTML`
- Changing: `.textContent = "new text"` and `.style.property = "value"`

### Demo 3: Functions with the DOM
- Functions that read `input.value`
- `Number()` conversion for math operations
- Functions that return values (logic) vs functions that update UI (display)
- Arrow functions as event handlers

### Demo 4: Event Listeners
- `element.addEventListener('event', handler)`
- Click, mouseenter/leave, dblclick events
- Input event (live typing detection)
- The event object `(e)` — `e.target`, `e.key`, `e.clientX`
- Keyboard events (keydown)
- Event delegation pattern

### Demo 5: Arrays & Loops in Browser
- Array basics: push, pop, includes, sort
- The render pattern: data array → clear list → forEach → createElement → appendChild
- Loop comparison: for, for...of, forEach
- Array methods: filter, map, find, sort

### Demo 6: Counter App (Capstone Demo)
- State → Render pattern (Data → Event → Update → Display)
- Step-by-step code breakdown
- Keyboard shortcuts
- How this pattern connects to React.js

---

## RESOURCES

- [MDN: JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [MDN: DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
