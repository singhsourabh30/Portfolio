# 🌐 Custom Domain Setup Guide

## Your Current Portfolio URL
🔗 **Primary URL**: https://portfolio-lime-sigma-ap7105r3f4.vercel.app

## 📋 Custom Domain Setup (saurabh.singh.portfolio.vercel.app)

### Method 1: Simple Vercel Subdomain (Recommended - No Cost)
To set your portfolio to be accessible at `https://saurabh.singh.portfolio.vercel.app`:

#### Step 1: Go to Vercel Dashboard
1. Visit https://vercel.com/dashboard
2. Locate your "Portfolio" project
3. Click on the project to open it

#### Step 2: Add Custom Domain
1. Click on the **Settings** tab
2. Go to **Domains** section
3. Click **+ Add Domain**
4. Enter: `saurabh.singh.portfolio.vercel.app`
5. Click "Add" to confirm

#### Step 3: Wait for Verification
- Vercel will verify the domain (usually instant for vercel.app subdomains)
- Once verified, your portfolio will be live at the custom domain

### Method 2: Custom Domain (Your Own Domain)
If you own a domain like `saurabh.singh.portfolio` or `saurabh-singh.dev`:

1. Go to your domain registrar (GoDaddy, Namecheap, Route 53, etc.)
2. Update DNS settings to point to Vercel
3. In Vercel Dashboard > Settings > Domains
4. Enter your custom domain
5. Vercel will provide DNS records to add at your registrar
6. Wait for DNS propagation (5 minutes to 48 hours)

### Method 3: Using Vercel CLI
```bash
# Set custom domain via CLI
vercel domains add saurabh.singh.portfolio.vercel.app

# Verify domain
vercel domains inspect saurabh.singh.portfolio.vercel.app
```

## 🚀 Current Deployment Status

| Field | Value |
|-------|-------|
| **Framework** | Next.js 14.2.35 |
| **Language** | TypeScript 5.3.3 |
| **Hosting** | Vercel |
| **Repository** | https://github.com/singhsourabh30/Portfolio |
| **Primary URL** | https://portfolio-lime-sigma-ap7105r3f4.vercel.app |

## ✨ New Features Deployed

### 1. 🎤 AI Voice Assistant
- Click the voice button in the bottom-right corner
- Ask questions about Saurabh's experience, projects, and skills
- AI responds with voice and text
- Supports natural language questions

### 2. 📧 Professional Contact Form
- Email, phone, company fields
- Subject and message input
- Smooth form submission with feedback
- Auto-generated email integration ready

### 3. 💬 Feedback Form
- Easy feedback submission
- Star rating system
- Accessible via bottom-right button
- Helps improve portfolio

### 4. ✨ Enhanced Animations
- Smooth transitions throughout
- Floating elements
- Pulse effects
- Glow animations
- Professional slide-in effects

## 🔧 Environment Variables
Set in your `.env.local` or Vercel project settings:

```env
NEXT_PUBLIC_SITE_URL=https://saurabh.singh.portfolio.vercel.app
```

## 📱 Features Working
✅ Hero Section - Animated intro with typing effect
✅ Terminal Simulator - Interactive PowerShell UI
✅ Cloud Dashboard - Real-time metrics display
✅ Experience Timeline - Professional work history
✅ Projects Showcase - Interactive project cards
✅ Certifications Grid - Professional credentials
✅ About Section - Bio and skill showcase
✅ AI Voice Assistant - Recruiter communication
✅ Contact Form - Professional contact section
✅ Feedback Form - User feedback collection
✅ Particle Background - Animated background
✅ Responsive Design - Mobile, tablet, desktop

## 🔄 Auto-Deployment
- Push code to GitHub `main` branch
- Vercel automatically detects changes
- Deployment starts within seconds
- Live within 1-2 minutes

### Example:
```bash
git add .
git commit -m "Update portfolio features"
git push origin main
# Portfolio automatically deploys to Vercel
```

## 📊 Performance Tips
- Keep components lightweight
- Use lazy loading for heavy components
- Optimize images
- Monitor bundle size

## 🆘 Troubleshooting

### Voice Assistant Not Working
- Check browser supports Web Speech API
- Allow microphone permissions
- Try in Chrome or Firefox
- Check browser console for errors

### Contact Form Not Submitting
- Check internet connection
- Verify form fields are filled
- Contact form logs to console (integrate with backend)
- Review browser developer tools

### Domain Not Resolving
- Clear browser DNS cache
- Wait for DNS propagation (up to 48 hours)
- Check Vercel project settings
- Verify domain is in correct project

## 🎯 Next Steps

1. **Set Custom Domain** (This Guide)
   - Go to Vercel Settings > Domains
   - Add `saurabh.singh.portfolio.vercel.app` or your custom domain

2. **Customize Contact Info**
   - Edit [ContactSection.tsx](src/components/ContactSection.tsx)
   - Update phone number and links
   - Modify email address
   - Connect form to backend/email service

3. **Connect Forms to Backend**
   - Set up API endpoint for contact form
   - Set up feedback collection system
   - Add email integration

4. **Share Portfolio**
   - Update resume with portfolio link
   - Update LinkedIn profile
   - Share with recruiters and peers

## 📞 Support
For issues or questions about setup:
- Check Vercel documentation: https://vercel.com/docs
- Check Next.js documentation: https://nextjs.org/docs
- GitHub Issues: https://github.com/singhsourabh30/Portfolio/issues

---

**Last Updated**: February 17, 2026
**Portfolio Version**: 2.0
**All Systems**: Operational ✅
