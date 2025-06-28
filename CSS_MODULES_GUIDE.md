# CSS Modules Guide

This project now uses CSS Modules instead of Tailwind CSS for styling. This provides better component isolation, scoped styles, and more control over your styling approach.

## How CSS Modules Work

CSS Modules automatically scope your CSS classes to the component that imports them. This prevents style conflicts and makes your styles more maintainable.

### File Naming Convention

CSS Module files should be named with the `.module.css` extension:

- `Component.module.css`
- `HomePage.module.css`
- `Button.module.css`

### Basic Usage

1. **Create a CSS Module file** (e.g., `Button.module.css`):

```css
.button {
  padding: var(--space-sm) var(--space-lg);
  border: none;
  border-radius: var(--radius-md);
  background-color: var(--color-accent);
  color: white;
}

.button:hover {
  background-color: var(--color-accent-light);
}

.primary {
  background-color: var(--color-accent);
}

.secondary {
  background-color: transparent;
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
}
```

2. **Import and use in your component**:

```tsx
import React from 'react'
import styles from './Button.module.css'

const Button = ({ variant = 'primary', children }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  )
}
```

### CSS Variables Available

The project includes a comprehensive set of CSS custom properties (variables) that you can use in your styles:

#### Colors

```css
var(--color-background)     /* #e9eceb */
var(--color-text-primary)   /* #0f0f0f */
var(--color-text-secondary) /* #8c8f8e */
var(--color-accent)         /* #0d9488 */
var(--color-accent-light)   /* #14b8a6 */
```

#### Typography

```css
var(--font-heading)  /* Crimson Pro */
var(--font-content)  /* Azeret Mono */
```

#### Spacing

```css
var(--space-xs)   /* 0.25rem */
var(--space-sm)   /* 0.5rem */
var(--space-md)   /* 1rem */
var(--space-lg)   /* 1.5rem */
var(--space-xl)   /* 2rem */
var(--space-2xl)  /* 3rem */
var(--space-3xl)  /* 4rem */
```

#### Border Radius

```css
var(--radius-sm)  /* 0.25rem */
var(--radius-md)  /* 0.5rem */
var(--radius-lg)  /* 0.75rem */
var(--radius-xl)  /* 1rem */
```

#### Shadows

```css
var(--shadow-sm)  /* subtle shadow */
var(--shadow-md)  /* medium shadow */
var(--shadow-lg)  /* large shadow */
```

### Examples

#### Simple Component

```tsx
// Card.tsx
import styles from './Card.module.css'

const Card = ({ title, children }) => (
  <div className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.content}>{children}</div>
  </div>
)
```

```css
/* Card.module.css */
.card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: var(--shadow-md);
}

.title {
  font-family: var(--font-heading);
  color: var(--color-text-primary);
  margin-bottom: var(--space-md);
}

.content {
  color: var(--color-text-secondary);
  font-family: var(--font-content);
}
```

#### Complex Component with Variants

```tsx
// Button.tsx
import styles from './Button.module.css'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
}

const Button = ({ variant = 'primary', size = 'medium', children }) => {
  const classes = [styles.button, styles[variant], styles[size]].join(' ')

  return <button className={classes}>{children}</button>
}
```

### Global Styles and Utilities

Global styles are defined in `src/index.css`. Some utility classes are available globally:

```css
.heading-font     /* Apply heading font */
.text-primary     /* Primary text color */
.text-secondary   /* Secondary text color */
.text-accent      /* Accent color */
.line-clamp-2     /* Clamp text to 2 lines */
.line-clamp-3     /* Clamp text to 3 lines */
```

### VS Code Integration

The project includes VS Code settings that will:

- Auto-format CSS files with Prettier
- Provide IntelliSense for CSS custom properties
- Show CSS class completions

### Best Practices

1. **Use CSS Custom Properties**: Leverage the design system variables for consistency
2. **Keep Styles Scoped**: Use CSS Modules for component-specific styles
3. **Organize by Feature**: Group related styles in the same module
4. **Use Semantic Names**: Choose class names that describe purpose, not appearance
5. **Compose Classes**: Combine multiple classes for variants and states

### TypeScript Support

CSS Modules are fully typed. The `src/types/css-modules.d.ts` file provides type definitions, giving you autocompletion and type safety for your CSS classes.

Example usage with full TypeScript support:

```tsx
import styles from './Component.module.css' // Fully typed!

// TypeScript knows about all classes in the CSS file
;<div className={styles.container}>
  <h1 className={styles.title}>Hello</h1>
</div>
```
