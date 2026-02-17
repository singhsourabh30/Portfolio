# 🏗️ PROJECT ARCHITECTURE

## Project Overview Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    SAURABH SINGH PORTFOLIO                      │
│                      (Next.js 14 + React)                       │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                       ENTRY POINT                                 │
├──────────────────────────────────────────────────────────────────┤
│  src/app/layout.tsx          (Root Layout)                       │
│  ├─ Meta tags                                                    │
│  ├─ Global styles (globals.css)                                 │
│  └─ Body wrapper                                                │
│                                                                   │
│  src/app/page.tsx            (Main Page - SPA)                   │
│  ├─ Navigation Bar                                               │
│  └─ Component Assembly                                           │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                      COMPONENTS LAYER                             │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  1. ParticleBackground.tsx   (Canvas API)                        │
│     ├─ useRef (canvas element)                                   │
│     ├─ useEffect (animation loop)                                │
│     └─ Particle system + connections                             │
│                                                                   │
│  2. HeroSection.tsx          (Intro with animations)             │
│     ├─ useState (typing effect)                                  │
│     ├─ useEffect (character timer)                               │
│     └─ Framer Motion (entrance animations)                       │
│                                                                   │
│  3. TerminalSection.tsx      (Command simulator)                 │
│     ├─ useState (command queue)                                  │
│     ├─ useEffect (execution timeline)                            │
│     └─ PowerShell styling                                        │
│                                                                   │
│  4. CloudArchitectureDashboard.tsx (Metrics)                     │
│     ├─ useState (dynamic data)                                   │
│     ├─ Progress bars (SVG/CSS)                                   │
│     └─ Real-time updates                                         │
│                                                                   │
│  5. ExperienceSection.tsx    (Work history)                      │
│     ├─ Arrays (experience data)                                  │
│     ├─ Map over items                                            │
│     └─ Hover animations                                          │
│                                                                   │
│  6. ProjectsSection.tsx      (Portfolio projects)                │
│     ├─ useState (selected project)                               │
│     ├─ Modal dialog (AnimatePresence)                            │
│     └─ Project details                                           │
│                                                                   │
│  7. CertificationsSection.tsx (Credentials)                      │
│     ├─ Arrays (cert data)                                        │
│     ├─ Holographic effects                                       │
│     └─ Rotation animations                                       │
│                                                                   │
│  8. AIAssistant.tsx          (Chatbot)                           │
│     ├─ useState (messages, input)                                │
│     ├─ useEffect (thinking delay)                                │
│     ├─ Quick questions                                           │
│     └─ Message handling                                          │
│                                                                   │
│  9. AboutSection.tsx         (Skills & profile)                  │
│     ├─ Skill categories                                          │
│     ├─ Competencies grid                                         │
│     └─ Principles display                                        │
│                                                                   │
│  Footer.tsx                  (Status & links)                    │
│  ├─ useEffect (status updates)                                   │
│  ├─ Social links                                                 │
│  └─ System indicators                                            │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                    STYLING & ANIMATION LAYER                      │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  tailwind.config.ts          (Tailwind configuration)            │
│  ├─ Color scheme             (Neon blue, cyan, green)            │
│  ├─ Custom animations        (pulse-glow, float, typing)         │
│  ├─ Extended theme           (shadows, borders)                  │
│  └─ Responsive breakpoints                                       │
│                                                                   │
│  globals.css                 (Global styles)                     │
│  ├─ Base styles              (*, html, body)                     │
│  ├─ Utility classes          (.glass, .glow-neon-blue)           │
│  ├─ Animations               (@keyframes)                        │
│  ├─ Scrollbar styling                                            │
│  └─ Custom effects                                               │
│                                                                   │
│  Framer Motion               (Animations library)                │
│  ├─ motion components        (motion.div, motion.button)         │
│  ├─ Variants                 (initial, animate, exit)            │
│  ├─ Transitions              (duration, delay, ease)             │
│  ├─ Gesture animations       (whileHover, whileTap)              │
│  ├─ Scroll animations        (whileInView)                       │
│  └─ Layout animations        (AnimatePresence)                   │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                   CONFIGURATION LAYER                             │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  tsconfig.json               (TypeScript config)                 │
│  ├─ Compiler options         (target, lib, module)               │
│  ├─ Path aliases             (@/* → ./src/*)                     │
│  └─ Incremental compilation                                      │
│                                                                   │
│  next.config.js              (Next.js config)                    │
│  ├─ Image optimization                                           │
│  └─ Build settings                                               │
│                                                                   │
│  tailwind.config.ts          (Already listed above)              │
│                                                                   │
│  postcss.config.js           (PostCSS config)                    │
│  ├─ Tailwind CSS processing                                      │
│  └─ Autoprefixer                                                 │
│                                                                   │
│  .eslintrc.json              (Linting rules)                     │
│  ├─ Next.js recommended                                          │
│  └─ React best practices                                         │
│                                                                   │
│  package.json                (Dependencies)                      │
│  ├─ Production deps          (next, react, framer-motion)        │
│  ├─ Dev deps                 (tailwindcss, typescript)           │
│  └─ Scripts                  (dev, build, start, lint)           │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                    DATA FLOW ARCHITECTURE                         │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  User Interaction                                                 │
│  │                                                                │
│  ├─> Click Button                                                │
│  │   ├─ Event Handler triggered                                  │
│  │   ├─ Component state updated (useState)                       │
│  │   └─ Render triggered (re-render)                             │
│  │                                                                │
│  ├─> Scroll Page                                                 │
│  │   ├─ Intersection Observer detects (whileInView)              │
│  │   ├─ Animation triggered (Framer Motion)                      │
│  │   └─ Visual feedback rendered                                 │
│  │                                                                │
│  ├─> Hover Element                                               │
│  │   ├─ whileHover detected                                      │
│  │   ├─ CSS transition applied                                   │
│  │   └─ Animation plays                                          │
│  │                                                                │
│  └─> Resize Window                                               │
│      ├─ useEffect listener triggered                             │
│      ├─ Responsive breakpoints checked                           │
│      └─ Layout recalculates                                      │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                     DEPLOYMENT ARCHITECTURE                       │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Development                 npm run dev                          │
│  ├─ Local: localhost:3000                                        │
│  └─ Hot reload enabled                                           │
│                                                                   │
│  Build                       npm run build                        │
│  ├─ Next.js compilation                                          │
│  ├─ Optimization                                                 │
│  └─ .next folder created                                         │
│                                                                   │
│  Production                  npm start                            │
│  ├─ Vercel (recommended)                                         │
│  ├─ Netlify                                                      │
│  ├─ AWS Amplify                                                  │
│  └─ Self-hosted (port 3000)                                      │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## Component Dependency Graph

```
page.tsx (Main Entry)
│
├─ Navigation Bar (Static)
│
├─ ParticleBackground
│  └─ Canvas & requestAnimationFrame
│
├─ HeroSection
│  ├─ useState (typing)
│  ├─ useEffect (timer)
│  └─ motion components (Framer)
│
├─ TerminalSection
│  ├─ useState (commands)
│  ├─ useEffect (execution)
│  └─ motion components
│
├─ CloudArchitectureDashboard
│  ├─ useState (metrics)
│  ├─ SVG Progress (circular)
│  └─ motion components
│
├─ ExperienceSection
│  ├─ Data arrays
│  └─ motion components
│
├─ ProjectsSection
│  ├─ useState (selected)
│  ├─ AnimatePresence (modal)
│  └─ motion components
│
├─ CertificationsSection
│  ├─ Data arrays
│  └─ motion components
│
├─ AboutSection
│  ├─ Data arrays
│  └─ motion components
│
├─ Footer
│  ├─ useState (status)
│  ├─ useEffect (updates)
│  └─ motion components
│
└─ AIAssistant
   ├─ useState (messages, input)
   ├─ useEffect (thinking)
   ├─ AnimatePresence (modal)
   └─ motion components
```

---

## State Management Architecture

```
Component States:

HeroSection:
  - displayedText (string)
  - currentLineIndex (number)

TerminalSection:
  - commands (array)
  - currentCommandIndex (number)

CloudArchitectureDashboard:
  - cards (array)

ProjectsSection:
  - selectedProject (number | null)

AIAssistant:
  - isOpen (boolean)
  - messages (array)
  - inputValue (string)
  - isThinking (boolean)

Footer:
  - systemStatus (object with metrics)

Note: No global state needed (self-contained components)
```

---

## Animation Architecture

```
Animation Types:

1. Entrance (initial → animate)
   - Hero title, sections
   - Fade-in + slide-in combo

2. Scroll-Triggered (whileInView)
   - Cards, titles
   - Triggered on viewport entry

3. Hover States (whileHover)
   - Buttons, cards, links
   - Scale, shadow, border changes

4. Stagger (staggerChildren)
   - Lists, grids
   - Timed child animations

5. Continuous (animate loop)
   - Particles, pulsing dots
   - requestAnimationFrame

6. Interactive (whileTap, whileDrag)
   - Buttons, sliders
   - Feedback on user action
```

---

## File Size Reference

```
Estimated Bundle Sizes:

Source Code:
  - Components: ~2000 lines (TypeScript)
  - Styles: ~500 lines (CSS + Tailwind)
  - Config: ~300 lines
  Total: ~2800 lines

Build Output (after optimization):
  - HTML: ~50KB
  - JS (main): ~150KB (gzipped: ~50KB)
  - CSS: ~80KB (gzipped: ~20KB)
  - Total: ~230KB (gzipped: ~70KB)

Note: Actual size depends on dependencies tree
```

---

## Performance Optimization Points

```
Optimization Strategies:

1. Canvas Particles
   ├─ GPU acceleration via transform
   ├─ RequestAnimationFrame timing
   └─ Efficient redraw algorithm

2. Animations
   ├─ GPU-accelerated transforms
   ├─ Will-change CSS hint
   └─ Reduced motion support

3. Code Splitting
   ├─ Dynamic imports ready
   └─ Route-based splitting

4. Images
   ├─ Next/image ready
   └─ Emoji icons (no external deps)

5. Responsive
   ├─ Mobile-first CSS
   └─ Tailwind breakpoints
```

---

## Browser Compatibility

```
Supported Browsers:

✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ Mobile Chrome
✅ Mobile Safari

Features Used:
- Canvas API (particles)
- CSS Grid/Flex (layout)
- CSS Transforms (animations)
- Intersection Observer (scroll)
- requestAnimationFrame (timing)
- CSS Custom Properties (variables)
```

---

## Security Architecture

```
Security Measures:

Input:
  ├─ React auto-escaping (XSS protection)
  └─ No dangerous HTML parsing

Dependencies:
  ├─ Minimal dependencies (6 prod)
  ├─ All popular, maintained packages
  └─ No security vulnerabilities

Environment:
  ├─ No hardcoded secrets
  ├─ No API keys in code
  └─ .env.local for sensitive data

CSP:
  ├─ Safe for Content Security Policy
  └─ No unsafe inline scripts
```

---

This architecture ensures:
- ✅ Scalability (component-based)
- ✅ Maintainability (clear structure)
- ✅ Performance (optimized)
- ✅ Type Safety (TypeScript)
- ✅ Accessibility (semantic HTML)
