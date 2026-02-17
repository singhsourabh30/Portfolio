# 🚀 Complete Deployment & GitHub Setup Guide

## Part 1: Local Git Setup

### Step 1: Configure Git (First Time Only)
```bash
git config --global user.name "Saurabh Singh"
git config --global user.email "your-email@example.com"
```

### Step 2: Initialize Repository
```bash
cd c:\Users\Saurabh\Desktop\Portfolio
git init
git add .
git commit -m "Initial commit: JARVIS-style portfolio with TypeScript, Tailwind CSS, and Framer Motion"
```

---

## Part 2: Create GitHub Repository

1. **Go to GitHub**: https://github.com/new
2. **Create repository named**: `portfolio` (or `portfolio-2024`)
3. **Set as Public** (so it's hosted)
4. **Do NOT initialize with README** (we already have one)
5. **Click "Create repository"**

---

## Part 3: Connect to GitHub & Push

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

On first push, GitHub may ask for authentication:
- Click "Authorize with GitHub"
- Or use a Personal Access Token (PAT)

---

## Part 4: Deploy to Vercel (Free Hosting)

### Option 1: Vercel Dashboard (Easiest)

1. **Go to**: https://vercel.com/new
2. **Sign up** with GitHub
3. **Select** your portfolio repository
4. **Click Import**
5. **Vercel will auto-detect** Next.js and configure it
6. **Wait 2-3 minutes** for deployment
7. **Access at**: `https://portfolio-YOUR_USERNAME.vercel.app`

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
# Follow prompts and deploy
```

---

## Part 5: Configure Custom Domain (Optional)

1. **Buy domain** (Namecheap, GoDaddy, Route53, etc.)
2. **In Vercel dashboard**: Project → Settings → Domains
3. **Add your domain**
4. **Vercel will provide DNS records**
5. **Update your domain registrar's DNS**

---

## Part 6: Environment Variables (If Needed)

Create `.env.local` file in root:
```
# Example - add your actual values
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Part 7: Continuous Deployment

✅ **Every push to GitHub** automatically triggers Vercel to rebuild and deploy!

Example workflow:
```bash
# Make changes
git add .
git commit -m "Update portfolio content"
git push origin main

# Vercel deploys automatically within 30 seconds!
```

---

## Part 8: Monitor Deployments

1. **Vercel Dashboard**: https://vercel.com/dashboard
2. **See deployment status**
3. **View build logs**
4. **Rollback if needed**

---

## Part 9: Custom Domain Setup (Example with Namecheap)

1. **Vercel provides**:
   - `A` record: `76.76.19.132`
   - `CNAME` record: `cname.vercel-dns.com`

2. **Namecheap Dashboard**:
   - Go to Advanced DNS
   - Add A record pointing to `76.76.19.132`
   - Add CNAME for `www` pointing to `cname.vercel-dns.com`

3. **Wait 24-48 hours** for DNS propagation

---

## Part 10: GitHub Actions (Optional CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Part 11: Security Best Practices

✅ **Secrets Management**:
- Never commit `.env.local`
- Use GitHub Secrets for sensitive data
- Vercel has built-in secret management

✅ **Branching Strategy**:
```bash
# Development
git checkout -b develop

# Features
git checkout -b feature/new-component

# Always merge to main for production
```

---

## Troubleshooting

### Push is rejected
```bash
git pull origin main --rebase
git push origin main
```

### Vercel build fails
- Check build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Verify all dependencies in package.json

### Domain not resolving
- Wait 24-48 hours for DNS propagation
- Use `nslookup your-domain.com` to check

### Port conflicts locally
```bash
npx kill-port 3000
npm run dev
```

---

## Quick Commands Reference

```bash
# Git
git init                          # Initialize
git add .                         # Stage all
git commit -m "message"          # Commit
git push origin main             # Push to GitHub
git pull origin main             # Pull from GitHub

# Development
npm run dev                       # Local dev server
npm run build                     # Build for production
npm run lint                      # Check code quality

# Vercel
vercel                            # Deploy with CLI
vercel --prod                     # Deploy to production
vercel env ls                     # List environment variables
```

---

## Project URLs After Deployment

- **Local**: http://localhost:3000
- **Vercel**: https://portfolio-username.vercel.app
- **Custom Domain**: https://your-domain.com
- **GitHub Repo**: https://github.com/username/portfolio
- **GitHub Pages** (if enabled): https://username.github.io/portfolio

---

## Next Steps After Deployment

1. ✅ Share your GitHub link
2. ✅ Update Resume with portfolio URL
3. ✅ Add to LinkedIn
4. ✅ Monitor Vercel Analytics
5. ✅ Continue improving portfolio

---

**🎉 You're now ready to deploy your professional portfolio!**
