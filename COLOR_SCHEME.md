# NEXUS Color Scheme

This document contains the complete color palette used in the NEXUS landing page. Use these colors for consistency across the entire project.

---

## 🎨 Primary Colors

### Orange/Amber (Primary Brand)
- **orange-400**: `#fb923c` - Secondary text, highlights
- **orange-500**: `#f97316` - Primary brand color, accents, borders
- **orange-600**: `#ea580c` - Primary buttons, CTAs
- **orange-900**: `#7c2d12` - Background overlays (with opacity)
- **orange-950**: `#431407` - Deep background accents

### Amber (Complementary)
- **amber-400**: `#fbbf24` - Gradient accents
- **amber-500**: `#f59e0b` - Node borders, highlights  
- **amber-600**: `#d97706` - Button hover states
- **amber-900**: `#78350f` - Background overlays

### Yellow (Accent)
- **yellow-500**: `#eab308` - Gradient text highlights

---

## 🌑 Dark Backgrounds

### Slate (Primary Dark)
- **slate-700**: `#334155` - Robot/component backgrounds
- **slate-800**: `#1e293b` - Card backgrounds, borders
- **slate-900**: `#0f172a` - Primary backgrounds, cards
- **slate-950**: `#020617` - Deepest backgrounds, navbar

### Black
- **black**: `#000000` - Pure black backgrounds, overlays (with opacity)

---

## ⚪ Neutrals & Text

### Gray
- **gray-300**: `#d1d5db` - Primary body text
- **gray-400**: `#9ca3af` - Secondary text, descriptions
- **gray-500**: `#6b7280` - Tertiary text, subtle elements
- **gray-700**: `#374151` - Borders, dividers
- **gray-800**: `#1f2937` - Dark borders
- **gray-900**: `#111827` - Footer borders
- **gray-950**: `#030712` - Deepest dark elements

### White
- **white**: `#ffffff` - Headings, emphasis text, icons

---

## 🎭 Opacity Values

Use these opacity values for layering and depth:

```css
/* Backgrounds */
bg-orange-500/5   /* 5% - Very subtle tints */
bg-orange-500/10  /* 10% - Light backgrounds */
bg-orange-500/20  /* 20% - Icon backgrounds */
bg-orange-500/30  /* 30% - Medium overlays */
bg-orange-900/30  /* 30% - Dark overlays */

/* Borders */
border-orange-500/30  /* 30% - Subtle borders */
border-orange-500/50  /* 50% - Hover borders */

/* Shadows */
shadow-orange-500/10  /* 10% - Subtle shadows */
shadow-orange-500/30  /* 30% - Medium shadows */
shadow-orange-600/20  /* 20% - Button shadows */

/* Backdrops */
bg-slate-950/80   /* 80% - Navbar, footer */
bg-slate-800/50   /* 50% - Card overlays */
bg-black/50       /* 50% - Dark overlays */
```

---

## 🌈 Gradients

### Primary Gradients
```css
/* Main background */
bg-gradient-to-br from-slate-950 via-orange-950/30 to-slate-900

/* Cards */
bg-gradient-to-br from-slate-900 to-slate-950

/* Buttons */
bg-gradient-to-r from-orange-600 to-amber-600
hover:from-orange-500 hover:to-amber-500

/* Brand text */
bg-gradient-to-r from-orange-400 to-amber-500

/* Hero text accent */
bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500

/* CTA section */
bg-gradient-to-r from-orange-900/30 via-amber-900/30 to-orange-900/30

/* Section overlays */
bg-gradient-to-b from-transparent via-slate-900/50 to-transparent
bg-gradient-to-b from-transparent via-orange-950/10 to-transparent
bg-gradient-to-b from-orange-950/10 via-slate-900/50 to-transparent
```

### Icon/Component Gradients
```css
/* Icon backgrounds */
bg-gradient-to-br from-orange-500/20 to-amber-500/20

/* Logo badge */
bg-gradient-to-br from-orange-500 to-amber-600

/* Radial effects */
bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent
```

---

## 🔘 Component-Specific Colors

### Buttons
```css
/* Primary CTA */
bg-gradient-to-r from-orange-600 to-amber-600
hover:from-orange-500 hover:to-amber-500
shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50

/* Secondary */
bg-slate-800/50 hover:bg-slate-800
border-2 border-slate-700 hover:border-orange-500

/* Ghost */
bg-transparent hover:bg-white/10
border-2 border-orange-400 hover:border-orange-300
```

### Cards
```css
/* Feature cards */
bg-gradient-to-br from-slate-900 to-slate-950
border border-slate-800
hover:border-orange-500/50
hover:shadow-lg hover:shadow-orange-500/10

/* Tech stack cards */
bg-gradient-to-br from-slate-900 to-slate-950
border border-slate-800
hover:border-orange-500/50
```

### Badges/Tags
```css
bg-orange-500/10
border border-orange-500/30
text-orange-400
```

### Navbar
```css
bg-slate-950/80
backdrop-blur-xl
border-b border-orange-900/30
```

### Footer
```css
bg-slate-950/80
border-t border-slate-900
```

---

## 🎯 Animation Colors

### Pulse/Glow Effects
- **animate-pulse**: orange-400, amber-500
- **animate-bounce**: orange-400, orange-500

### Shadows (animated)
```css
shadow-lg shadow-orange-500/30
hover:shadow-orange-500/50
```

---

## 📱 Usage Examples

### Tailwind CSS
```jsx
// Heading
<h1 className="text-white">

// Body text
<p className="text-gray-300">

// Secondary text
<p className="text-gray-400">

// Primary button
<button className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">

// Card
<div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">

// Badge
<span className="bg-orange-500/10 border border-orange-500/30 text-orange-400">
```

### React/Vite Project
Add to your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#f97316',    // orange-500
          secondary: '#f59e0b',  // amber-500
          accent: '#fb923c',     // orange-400
        }
      }
    }
  }
}
```

---

## 🖼️ Visual Hierarchy

1. **Headings**: `text-white`
2. **Body text**: `text-gray-300`
3. **Secondary text**: `text-gray-400`
4. **Accents**: `text-orange-400`
5. **Emphasis**: `text-orange-500` or gradient
6. **Backgrounds**: slate-900/950 with orange overlays
7. **Interactive elements**: orange-600 → amber-600 gradients

---

## ✨ Key Design Principles

1. **Warmth**: Orange/amber creates an approachable, friendly vibe
2. **Depth**: Multiple layers of slate with varying opacity
3. **Contrast**: White text on dark slate with orange accents
4. **Cohesion**: Consistent gradient directions (to-r, to-br)
5. **Accessibility**: All text maintains WCAG AA contrast ratios

---

*Use this color scheme consistently across the NEXUS project for a unified brand experience.*
