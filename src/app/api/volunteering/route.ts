import { NextResponse } from 'next/server';

interface VolunteeringApplicationPayload {
  fullName: string;
  email: string;
  whatsapp: string;
  age: number | string;
  reason: string;
  startDate: string;
}

// In-memory application store for safe runtime persistence
const savedVolunteers: Array<{
  id: string;
  fullName: string;
  email: string;
  whatsapp: string;
  age: number;
  reason: string;
  startDate: string;
  createdAt: string;
}> = [];

export async function POST(request: Request) {
  try {
    const body: VolunteeringApplicationPayload = await request.json();
    const { fullName, email, whatsapp, age, reason, startDate } = body;

    const errors: Record<string, string> = {};

    // 1. Full Name Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length === 0) {
      errors.fullName = 'Full Name is required.';
    } else if (fullName.trim().length < 2) {
      errors.fullName = 'Please enter a valid full name (at least 2 characters).';
    } else if (fullName.trim().length > 100) {
      errors.fullName = 'Full name must not exceed 100 characters.';
    }

    // 2. Email Validation
    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      errors.email = 'Email address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errors.email = 'Please provide a valid email address.';
      }
    }

    // 3. WhatsApp Number Validation
    if (!whatsapp || typeof whatsapp !== 'string' || whatsapp.trim().length === 0) {
      errors.whatsapp = 'WhatsApp number is required.';
    } else {
      const cleanPhone = whatsapp.replace(/[\s\-\(\)\+]/g, '');
      if (cleanPhone.length < 10 || cleanPhone.length > 15 || !/^\d+$/.test(cleanPhone)) {
        errors.whatsapp = 'Please enter a valid WhatsApp number (at least 10 digits).';
      }
    }

    // 4. Age Validation
    const parsedAge = typeof age === 'string' ? parseInt(age.trim(), 10) : Number(age);
    if (age === undefined || age === null || age === '' || isNaN(parsedAge)) {
      errors.age = 'Age is required.';
    } else if (parsedAge < 14 || parsedAge > 99) {
      errors.age = 'Please enter a valid age between 14 and 99.';
    }

    // 5. Why do you want to do this Volunteering?
    if (!reason || typeof reason !== 'string' || reason.trim().length === 0) {
      errors.reason = 'Please share why you want to do this volunteering.';
    } else if (reason.trim().length < 10) {
      errors.reason = 'Please write at least 10 characters explaining your interest.';
    } else if (reason.trim().length > 3000) {
      errors.reason = 'Your response must be within 3,000 characters.';
    }

    // 6. Start Date Validation
    if (!startDate || typeof startDate !== 'string' || startDate.trim().length === 0) {
      errors.startDate = 'Please specify when you would like to start volunteering.';
    } else {
      const parsedDate = new Date(startDate);
      if (isNaN(parsedDate.getTime())) {
        errors.startDate = 'Please select a valid start date.';
      } else {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const inputDate = new Date(parsedDate);
        inputDate.setHours(0, 0, 0, 0);
        const gracePast = new Date(today.getTime() - 86400000);
        if (inputDate < gracePast) {
          errors.startDate = 'Start date cannot be in the past.';
        }
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please correct the highlighted fields.',
          errors,
        },
        { status: 400 }
      );
    }

    // Generate unique confirmation ID
    const refId = `RIF-VOL-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const sanitizedRecord = {
      id: refId,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      whatsapp: whatsapp.trim(),
      age: parsedAge,
      reason: reason.trim(),
      startDate: startDate.trim(),
      createdAt: new Date().toISOString(),
    };

    savedVolunteers.push(sanitizedRecord);

    return NextResponse.json(
      {
        success: true,
        message: 'Your volunteering application has been submitted successfully!',
        referenceId: refId,
        data: {
          fullName: sanitizedRecord.fullName,
          email: sanitizedRecord.email,
          startDate: sanitizedRecord.startDate,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing volunteering application:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'A server error occurred while processing your application. Please try again later.',
      },
      { status: 500 }
    );
  }
}
