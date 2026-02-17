# 🎨 CONFIGURATION & CUSTOMIZATION REFERENCE

## Environment Configuration

### Development vs Production
```javascript
// Development (.env.local)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

// Production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Tailwind CSS Configuration

### Color Customization
File: `tailwind.config.ts`

```typescript
colors: {
  neon: {
    blue: '#00D9FF',      // Primary neon
    cyan: '#00FFFF',      // Secondary neon
    purple: '#A020F0',    // Accent
    green: '#39FF14',     // Success/Active
  },
  dark: {
    bg: '#0A0E27',        // Main background
    secondary: '#1a1f3a', // Secondary bg
    tertiary: '#2d3561',  // Tertiary bg
  }
}
```

### Animation Timing
```typescript
keyframes: {
  'pulse-glow': {
    '0%, 100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
    '50%': { boxShadow: '0 0 40px rgba(0, 217, 255, 0.8)' },
  },
}
```

---

## Component Customization

### HeroSection.tsx

**Modify Typing Lines:**
```typescript
const lines = [
  'Initializing Secure Cloud Environment…',
  'Identity Systems Online…',
  'Conditional Access Active…',
  'Zero-Trust Protocol Enabled.',
];
```

**Change Typing Speed:**
```typescript
}, 50);  // Change to faster/slower (milliseconds)
```

**Update Title:**
```typescript
<span className="gradient-text">YOUR NAME HERE</span>
```

**Modify Buttons:**
```typescript
<motion.button className="...">
  [YOUR BUTTON TEXT]
</motion.button>
```

---

### TerminalSection.tsx

**Add/Modify Commands:**
```typescript
const commandsList: CommandLine[] = [
  {
    command: 'PS C:\\CloudOps> Your-Command',
    output: 'Your output here',
  },
  {
    command: 'Next command',
    output: 'Command output',
  },
];
```

**Adjust Command Timing:**
```typescript
const executionTimer = setTimeout(() => {
  // Change 2000 to control execution speed
}, 2000);
```

---

### CloudArchitectureDashboard.tsx

**Add New Dashboard Cards:**
```typescript
const dashboardCards: DashboardCard[] = [
  {
    title: 'Your Metric',
    value: 'Your Value',
    description: 'Description',
    icon: '🎯',
    progress: 95,
  },
];
```

---

### ExperienceSection.tsx

**Update Work Experience:**
```typescript
const experiences: ExperienceItem[] = [
  {
    company: 'Company Name',
    title: 'Job Title',
    period: '2020 - Present',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
    ],
    technologies: ['Tech 1', 'Tech 2'],
  },
];
```

---

### ProjectsSection.tsx

**Add New Projects:**
```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Short description',
    icon: '🎯',
    details: 'Long detailed description',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
  },
];
```

---

### CertificationsSection.tsx

**Add Certifications:**
```typescript
const certifications: Certification[] = [
  {
    id: 1,
    name: 'Cert Name',
    issuer: 'Issuing Organization',
    icon: '📜',
    color: 'text-blue-400',
    glowColor: 'glow-neon-blue',
  },
];
```

---

### AIAssistant.tsx

**Add Quick Questions:**
```typescript
const quickQuestions = [
  'Your question 1',
  'Your question 2',
  'Your question 3',
];
```

**Add AI Responses:**
```typescript
const responses: { [key: string]: string } = {
  'your question': 'Your response here',
  'another question': 'Another response',
};
```

---

### AboutSection.tsx

**Update Skills:**
```typescript
const skills = [
  { category: 'Your Category', items: ['Skill 1', 'Skill 2'] },
];
```

---

### Footer.tsx

**Update Social Links:**
```typescript
const socialLinks = [
  { name: 'LinkedIn', url: 'YOUR_URL', icon: '💼' },
  { name: 'GitHub', url: 'YOUR_URL', icon: '🐙' },
  { name: 'Email', url: 'mailto:YOUR_EMAIL', icon: '📧' },
];
```

---

## Global Styles

File: `src/app/globals.css`

### Add Custom CSS Class
```css
.your-class {
  background: rgba(0, 217, 255, 0.2);
  border: 1px solid rgba(0, 217, 255, 0.3);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.your-class:hover {
  background: rgba(0, 217, 255, 0.4);
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
}
```

### Modify Scrollbar
```css
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0a0e27;
}

::-webkit-scrollbar-thumb {
  background: #00d9ff;
  box-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
}
```

---

## Animation Customization

### Framer Motion Props

**Stagger Children (List Animations):**
```typescript
variants={containerVariants}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
```

**Hover Effects:**
```typescript
whileHover={{ scale: 1.05, y: -10 }}
whileTap={{ scale: 0.95 }}
```

**View Animations (Scroll Trigger):**
```typescript
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

### Adjust Timing
```typescript
transition={{ 
  duration: 0.6,      // Total time
  delay: 0.2,         // Wait before start
  staggerChildren: 0.1 // Child delays
}}
```

---

## Performance Optimization

### Reduce Animations
In `tailwind.config.ts`:
```typescript
animation: {
  'pulse-glow': 'pulse-glow 3s infinite', // Slower
}
```

### Disable Particle Effects
In `ParticleBackground.tsx`:
```typescript
// Comment out the animate loop to disable
// return null; // To completely disable
```

### Optimize Images
```typescript
// Use next/image for optimization
import Image from 'next/image';
<Image src="..." width={200} height={200} />
```

---

## Font Customization

### Import Custom Font
In `tailwind.config.ts`:
```typescript
fontFamily: {
  mono: ['Courier New', 'monospace'],
  'your-font': ['Font Name', 'sans-serif'],
}
```

### Apply Font
```typescript
className="font-your-font"
```

---

## Meta Tags & SEO

File: `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'Your Title',
    description: 'Your description',
    images: [{ url: 'https://...' }],
  },
};
```

---

## TypeScript Configuration

File: `tsconfig.json`

### Update Path Aliases
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/utils/*": ["./src/utils/*"]
    }
  }
}
```

---

## Build Configuration

File: `next.config.js`

### Enable Experimental Features
```javascript
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: { unoptimized: true },
}
```

---

## Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_ANALYTICS_ID=your-id
```

Access in components:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---

## Deploy Configuration

### Vercel
`.vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "framework": "nextjs",
  "nodeVersion": "18.x"
}
```

### Netlify
`netlify.toml`:
```toml
[build]
command = "npm run build"
publish = ".next"
```

---

## Performance Metrics

### Check Bundle Size
```bash
npm run build
# Check .next/static size
```

### Lighthouse Score
- Open DevTools > Lighthouse
- Run audit
- Target: 90+ score

---

## Common Customizations Summary

| Task | File | Key Change |
|------|------|------------|
| Change colors | tailwind.config.ts | neon: { blue: '...' } |
| Update content | components/*.tsx | Text/arrays |
| Add projects | ProjectsSection.tsx | projects[] array |
| Modify skills | AboutSection.tsx | skills[] array |
| Update links | Footer.tsx | socialLinks[] array |
| Change animations | components/*.tsx | transition={} props |
| Update meta tags | layout.tsx | metadata object |
| Add env variables | .env.local | NEXT_PUBLIC_* |

---

## Quick Customization Checklist

- [ ] Update name in HeroSection
- [ ] Change neon colors in tailwind.config.ts
- [ ] Update terminal commands
- [ ] Add your projects
- [ ] Update your certifications
- [ ] Add social media links
- [ ] Customize AI responses
- [ ] Update about section
- [ ] Modify color scheme (optional)
- [ ] Test all sections

---

Need help? Check `SETUP_GUIDE.md` or `IMPLEMENTATION_COMPLETE.md`

Happy customizing! 🎨
