import { NextRequest, NextResponse } from 'next/server';

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
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

    // Create email content
    const emailContent = `
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

    // Log to console (for local testing)
    console.log('📧 Contact Form Submission:', {
      name,
      email,
      subject,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // For now, log the submission and return success
    // In production, send actual email

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
