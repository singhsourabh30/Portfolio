import { NextRequest, NextResponse } from 'next/server';

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { rating, feedback } = body;

    // Validation
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

    // Create feedback content
    const feedbackText = `
User Feedback Submission
========================

Rating: ${rating}/5 ${'⭐'.repeat(rating)}

Feedback:
${feedback}

---
Timestamp: ${new Date().toISOString()}
IP Address: ${request.headers.get('x-forwarded-for') || 'Unknown'}
User Agent: ${request.headers.get('user-agent') || 'Unknown'}
    `;

    const feedbackHtml = `
<div style="font-family: Arial, sans-serif; padding: 20px;">
  <h2 style="color: #333;">User Feedback</h2>
  <hr>
  <p><strong>Rating:</strong> ${rating}/5 ${'⭐'.repeat(rating)}</p>
  <h3>Feedback:</h3>
  <p>${feedback.replace(/\n/g, '<br>')}</p>
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
        `📝 New Feedback - ${rating}/5 stars`,
        feedbackText,
        feedbackHtml
      );
      console.log('✅ Feedback email sent successfully');
    } catch (emailError) {
      console.error('⚠️ Feedback email send failed:', emailError);
      // Still return success even if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your feedback! It helps us improve.',
        submission: {
          rating,
          feedbackLength: feedback.length,
          receivedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Feedback submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
}

// GET request - return API status
export async function GET() {
  return NextResponse.json({
    status: 'Feedback API is running',
    endpoint: '/api/feedback',
    method: 'POST',
    createdAt: new Date().toISOString(),
  });
}
