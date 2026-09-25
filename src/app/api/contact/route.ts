import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, mobile, subject, message } = body;
    const mobileValue = mobile || phone;

    const errors: Record<string, string> = {};

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      errors.name = 'Full name is required.';
    }

    if (!email || typeof email !== 'string') {
      errors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errors.email = 'Please provide a valid email address.';
      }
    }

    if (!mobileValue || typeof mobileValue !== 'string' || mobileValue.trim().length === 0) {
      errors.mobile = 'Mobile number is required.';
    } else {
      const cleanPhone = mobileValue.replace(/[\s\-\(\)\+]/g, '');
      if (cleanPhone.length < 10 || cleanPhone.length > 15 || !/^\d+$/.test(cleanPhone)) {
        errors.mobile = 'Please enter a valid mobile number (at least 10 digits).';
      }
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      errors.subject = 'Subject or area of interest is required.';
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      errors.message = 'Message is required.';
    } else if (message.trim().length < 10) {
      errors.message = 'Please provide a message of at least 10 characters.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Successfully validated message
    console.log('[Contact Submission Received]', {
      name: name.trim(),
      email: email.trim(),
      mobile: mobileValue.trim(),
      subject: subject.trim(),
      messageLength: message.trim().length,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out. Your message has been received.',
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('[Contact API Error]:', err);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred while submitting your message.' },
      { status: 500 }
    );
  }
}
