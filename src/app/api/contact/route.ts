import { NextRequest, NextResponse } from 'next/server';

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Simple Email Function - Using fetch to SendGrid API
async function sendEmail(to: string, subject: string, text: string, html: string) {
  const apiKey = process.env.SENDGRID_API_KEY;
  
  if (!apiKey) {
    console.error('❌ SENDGRID_API_KEY not configured');
    throw new Error('Email service not configured');
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: to }],
          },
        ],
        from: {
          email: process.env.SENDGRID_FROM_EMAIL || 'noreply@portfolio.com',
          name: 'Saurabh Singh Portfolio',
        },
        subject: subject,
        content: [
          {
            type: 'text/plain',
            value: text,
          },
          {
            type: 'text/html',
            value: html,
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`SendGrid error: ${error}`);
    }

    return true;
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
}

// Contact form API endpoint
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

    if (!isValidEmail(email)) {
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

    // Create email content for owner
    const emailText = `
New Contact Form Submission
===========================

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Subject: ${subject}

Message:
${message}

---
Timestamp: ${new Date().toISOString()}
IP Address: ${request.headers.get('x-forwarded-for') || 'Unknown'}
    `;

    const emailHtml = `
<div style="font-family: Arial, sans-serif; padding: 20px;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <hr>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
  <p><strong>Company:</strong> ${company || 'Not provided'}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <h3>Message:</h3>
  <p>${message.replace(/\n/g, '<br>')}</p>
  <hr>
  <p style="color: #999; font-size: 12px;">
    Timestamp: ${new Date().toISOString()}<br>
    IP: ${request.headers.get('x-forwarded-for') || 'Unknown'}
  </p>
</div>
    `;

    // Send email to your inbox
    try {
      await sendEmail(
        process.env.CONTACT_EMAIL_TO || 'saurabhsingh82396@gmail.com',
        `New Contact: ${subject}`,
        emailText,
        emailHtml
      );
      console.log('✅ Email sent successfully to', process.env.CONTACT_EMAIL_TO || 'saurabhsingh82396@gmail.com');
    } catch (emailError) {
      console.error('⚠️ Email send failed:', emailError);
      // Still return success even if email fails
    }

    // Also send confirmation email to the visitor
    try {
      await sendEmail(
        email,
        'We received your message - Saurabh Singh',
        `Hi ${name},\n\nThank you for reaching out! I've received your message and will get back to you soon.\n\nBest regards,\nSaurabh Singh`,
        `<div style="font-family: Arial; padding: 20px;"><p>Hi ${name},</p><p>Thank you for reaching out! I've received your message and will get back to you soon.</p><p>Best regards,<br><strong>Saurabh Singh</strong></p></div>`
      );
    } catch (emailError) {
      console.error('⚠️ Confirmation email failed:', emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully! Check your email for confirmation.',
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
    console.error('❌ Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}

// GET request - return API status
export async function GET() {
  return NextResponse.json({
    status: 'Contact API is running',
    endpoint: '/api/contact',
    method: 'POST',
    createdAt: new Date().toISOString(),
  });
}
