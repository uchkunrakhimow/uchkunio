# Understanding Modern CSS Layouts

Modern CSS gives us powerful tools for creating responsive, flexible layouts. Let's explore the main techniques.

## Flexbox

Perfect for one-dimensional layouts (rows or columns):

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
```

**Common use cases:**

- Navigation bars
- Card layouts
- Centering content

## CSS Grid

Ideal for two-dimensional layouts:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
```

**Common use cases:**

- Page layouts
- Image galleries
- Dashboard widgets

## Responsive Design

Use modern CSS features for responsive layouts:

```css
/* Container queries */
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}

/* Clamp for fluid typography */
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}
```

## Best Practices

1. **Mobile-first approach** - Start with mobile styles
2. **Logical properties** - Use `inline-start` instead of `left`
3. **CSS custom properties** - For maintainable theming
4. **Avoid fixed heights** - Let content determine size

Modern CSS makes building responsive, beautiful layouts easier than ever!
