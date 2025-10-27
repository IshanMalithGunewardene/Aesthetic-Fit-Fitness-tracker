# React + Vite + Tailwind CSS Installation Guide

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Step-by-Step Installation](#step-by-step-installation)
- [Common Issues & Solutions](#common-issues--solutions)
- [What Each Tool Does](#what-each-tool-does)
- [Verification](#verification)

---

## Overview

This guide provides a complete, tested installation process for setting up a React project with Vite as the build tool and Tailwind CSS for styling. It includes solutions to common issues encountered during installation.

---

## Prerequisites

Before starting, ensure you have:

- **Node.js** (v14 or higher) - JavaScript runtime
- **npm** or **yarn** - Package manager
- A code editor (VS Code recommended)

Check your versions:

```bash
node --version
npm --version
```

---

## Step-by-Step Installation

### Step 1: Create Vite + React Project

```bash
# Navigate to your desired directory
cd /path/to/your/projects

# Create a new Vite project with React template
npm create vite@latest my-project -- --template react

# Navigate into the project
cd my-project

# Install dependencies
npm install
```

**What happens here:**

- Vite scaffolds a new React project with a modern build configuration
- Creates essential files: `package.json`, `vite.config.js`, `index.html`, and `src/` folder
- Sets up hot module replacement (HMR) for instant updates during development

---

### Step 2: Install Tailwind CSS (Version 3 - IMPORTANT!)

```bash
# Install Tailwind CSS v3 and its dependencies
npm install -D tailwindcss@3 postcss autoprefixer
```

**⚠️ Critical Issue Avoided:**

- We specifically install Tailwind CSS **v3**, not v4
- **Why?** Tailwind v4 uses a completely different configuration system that's incompatible with the traditional PostCSS setup
- Using `tailwindcss@3` ensures compatibility with standard PostCSS configuration

**What each package does:**

- `tailwindcss@3` - The utility-first CSS framework
- `postcss` - Tool for transforming CSS with JavaScript plugins
- `autoprefixer` - PostCSS plugin to add vendor prefixes automatically

---

### Step 3: Create Configuration Files

#### 3.1 Create `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**What this does:**

- `content` - Tells Tailwind which files to scan for class names (for tree-shaking unused styles)
- `theme` - Customize Tailwind's default theme (colors, spacing, fonts, etc.)
- `plugins` - Add additional Tailwind plugins for extended functionality

**⚠️ Critical Issue Avoided:**

- Use `export default` syntax (ES modules), NOT `module.exports` (CommonJS)
- **Why?** Vite projects have `"type": "module"` in `package.json`, requiring ES module syntax

#### 3.2 Create `postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**What this does:**

- Configures PostCSS to use Tailwind CSS and Autoprefixer plugins
- Processes your CSS files through these plugins during build

**⚠️ Critical Issue Avoided:**

- Again, use `export default` (ES modules) instead of `module.exports`

---

### Step 4: Add Tailwind Directives to CSS

Open `src/index.css` and replace ALL content with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**What each directive does:**

- `@tailwind base` - Injects Tailwind's base styles (CSS reset and default styles)
- `@tailwind components` - Injects Tailwind's component classes
- `@tailwind utilities` - Injects Tailwind's utility classes (the main part)

**Note:** You may see linter warnings about "Unknown at rule @tailwind" - **this is normal** and will disappear when the dev server processes the files.

---

### Step 5: Start Development Server

```bash
npm run dev
```

The server will start, typically on `http://localhost:5173`

---

## Common Issues & Solutions

### Issue 1: "Unknown at rule @tailwind" Error

**Problem:** CSS linter doesn't recognize `@tailwind` directives  
**Solution:** This is a cosmetic warning only. The directives work correctly when processed by PostCSS. Ignore it or install a Tailwind CSS IntelliSense extension.

---

### Issue 2: Tailwind v4 Compatibility Issues

**Problem:** Installing latest Tailwind (v4) causes PostCSS errors  
**Symptoms:**

```
Error in PostCSS processing
Plugin: vite:css
```

**Solution:**

```bash
# Uninstall v4
npm uninstall tailwindcss

# Install v3 specifically
npm install -D tailwindcss@3
```

**Why this happens:** Tailwind v4 is experimental and uses a different configuration approach incompatible with traditional PostCSS setup.

---

### Issue 3: Module Syntax Mismatch

**Problem:** `require is not defined` or `export is not defined` errors  
**Solution:** Ensure your config files match your `package.json` module type:

- If `"type": "module"` → Use `export default`
- If no type field or `"type": "commonjs"` → Use `module.exports`

Most modern Vite projects use ES modules, so use `export default`.

---

### Issue 4: Styles Not Applying

**Problem:** Tailwind classes in JSX don't apply any styles  
**Checklist:**

1. ✅ Verify `@tailwind` directives are in `src/index.css`
2. ✅ Verify `import './index.css'` exists in `src/main.jsx`
3. ✅ Check `content` paths in `tailwind.config.js` include your source files
4. ✅ Restart dev server after config changes
5. ✅ Clear browser cache

---

### Issue 5: Port Already in Use

**Problem:** `Port 5173 is in use, trying another one...`  
**Solution:** Vite automatically tries the next available port (5174, 5175, etc.). Check the terminal output for the actual port.

To kill existing processes:

```bash
# Kill all Vite processes
pkill -f "vite"

# Then restart
npm run dev
```

---

## What Each Tool Does

### React

**Purpose:** JavaScript library for building user interfaces  
**Key Features:**

- Component-based architecture
- Virtual DOM for efficient updates
- Declarative syntax with JSX
- Large ecosystem and community

### Vite

**Purpose:** Next-generation frontend build tool  
**Key Features:**

- ⚡ Lightning-fast cold server start (uses native ES modules)
- 🔥 Instant Hot Module Replacement (HMR)
- 📦 Optimized production builds (uses Rollup)
- 🎯 Out-of-the-box TypeScript, JSX, and CSS support
- 🚀 Much faster than traditional bundlers (Webpack, Parcel)

**Why Vite?**

- Traditional bundlers bundle ALL code before serving → slow startup
- Vite serves unbundled code during development → instant startup
- Only bundles code for production builds

### Tailwind CSS

**Purpose:** Utility-first CSS framework  
**Key Features:**

- 🎨 Pre-built utility classes (`flex`, `p-4`, `text-center`, etc.)
- 📱 Mobile-first responsive design
- 🎯 No CSS file bloat (removes unused styles in production)
- 🔧 Highly customizable via config
- ⚡ Fast development (no context switching between HTML and CSS)

**Example:**

```jsx
// Instead of writing custom CSS:
<div className="container">
  <h1 className="title">Hello</h1>
</div>

// Use utility classes:
<div className="max-w-4xl mx-auto p-8">
  <h1 className="text-3xl font-bold text-blue-600">Hello</h1>
</div>
```

### PostCSS

**Purpose:** Tool for transforming CSS with JavaScript  
**Key Features:**

- Modular plugin system
- Processes Tailwind directives
- Adds vendor prefixes (via Autoprefixer)
- Optimizes CSS output

### Autoprefixer

**Purpose:** PostCSS plugin that adds vendor prefixes  
**Example:**

```css
/* You write: */
.example {
  display: flex;
}

/* Autoprefixer outputs: */
.example {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```

---

## Verification

### Test 1: Basic Setup

Create a test component in `src/App.jsx`:

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          React + Vite + Tailwind
        </h1>
        <button
          onClick={() => setCount(count + 1)}
          className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition"
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
```

### Test 2: Expected Results

✅ Gradient background (purple to pink)  
✅ White card with shadow  
✅ Purple heading  
✅ Styled button with hover effect  
✅ Counter increments on click

If you see these, **installation is successful!** 🎉

---

## Quick Reference Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install package-name

# Install dev dependency
npm install -D package-name

# Kill all Vite processes
pkill -f "vite"
```

---

## Best Practices

1. **Always specify Tailwind version:** Use `tailwindcss@3` until v4 is stable
2. **Match module syntax:** Config files should use same module system as `package.json`
3. **Restart dev server:** After changing config files, always restart the server
4. **Use Tailwind IntelliSense:** Install the VS Code extension for autocomplete
5. **Keep content paths updated:** Update `tailwind.config.js` when adding new file types

---

## Useful VS Code Extensions

- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
- **PostCSS Language Support** - Syntax highlighting for PostCSS
- **ES7+ React/Redux/React-Native snippets** - Quick React snippets
- **Prettier** - Code formatting (works with Tailwind classes)

---

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---

## Troubleshooting Checklist

If something isn't working:

- [ ] Did you install Tailwind v3 specifically? (`npm install -D tailwindcss@3`)
- [ ] Are config files using `export default` syntax?
- [ ] Are `@tailwind` directives in `src/index.css`?
- [ ] Is `index.css` imported in `src/main.jsx`?
- [ ] Did you restart the dev server after changes?
- [ ] Are content paths correct in `tailwind.config.js`?
- [ ] Is the browser cache cleared?
- [ ] Check browser console for errors

---

**Document Version:** 1.0  
**Last Updated:** October 27, 2025  
**Tested With:** Node v18+, npm v9+, Vite v5+, React v19+, Tailwind CSS v3.4+
