import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    // Initialize environment variables and clients inside the function
    // This prevents build-time initialization errors when env vars aren't available
    const SUPABASE_URL = process.env.SUPABASE_URL || '';
    const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_PUBLIC_KEY || '';
    const RESEND_API_KEY = process.env.RESEND_API_KEY || '';
    const NOTIFICATION_EMAILS =
      process.env.CONTACT_NOTIFICATION_EMAILS?.split(',') || [];

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const resend = new Resend(RESEND_API_KEY);

    // Parse request body
    const body = await request.json();
    console.log('📨 Received contact form submission');

    const { firstName, lastName, email, phone, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      console.log('❌ Validation failed: Missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Validation failed: Invalid email');
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check configuration
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.error('❌ Supabase not configured');
      return NextResponse.json(
        { error: 'Service configuration error. Please contact support.' },
        { status: 503 }
      );
    }

    if (!RESEND_API_KEY) {
      console.error('❌ Resend not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 503 }
      );
    }

    // Save to Supabase
    console.log('💾 Saving to Supabase...');
    const { data: insertedData, error: supabaseError } = await supabase
      .from('contacts')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          message,
          status: 'unread',
        },
      ])
      .select()
      .single();

    if (supabaseError) {
      console.error('❌ Supabase error:', supabaseError);
      console.error('Error details:', {
        code: supabaseError.code,
        message: supabaseError.message,
        details: supabaseError.details,
        hint: supabaseError.hint,
      });
      return NextResponse.json(
        { error: 'Failed to save your message. Please try again.' },
        { status: 500 }
      );
    }

    console.log('✅ Saved to Supabase successfully');

    // Send notification emails to team
    if (NOTIFICATION_EMAILS.length > 0) {
      console.log(
        '📧 Sending notification emails to:',
        NOTIFICATION_EMAILS.join(', ')
      );

      try {
        await resend.emails.send({
          from: 'KPPAY Contact Form <no-reply@kppay.fr>',
          to: NOTIFICATION_EMAILS,
          subject: `New Contact Form Submission from ${firstName} ${lastName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1560fc; border-bottom: 2px solid #1560fc; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>

              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
              </div>

              <div style="margin: 20px 0;">
                <strong>Message:</strong>
                <p style="background: #fff; padding: 15px; border-left: 4px solid #1560fc; margin-top: 10px;">
                  ${message}
                </p>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                <p>Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC</p>
                <p>View in <a href="${SUPABASE_URL}" style="color: #1560fc;">Supabase Dashboard</a></p>
              </div>
            </div>
          `,
        });

        console.log('✅ Notification emails sent successfully');
      } catch (emailError) {
        console.error('⚠️ Failed to send notification emails:', emailError);
        // Don't fail the request if email fails
      }
    }

    // Send auto-reply to customer
    console.log('📧 Sending auto-reply to customer...');
    try {
      await resend.emails.send({
        from: 'KPPAY Team <no-reply@kppay.fr>',
        to: email,
        subject: 'Thank you for contacting KPPAY',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1560fc 0%, #153794 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0;">KPPAY</h1>
            </div>

            <div style="padding: 30px; background: #fff;">
              <h2 style="color: #333; margin-top: 0;">Thank you for reaching out!</h2>

              <p style="color: #666; line-height: 1.6;">
                Hi ${firstName},
              </p>

              <p style="color: #666; line-height: 1.6;">
                We've received your message and our team will get back to you soon.
              </p>

              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; color: #666; font-size: 14px;">
                  <strong>Your message:</strong>
                </p>
                <p style="margin: 10px 0; color: #333;">
                  ${message}
                </p>
              </div>

              <p style="color: #666; line-height: 1.6;">
                In the meantime, feel free to explore our <a href="https://kppay.fr" style="color: #1560fc; text-decoration: none;">website</a> to learn more about our services.
              </p>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                <p style="color: #999; font-size: 12px; margin: 5px 0;">
                  Best regards,<br/>
                  <strong style="color: #1560fc;">The KPPAY Team</strong>
                </p>
              </div>
            </div>

            <div style="background: #f5f5f5; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                © ${new Date().getFullYear()} KPPAY. All rights reserved.
              </p>
            </div>
          </div>
        `,
      });

      console.log('✅ Auto-reply sent successfully');
    } catch (emailError) {
      console.error('⚠️ Failed to send auto-reply:', emailError);
      // Don't fail the request if email fails
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully',
        id: insertedData?.[0]?.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('❌ Contact form error:', error);

    if (error instanceof Error) {
      console.error('Error details:', error.message);
    }

    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
