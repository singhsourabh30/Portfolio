# 🚀 SAURABH SINGH PORTFOLIO - SETUP GUIDE

## Complete Installation Instructions

### Prerequisites

- **Windows 10+** or **macOS** or **Linux**
- **Internet Connection**
- **Administrator Access** (for Node.js installation)

---

## Step 1: Install Node.js

Node.js is required to run this project. Follow the steps for your operating system:

### Windows
1. Visit: https://nodejs.org/
2. Download the **LTS (Long Term Support)** version (recommended)
3. Run the installer and follow the setup wizard
4. Accept the default settings
5. Restart your computer after installation

### macOS
```bash
# Using Homebrew (recommended)
brew install node

# Or download from https://nodejs.org/
```

### Linux
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install nodejs npm

# Or download from https://nodejs.org/
```

**Verify Installation:**
```bash
node --version
npm --version
```

---

## Step 2: Install Project Dependencies

### Option A: Automated Setup (Recommended)

#### Windows Users:
1. Open the Portfolio folder in File Explorer
2. Double-click `setup.bat`
3. Wait for installation to complete
4. Follow the on-screen instructions

#### macOS/Linux Users:
```bash
cd ~/Desktop/Portfolio
chmod +x setup.sh
./setup.sh
```

### Option B: Manual Installation

```bash
# Navigate to project directory
cd ~/Desktop/Portfolio

# Install dependencies
npm install

# Verify installation
npm run dev --dry-run
```

---

## Step 3: Run the Development Server

After dependencies are installed:

```bash
cd ~/Desktop/Portfolio
npm run dev
```

**Expected Output:**
```
> next dev
  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2s
```

**Open in Browser:**
- Visit: http://localhost:3000

---

## Step 4: Build for Production

When ready to deploy:

```bash
# Build the project
npm run build

# Start production server
npm start
```

---

## 📦 Project Dependencies

All required packages will be installed automatically:

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.16",
    "three": "^r128"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1",
    "typescript": "^5.3.3"
  }
}
```

---

## 🛠️ Troubleshooting

### Issue: "npm is not recognized"
**Solution:**
- Ensure Node.js is installed correctly
- Restart your computer after Node.js installation
- Add Node.js to your system PATH

### Issue: Port 3000 is already in use
**Solution:**
```bash
# Kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

Then restart:
```bash
npm run dev
```

### Issue: Installation fails with network error
**Solution:**
- Check your internet connection
- Try clearing npm cache:
```bash
npm cache clean --force
npm install
```

### Issue: Out of memory error
**Solution:**
```bash
npm --max-old-space-size=4096 install
```

---

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── ParticleBackground.tsx
│       ├── HeroSection.tsx
│       ├── TerminalSection.tsx
│       ├── CloudArchitectureDashboard.tsx
│       ├── ExperienceSection.tsx
│       ├── ProjectsSection.tsx
│       ├── CertificationsSection.tsx
│       ├── AboutSection.tsx
│       ├── AIAssistant.tsx
│       └── Footer.tsx
├── public/                      # Static assets
├── package.json                 # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind config
├── README.md                   # Documentation
└── setup.bat / setup.sh        # Setup scripts
```

---

## 🎨 Customization Guide

### Modify Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  neon: {
    blue: '#00D9FF',      // Change neon blue
    cyan: '#00FFFF',      // Change cyan
    green: '#39FF14',     // Change green
  }
}
```

### Update Content
- **Hero Section**: Edit `src/components/HeroSection.tsx`
- **Terminal Commands**: Edit `src/components/TerminalSection.tsx`
- **Experience**: Edit `src/components/ExperienceSection.tsx`
- **Projects**: Edit `src/components/ProjectsSection.tsx`
- **AI Responses**: Edit `src/components/AIAssistant.tsx`

### Customize Social Links
Update `src/components/Footer.tsx`:
```typescript
const socialLinks = [
  { name: 'LinkedIn', url: 'YOUR_URL', icon: '💼' },
  { name: 'GitHub', url: 'YOUR_URL', icon: '🐙' },
  { name: 'Email', url: 'mailto:YOUR_EMAIL', icon: '📧' },
];
```

---

## 🚀 Deployment

### Vercel (Recommended)
1. Sign up at: https://vercel.com
2. Connect your GitHub repository
3. Vercel will auto-deploy on every push

### Alternative Platforms
- **Netlify**: https://netlify.com
- **AWS Amplify**: https://aws.amazon.com/amplify
- **Docker**: Create a `Dockerfile` for containerized deployment

---

## 📊 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting checks
npm run lint

# Format code
npm run format
```

---

## 🔒 Environment Variables

Create a `.env.local` file in the project root (optional):

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 📚 Documentation & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Three.js**: https://threejs.org/

---

## 🆘 Support & Help

If you encounter issues:

1. **Check the troubleshooting section** above
2. **Clear npm cache**: `npm cache clean --force`
3. **Delete node_modules**: `rm -rf node_modules` (or use File Explorer)
4. **Reinstall**: `npm install`
5. **Restart VS Code** and try again

---

## ✅ Verification Checklist

- [ ] Node.js installed (`node --version` shows v18+)
- [ ] npm installed (`npm --version` shows v9+)
- [ ] Dependencies installed (no errors during `npm install`)
- [ ] Dev server starts (`npm run dev` shows localhost:3000)
- [ ] Portfolio loads in browser
- [ ] All sections are visible (scroll through the page)
- [ ] Animations are smooth
- [ ] JARVIS AI chat opens (floating icon bottom-right)

---

## 🎉 You're All Set!

Your JARVIS-style portfolio is now ready. Visit:
- **Development**: http://localhost:3000
- **Production**: Deploy to Vercel or your chosen platform

Happy coding! 🚀

---

**Last Updated**: February 16, 2026
**Version**: 1.0.0
