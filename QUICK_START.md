# ⚡ QUICK START GUIDE

## 5-Minute Setup

### 1️⃣ Install Node.js (If needed)
- Download from: https://nodejs.org/ (LTS version)
- Run installer, restart computer
- Verify: `node --version` (should show v18+)

### 2️⃣ Install Dependencies
```bash
cd c:\Users\Saurabh\Desktop\Portfolio
npm install
```

Or use the setup script:
- **Windows**: Double-click `setup.bat`
- **PowerShell**: Run `./setup.ps1`

### 3️⃣ Start Development Server
```bash
npm run dev
```

### 4️⃣ Open in Browser
Visit: **http://localhost:3000**

---

## 🎨 Quick Customization

### Change Name
Edit `src/components/HeroSection.tsx` - Line 65:
```typescript
<span className="gradient-text">YOUR NAME HERE</span>
```

### Update Terminal Commands
Edit `src/components/TerminalSection.tsx` - Line 20-30:
```typescript
const commandsList: CommandLine[] = [
  {
    command: 'Your command here',
    output: 'Your output here',
  },
  // ...
];
```

### Add Social Links
Edit `src/components/Footer.tsx` - Line 75:
```typescript
const socialLinks = [
  { name: 'LinkedIn', url: 'YOUR_URL', icon: '💼' },
  { name: 'GitHub', url: 'YOUR_URL', icon: '🐙' },
];
```

### Change Colors
Edit `tailwind.config.ts` - Line 10-15:
```typescript
colors: {
  neon: {
    blue: '#YOUR_HEX_COLOR',
    cyan: '#YOUR_HEX_COLOR',
  }
}
```

---

## 📦 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Check for errors
```

---

## 🚀 Deploy in 3 Steps

### Vercel (Easiest)
1. Sign up: https://vercel.com
2. Connect your GitHub repo
3. Deploy automatically

### Netlify
1. Connect GitHub repo
2. Deploy automatically

### Self-Hosted
```bash
npm run build
npm start
# Server runs on port 3000
```

---

## 🆘 Troubleshooting

**npm not found?**
- Restart your computer after Node.js installation

**Port 3000 in use?**
```bash
# Windows: Find and kill process
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

**Installation fails?**
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

---

## 📚 Full Documentation

- **Setup Guide**: See `SETUP_GUIDE.md`
- **Implementation Details**: See `IMPLEMENTATION_COMPLETE.md`
- **Project README**: See `README.md`

---

## ✅ Verification

After `npm run dev`, verify:
- [ ] Console shows "Ready in Xs"
- [ ] Browser opens to localhost:3000
- [ ] Page loads without errors
- [ ] Particles animate in background
- [ ] Typing effect plays in hero
- [ ] Terminal section shows commands
- [ ] JARVIS chat icon appears (bottom-right)
- [ ] Scroll shows all sections

---

**Ready?** Run: `npm install && npm run dev`

Happy coding! 🚀
