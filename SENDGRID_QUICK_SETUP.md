# 🚀 SENDGRID SETUP - QUICK START

**Status:** Portfolio API routes updated and ready! Just need your SendGrid API key.

---

## ⚡ Quick Setup (5 minutes)

### Step 1: Create Free SendGrid Account
1. Go to: https://sendgrid.com/en-us
2. Click: **Sign Up**
3. Email: Use your email (or saurabhsingh82396@gmail.com)
4. Create password
5. Verify email

### Step 2: Create API Key
1. Login to SendGrid
2. Go to: **Settings → API Keys**
3. Click: **Create API Key**
4. Name: `Portfolio Contact Form`
5. Select: **Full Access** (or just Mail Send)
6. Click: **Create & Copy**
7. **SAVE THIS - shown only once!**

Example: `SG.abc123xyz...`

### Step 3: Add to Vercel
1. Go to: https://vercel.com/projects
2. Select: **Portfolio** project
3. Go to: **Settings → Environment Variables**
4. Add these 3 variables:

```
Name: SENDGRID_API_KEY
Value: SG.abc123xyz... (your key from Step 2)
Environments: Select all
Save

Name: SENDGRID_FROM_EMAIL
Value: contact@saurabh-singh.portfolio (or noreply@yourdomain.com)
Environments: Select all
Save

Name: CONTACT_EMAIL_TO
Value: saurabhsingh82396@gmail.com
Environments: Select all
Save
```

### Step 4: Done! ✅
Redeploy happens automatically. Forms will now send emails!

---

## 🧪 Test It

1. Visit: saurabh.singhportfolio.vercel.app
2. Fill contact form
3. Check email: saurabhsingh82396@gmail.com
4. You'll get the submission email!

---

## 📧 What Email Will Look Like

**From:** Saurabh Singh Portfolio <noreply@portfolio.com>
**To:** Your email
**Subject:** New Contact: [Subject from form]

Body will contain:
- Name
- Email  
- Phone
- Company
- Message
- Timestamp
- IP Address

Plus you'll get a **confirmation email** to the visitor's email!

---

## ⚠️ If Images Don't Load

SendGrid sometimes needs domain verification. Free account works but:
- Create account ✅ (instant)
- Send emails ✅ (instant)
- Verification optional (for custom domain)

For now, use default SendGrid domain and it will work!

---

## 🔗 Links

- SendGrid: https://sendgrid.com
- Your Portfolio: saurabh.singhportfolio.vercel.app
- Vercel Dashboard: https://vercel.com/projects

---

**Time spent:** 5 minutes
**Result:** Fully working email system
**Cost:** FREE (100 emails/day free tier)

