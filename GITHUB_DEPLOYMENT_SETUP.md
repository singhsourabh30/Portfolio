# 📝 GitHub & Deployment Setup Instructions

## Step 1: Prepare Your GitHub Account

If you don't have a GitHub account:
1. Go to https://github.com
2. Click "Sign up"
3. Complete registration
4. Verify email

---

## Step 2: Create Repository on GitHub

### Option A: Using GitHub Website (Recommended)

1. **Log into GitHub**: https://github.com/login
2. **Click "+"** in top-right corner
3. **Select "New repository"**
4. **Fill in details**:
   - Repository name: `portfolio` (or `portfolio-2024`)
   - Description: "Professional JARVIS-style portfolio"
   - Visibility: **Public** (important!)
   - **Do NOT** initialize with README (we already have one)
5. **Click "Create repository"**

### Option B: Using GitHub CLI

```bash
# Install GitHub CLI from https://cli.github.com
gh auth login
gh repo create portfolio --public --source=. --remote=origin --push
```

---

## Step 3: Connect Local Repository to GitHub

Copy the SSH or HTTPS URL from GitHub (green "Code" button).

### Using HTTPS (Easier first time)
```bash
cd c:\Users\Saurabh\Desktop\Portfolio
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**First time push:**
- Browser may open for authentication
- Click "Authorize"
- Or create Personal Access Token (PAT) in GitHub settings

### Using SSH (More secure, requires setup)
```bash
# First time SSH setup (one-time)
ssh-keygen -t ed25519 -C "saurabh@example.com"
# Accept defaults, press Enter for passphrase

# Add public key to GitHub
# Settings > SSH and GPG keys > New SSH key
# Paste content of ~/.ssh/id_ed25519.pub

# Then use SSH URL
git remote add origin git@github.com:YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 4: Verify Repository on GitHub

1. Go to: `https://github.com/YOUR_USERNAME/portfolio`
2. Verify you see:
   - [ ] All your project files
   - [ ] README.md displaying
   - [ ] Commit history showing
   - [ ] Branch shows "main"

---

## Step 5: Set Up Vercel for Hosting

### Option A: Connect via Vercel Dashboard (Recommended)

1. **Go to**: https://vercel.com
2. **Click "Sign Up"**
3. **Click "Continue with GitHub"**
4. **Authorize Vercel to access GitHub**
5. **Click "New Project"**
6. **Select your portfolio repository**
7. **Vercel auto-detects Next.js settings**
8. **Click "Deploy"**
9. **Wait 2-3 minutes**
10. **Get your production URL**:
    - Example: `https://portfolio-saurabh.vercel.app`

### Option B: Deploy via CLI

```bash
npm install -g vercel
vercel
# Follow the prompts
# Select GitHub account
# Select portfolio repo
# Click yes for settings
# Deploy!
```

---

## Step 6: Configure Custom Domain (Optional)

### Buy a Domain
- Namecheap.com
- GoDaddy.com
- Amazon Route 53
- Google Domains
- Cloudflare

### Add to Vercel

1. **Vercel Dashboard** → Your Project → Settings
2. **Click "Domains"**
3. **Enter your domain** (optional www)
4. **Vercel provides DNS records**:
   - Name: `@` or `www`
   - Type: `A` or `CNAME`
   - Value: (Vercel's value)
5. **Update DNS in domain registrar**
6. **Wait 24-48 hours** for DNS propagation

---

## Step 7: Enable Automatic Deployments

**Automatic deployment is enabled by default!**

### Workflow:
1. Make changes locally
2. Commit to git: `git add . && git commit -m "message"`
3. Push to GitHub: `git push origin main`
4. Vercel automatically deploys (1-3 minutes)
5. Check deployment status in Vercel dashboard

### View Deployment Status
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub Actions**: Your repo → Actions tab

---

## Step 8: Environment Variables (If Needed)

### Local Development
Create `.env.local` file (not committed):
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_ANALYTICS_ID=your-id
```

### On Vercel
1. **Vercel Dashboard** → Project → Settings → Environment Variables
2. **Add variables**:
   - Name: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://your-domain.com`
3. **Save** and redeploy

---

## Step 9: GitHub Actions (CI/CD Pipeline)

Create `.github/workflows/build.yml`:

```yaml
name: Build & Test

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
      - uses: actions/checkout@v3
      
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Build application
        run: npm run build
      
      - name: Type check
        run: npm run type-check
```

---

## Step 10: Repository Settings

### Protect Main Branch
1. **Settings** → **Branches**
2. **Add rule** for `main` branch
3. **Enable**:
   - [ ] Require pull request reviews
   - [ ] Require status checks to pass
   - [ ] Include administrators

### Enable GitHub Pages (Optional)
1. **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Select**: `main` branch
4. **Save**

---

## Troubleshooting

### Git Push Rejected
```bash
git pull origin main --rebase
git push origin main
```

### Authentication Fails
```bash
# Reset auth
git config --global credential.helper ""
git push
# Browser window opens for authentication
```

### Vercel Build Fails
1. Check **Deployment Logs** in Vercel dashboard
2. Run `npm run build` locally to test
3. Check for missing dependencies
4. Verify environment variables

### Domain Not Resolving
1. Wait 24-48 hours for DNS propagation
2. Use `nslookup your-domain.com` to check
3. Verify DNS records in registrar
4. Clear browser cache (Ctrl+Shift+Delete)

### Repository Not Appearing in Vercel
1. Check GitHub authorization
2. Refresh Vercel page
3. Re-authorize in Vercel settings

---

## Quick Command Reference

```bash
# Git
git status                        # Check status
git add .                        # Stage all files
git commit -m "message"          # Commit
git push origin main             # Push to GitHub
git pull origin main             # Pull from GitHub
git log --oneline                # View commits

# Local Development
npm run dev                       # Dev server
npm run build                     # Production build
npm start                         # Run production
npm run lint                      # Check code

# Vercel CLI
vercel                           # Deploy
vercel -prod                     # Deploy production
vercel env ls                    # List env vars
vercel logs                      # View logs
```

---

## GitHub Workflow Example

```bash
# 1. Create new branch for feature
git checkout -b feature/add-blog

# 2. Make changes
# Edit files...

# 3. Commit changes
git add .
git commit -m "Add blog section"

# 4. Push to GitHub
git push origin feature/add-blog

# 5. Create Pull Request on GitHub
# Click "Create Pull Request" button

# 6. Review & Merge (or auto-merge)
# Once approved, merge to main

# 7. Vercel auto-deploys!
```

---

## Security Best Practices

✅ **DO**:
- Keep `.env.local` private (in .gitignore)
- Use SSH keys for authentication
- Rotate personal access tokens
- Enable 2FA on GitHub
- Keep dependencies updated

❌ **DON'T**:
- Commit sensitive data
- Commit node_modules (in .gitignore)
- Share access tokens
- Use weak passwords
- Disable branch protection

---

## After Deployment

1. **Share Your Portfolio**
   - LinkedIn: Post the link
   - Resume: Add portfolio URL
   - Email signature: Include link
   - GitHub profile: Add to bio

2. **Monitor Performance**
   - Vercel Analytics
   - Google Analytics
   - Lighthouse reports

3. **Keep Portfolio Updated**
   - Add new projects
   - Update experience
   - Add certifications
   - Regular improvements

4. **Maintain Code Quality**
   - Regular npm updates
   - Run lint checks
   - Monitor security alerts
   - Fix bugs promptly

---

## Useful Links

| Service | URL |
|---------|-----|
| GitHub | https://github.com |
| Vercel | https://vercel.com |
| Next.js Docs | https://nextjs.org/docs |
| Tailwind CSS | https://tailwindcss.com |
| npm Registry | https://npmjs.com |

---

## Support

**GitHub Help**: https://docs.github.com
**Vercel Docs**: https://vercel.com/docs
**Next.js Docs**: https://nextjs.org/docs

---

**Last Updated**: February 17, 2026

Ready to deploy? Follow these steps in order! 🚀
