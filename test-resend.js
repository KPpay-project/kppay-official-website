const { Resend } = require('resend');
const fs = require('fs');
const path = require('path');

// Manually load .env.local
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    envVars[match[1].trim()] = match[2].trim();
  }
});

const resend = new Resend(envVars.RESEND_API_KEY);
const NOTIFICATION_EMAILS = envVars.CONTACT_NOTIFICATION_EMAILS?.split(',') || [];

console.log('Testing Resend email...');
console.log('API Key:', envVars.RESEND_API_KEY ? 'Present (length: ' + envVars.RESEND_API_KEY.length + ')' : 'Missing');
console.log('Notification emails:', NOTIFICATION_EMAILS);

async function testEmail() {
  try {
    const result = await resend.emails.send({
      from: 'KPPAY Contact Form <no-reply@kppay.fr>',
      to: NOTIFICATION_EMAILS,
      subject: 'Test Email from KPPAY',
      html: '<h1>This is a test email</h1><p>If you receive this, the email system is working!</p>',
    });

    console.log('✅ Email sent successfully!');
    console.log('Result:', result);
  } catch (error) {
    console.error('❌ Email failed:');
    console.error('Error:', error);
    if (error.response) {
      console.error('Response:', await error.response.text());
    }
  }
}

testEmail();
