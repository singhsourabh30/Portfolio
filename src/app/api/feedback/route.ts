import { NextRequest, NextResponse } from 'next/server';

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
    const feedbackContent = `
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

    // Log to console (for local testing)
    console.log('💬 Feedback Submission:', {
      rating,
      feedbackLength: feedback.length,
      timestamp: new Date().toISOString(),
    });

    // TODO: Store feedback in database or send to email
    // For now, log and return success response

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
