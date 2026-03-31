# Week 4 Monday - Advanced CSS Demos

**Topic:** CSS Positioning, Transitions, Animations  
**Duration:** Demonstrations during 3-hour class  
**Purpose:** Show advanced CSS techniques for interactive components

---

## 📁 DEMO FILES

### Demo 1: CSS Position Properties (`demo-01-positioning.html`)
- **Concepts:** static, relative, absolute, fixed, sticky
- **Live Code:** Position elements in different contexts
- **Use Case:** Creating overlays, tooltips, sticky headers

### Demo 2: Z-Index & Stacking Context (`demo-02-z-index.html`)
- **Concepts:** z-index, stacking contexts, layering
- **Live Code:** Layer multiple positioned elements
- **Use Case:** Modals, dropdowns, complex layouts

### Demo 3: CSS Transitions (`demo-03-transitions.html`)
- **Concepts:** transition property, timing functions, delays
- **Live Code:** Smooth hover effects, color changes
- **Use Case:** Interactive buttons, smooth state changes

### Demo 4: CSS Animations (`demo-04-animations.html`)
- **Concepts:** @keyframes, animation properties
- **Live Code:** Fade-in, slide-in, pulse effects
- **Use Case:** Loading spinners, entrance animations

### Demo 5: Transform Property (`demo-05-transforms.html`)
- **Concepts:** translate, rotate, scale, skew
- **Live Code:** Interactive card flips, hover effects
- **Use Case:** Animated UI components

### Demo 6: Complete Interactive Component (`demo-06-complete-component.html`)
- **Concepts:** Combining positioning, transitions, animations
- **Live Code:** Animated modal with overlay
- **Use Case:** Real-world interactive component

---

## 🎯 TEACHING STRATEGY

### Demonstration Flow:
1. **Start Simple:** Static positioning review
2. **Build Complexity:** Add relative/absolute interactions
3. **Add Motion:** Introduce transitions
4. **Add Life:** Show keyframe animations
5. **Combine:** Build complete interactive component

### Key Points to Emphasize:
- Position relative creates positioning context for absolute children
- Z-index only works on positioned elements
- Transitions need property change (hover, class toggle)
- Animations can run automatically with @keyframes
- Transform doesn't affect document flow (good for animations)

### Common Student Mistakes:
- Forgetting position: relative on parent
- Z-index on static elements (doesn't work!)
- Animating properties that cause reflow (use transform instead)
- Missing vendor prefixes (less common now)

---

## 🧪 TESTING NOTES

**Browser Testing:**
- All demos tested in Chrome, Firefox, Edge
- Ensure DevTools open to show CSS changes
- Use slow motion in DevTools for animation inspection

**Student Engagement:**
- Ask students to predict behavior before showing
- Have students suggest use cases
- Encourage experimentation after class

---

## 📚 RESOURCES FOR STUDENTS

- [MDN: CSS Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [CSS-Tricks: Z-Index](https://css-tricks.com/almanac/properties/z/z-index/)
- [MDN: CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [MDN: CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [CSS Transform Playground](https://www.cssportal.com/css3-transform-generator/)

---

**These demos build toward Lab 13: Interactive CSS Components**
