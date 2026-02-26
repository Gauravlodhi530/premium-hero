# Premium Hero - Cyber Terminal Landing Page

A high-impact, production-ready landing page with cyber-themed aesthetics, dynamic headline rotation, and glitch effects.

## Features

- 🎯 **Dynamic Headlines** - Random headline selection on each page load
- ⚡ **Glitch Effects** - Real-time text glitching on action words
- 🎨 **Cyber Aesthetics** - Terminal-style UI with neon effects
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🚀 **Performance Optimized** - Code splitting and lazy loading
- ♿ **Accessible** - Semantic HTML and ARIA support
- 🎭 **Smooth Animations** - Powered by Framer Motion & GSAP

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **ESLint** - Code quality

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
premium-hero/
├── src/
│   ├── App.jsx          # Main component with animations
│   ├── App.css          # Component styles
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── public/              # Static assets
└── vite.config.js       # Vite configuration
```

## Customization

### Headlines

Edit the arrays in `src/App.jsx`:

```javascript
const mainHeadlines = [
  "HIMMAT HAI TO KAR NA",
  "DARR LAG RAHA HAI?",
  // Add more...
];

const headlines = [
  "REGISTER",
  "PROVE IT",
  // Add more...
];
```

### Colors & Theme

Modify Tailwind classes in `src/App.jsx` or update `tailwind.config.js`.

### Glitch Timing

Adjust the interval in `src/App.jsx`:

```javascript
const glitchInterval = setInterval(() => {
  // Glitch logic
}, 3000); // Change timing here
```

## Performance

- Code splitting for vendor and animation libraries
- CSS minification enabled
- Optimized bundle size with tree shaking
- Lazy loading for heavy components

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Modern mobile browsers

## License

MIT

## Contributing

Pull requests are welcome. For major changes, please open an issue first.
