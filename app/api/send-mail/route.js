import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Input validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    
    const emailData = {
      sender: {
        name: "Kumar Sumitt Portfolio Website",
        email: "kumarsumitt0099@gmail.com"
      },
      to: [{ 
        email: "kumarsumitt0099@gmail.com",
        name: "Kumar Sumitt"
      }],
      subject: `Contact Form: ${subject}`,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #4a5568; margin-top: 10px;">New Contact Form Submission</h1>
            <p style="color: #718096; font-size: 16px;">${new Date().toLocaleString('en-IN')}</p>
          </div>
          
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #2d3748; margin-top: 0;">Contact Details:</h2>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
            <h2 style="color: #2d3748; margin-top: 0;">Message:</h2>
            <p style="margin: 5px 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #ebf8ff; border-radius: 5px; border-left: 4px solid #3182ce;">
            <p style="margin: 0; color: #2c5282; font-weight: 500;">
              Please respond to this inquiry as soon as possible.
            </p>
          </div>
          
          <div style="text-align: center; color: #718096; font-size: 14px; margin-top: 30px;">
            <p>This is an automated message from your Portfolio Website Contact Form.</p>
          </div>
        </div>
      `,
      replyTo: {
        email: email,
        name: name
      }
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to send email');
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully! We will get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
} 