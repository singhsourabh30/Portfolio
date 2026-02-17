# 🔐 Email Integration & Environment Setup Guide

## 📧 Email Integration for Form Submissions

Your portfolio now captures all contact and feedback form submissions. Here's how to set it up for email delivery.

---

## 🎯 Current Setup Status

### What's Ready ✅
- API endpoints created: `/api/contact` and `/api/feedback`
- Form validation implemented
- Data capture working
- Console logging functional
- Infrastructure for email delivery ready

### What's Needed ⏳
- Email service provider account
- API credentials
- Environment variables configured

---

## 📋 Email Service Options

### Option 1: SendGrid (RECOMMENDED) ⭐

**Why SendGrid?**
- Free tier: 100 emails/day
- Excellent documentation
- Reliable delivery
- Good support
- Easy integration

**Setup Steps:**

#### 1. Create Account
```
Go to: https://sendgrid.com/en-us
Click: Sign Up
Enter: Email, Password
Verify: Email verification
```

#### 2. Get API Key
```
1. Login to SendGrid
2. Go to: Settings → API Keys
3. Click: Create API Key
4. Name: "Portfolio-FormSubmissions"
5. Copy: The API key
6. Save: Keep it safe (shown only once)
```

#### 3. Create Sender Email
```
1. Go to: Settings → Sender Authentication
2. Choose: Domain Authentication (Better)
3. Add your domain (if you have one)
OR
4. Use: Single Sender Verification
5. Email: noreply@yourdomain.com (or your Gmail)
6. Verify: Click link in email
```

#### 4. Update .env.local
Create file: `.env.local` in project root

```env
# SendGrid Configuration
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@example.com
SENDGRID_TO_EMAIL=saurabhsingh82396@gmail.com
SENDGRID_FROM_NAME=Saurabh Singh Portfolio
```

#### 5. Install SendGrid Package
```bash
npm install @sendgrid/mail
```

#### 6. Update API Route
Replace content of `src/app/api/contact/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
Dear Saurabh,

You have received a new contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}

Subject: ${subject}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString()}
From IP: ${request.headers.get('x-forwarded-for') || 'Unknown'}
`;

    // Send email using SendGrid
    await sgMail.send({
      to: process.env.SENDGRID_TO_EMAIL!,
      from: process.env.SENDGRID_FROM_EMAIL!,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: emailContent,
      html: `
<html>
  <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h2 style="color: #00d9ff; border-bottom: 2px solid #00d9ff; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      
      <div style="margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      </div>
      
      <div style="margin: 20px 0;">
        <h3 style="color: #00d9ff;">Subject: ${subject}</h3>
        <p style="line-height: 1.6; white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 4px;">
${message}
        </p>
      </div>
      
      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
        <p>Submitted: ${new Date().toLocaleString()}</p>
        <p><a href="mailto:${email}" style="color: #00d9ff; text-decoration: none;">Reply to ${name}</a></p>
      </div>
    </div>
  </body>
</html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully. Thank you for reaching out!',
        submission: {
          name,
          email,
          subject,
          receivedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'Contact API is running',
    endpoint: '/api/contact',
    method: 'POST',
    emailService: 'SendGrid',
  });
}
```

#### 7. Do the same for Feedback
Update `src/app/api/feedback/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { rating, feedback } = body;

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    if (!feedback || feedback.trim().length < 3) {
      return NextResponse.json(
        { error: 'Feedback must be at least 3 characters' },
        { status: 400 }
      );
    }

    const stars = '⭐'.repeat(rating);

    const emailContent = `
New Feedback Received

Rating: ${rating}/5 ${stars}

Feedback:
${feedback}

---
Submitted: ${new Date().toLocaleString()}
IP Address: ${request.headers.get('x-forwarded-for') || 'Unknown'}
`;

    await sgMail.send({
      to: process.env.SENDGRID_TO_EMAIL!,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `[Portfolio Feedback] ${rating}-star rating`,
      text: emailContent,
      html: `
<html>
  <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 8px;">
      <h2 style="color: #00d9ff;">New User Feedback</h2>
      
      <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 4px;">
        <p style="font-size: 24px; margin: 0;">
          ${stars}
        </p>
        <p><strong>Rating:</strong> ${rating}/5</p>
      </div>
      
      <div style="margin: 20px 0;">
        <h3>Feedback:</h3>
        <p style="line-height: 1.6; white-space: pre-wrap;">
${feedback}
        </p>
      </div>
      
      <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
        <p style="margin: 5px 0;">Submitted: ${new Date().toLocaleString()}</p>
      </div>
    </div>
  </body>
</html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your feedback!',
        submission: {
          rating,
          feedbackLength: feedback.length,
          receivedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Feedback error:', error);
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'Feedback API is running',
    endpoint: '/api/feedback',
    method: 'POST',
    emailService: 'SendGrid',
  });
}
```

#### 8. Test Locally
```bash
npm run dev
# Go to portfolio
# Submit contact form/feedback
# Check console for email logs
```

#### 9. Deploy to Vercel
```bash
git add .
git commit -m "Add SendGrid email integration"
git push origin main
```

Add environment variables to Vercel:
1. Go to Vercel Dashboard
2. Project Settings → Environment Variables
3. Add:
   - `SENDGRID_API_KEY`
   - `SENDGRID_FROM_EMAIL`
   - `SENDGRID_TO_EMAIL`
   - `SENDGRID_FROM_NAME`

---

### Option 2: Resend (TypeScript-Friendly) ⭐

**Benefits:**
- Built for Next.js
- TypeScript native
- Modern API
- Good free tier
- Excellent docs

**Setup:**
```bash
npm install resend
```

Create `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_TO_EMAIL=saurabhsingh82396@gmail.com
```

Update API route:
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

// In POST handler:
await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: process.env.RESEND_TO_EMAIL!,
  subject: `New Contact: ${subject}`,
  html: emailHtmlContent,
});
```

---

### Option 3: Nodemailer (Gmail Free) 💰

**Setup:**
```bash
npm install nodemailer
```

Create `.env.local`:
```env
EMAIL_USER=saurabhsingh82396@gmail.com
EMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

**Get Gmail App Password:**
1. Go to: https://myaccount.google.com/security
2. Enable 2FA if not done
3. Go to: App Passwords
4. Select: Mail, Windows
5. Copy: 16-char password
6. Paste in: EMAIL_APP_PASSWORD

---

## 🚀 Quick Start (SendGrid)

### 5-Minute Setup:

```bash
# 1. Sign up at SendGrid (free)
https://sendgrid.com/en-us

# 2. Get API Key from Settings → API Keys

# 3. Create .env.local
SENDGRID_API_KEY=SG.xxxxx
SENDGRID_FROM_EMAIL=noreply@example.com
SENDGRID_TO_EMAIL=saurabhsingh82396@gmail.com

# 4. Install package
npm install @sendgrid/mail

# 5. Update API routes (use code above)

# 6. Test locally
npm run dev

# 7. Deploy
git add . && git commit -m "Add email" && git push
```

---

## ✅ Verification Checklist

After setup, verify:

- [ ] SendGrid API Key working
- [ ] Environment variables set
- [ ] npm packages installed
- [ ] API routes updated
- [ ] Local test successful
- [ ] Deployed to Vercel
- [ ] Vercel env variables set
- [ ] Form submission email received

---

## 🔒 Security Best Practices

### DO:
✅ Use environment variables  
✅ Never commit .env files  
✅ Use API keys (not passwords)  
✅ Add IP whitelisting (if available)  
✅ Log submissions  
✅ Validate inputs  

### DON'T:
❌ Commit API keys  
❌ Use admin email directly  
❌ Skip validation  
❌ Log sensitive data  
❌ Share credentials  
❌ Use weak passwords  

---

## 📞 Support

**SendGrid Docs:** https://docs.sendgrid.com/  
**Resend Docs:** https://resend.com/docs  
**Nodemailer Docs:** https://nodemailer.com/  

---

## 🎯 Next Steps

1. **Choose email service** (SendGrid recommended)
2. **Sign up** (free tier available)
3. **Get API credentials**
4. **Update .env.local**
5. **Install packages**
6. **Update API routes**
7. **Test locally**
8. **Deploy to Vercel**
9. **Add environment variables**
10. **Verify emails arriving**

---

**All form submissions will now be received at: `saurabhsingh82396@gmail.com`** ✅
