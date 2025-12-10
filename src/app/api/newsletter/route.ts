import { NextResponse } from 'next/server';

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY || '';
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID || '';
const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER || '';

// Extract API key without server suffix (format: key-server or just key)
const getApiKey = (apiKey: string): string => {
  return apiKey.split('-')[0];
};

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    console.log('Received newsletter subscription request');

    const { email } = body;

    // Validate email
    if (!email) {
      console.log('Validation failed: Email is missing');
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed: Invalid email format');
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check Mailchimp configuration
    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_API_SERVER) {
      console.error('Mailchimp credentials not configured:', {
        hasApiKey: !!MAILCHIMP_API_KEY,
        hasAudienceId: !!MAILCHIMP_AUDIENCE_ID,
        hasApiServer: !!MAILCHIMP_API_SERVER,
      });
      return NextResponse.json(
        {
          error:
            'Newsletter service is not configured. Please contact support.',
        },
        { status: 503 }
      );
    }

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    console.log('Sending request to Mailchimp...');

    const response = await fetch(
      `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${getApiKey(MAILCHIMP_API_KEY)}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();
    console.log('Mailchimp response status:', response.status);

    if (response.ok) {
      console.log('Successfully subscribed:', email);
      return NextResponse.json(
        {
          success: true,
          message: 'Successfully subscribed to newsletter',
        },
        { status: 201 }
      );
    } else {
      // Handle specific Mailchimp errors
      if (responseData.title === 'Member Exists') {
        console.log('Email already subscribed:', email);
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 400 }
        );
      }

      if (responseData.title === 'Invalid Resource') {
        console.error('Invalid Mailchimp configuration:', responseData.detail);
        return NextResponse.json(
          {
            error:
              'Newsletter service configuration error. Please contact support.',
          },
          { status: 503 }
        );
      }

      if (responseData.title === 'Forbidden') {
        console.error('Mailchimp authentication failed');
        return NextResponse.json(
          {
            error:
              'Newsletter service authentication error. Please contact support.',
          },
          { status: 503 }
        );
      }

      console.error('Mailchimp error:', responseData);
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Newsletter error:', error);

    // Provide more specific error messages
    if (error instanceof Error) {
      console.error('Error details:', error.message);

      if (error.message.includes('fetch')) {
        return NextResponse.json(
          {
            error:
              'Unable to connect to newsletter service. Please try again later.',
          },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
