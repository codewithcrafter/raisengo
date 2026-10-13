import { NextResponse } from 'next/server';

interface InternshipApplicationPayload {
  fullName: string;
  email: string;
  whatsapp: string;
  age: number | string;
  reason: string;
  startDate: string;
}

// In-memory application store for safe runtime persistence (can be swapped with DB adapter)
const savedApplications: Array<{
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
    const body: InternshipApplicationPayload = await request.json();
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
    } else if (parsedAge < 15 || parsedAge > 99) {
      errors.age = 'Please enter a valid age between 15 and 99.';
    }

    // 5. Reason / Statement of Purpose Validation
    if (!reason || typeof reason !== 'string' || reason.trim().length === 0) {
      errors.reason = 'Please tell us why you want to do this internship.';
    } else if (reason.trim().length < 10) {
      errors.reason = 'Please write at least 10 characters explaining your interest.';
    } else if (reason.trim().length > 3000) {
      errors.reason = 'Your response must be within 3,000 characters.';
    }

    // 6. Start Date Validation
    if (!startDate || typeof startDate !== 'string' || startDate.trim().length === 0) {
      errors.startDate = 'Please specify when you would like to start the internship.';
    } else {
      const parsedDate = new Date(startDate);
      if (isNaN(parsedDate.getTime())) {
        errors.startDate = 'Please select a valid start date.';
      } else {
        // Ensure date is not too far in the past (allow today or future)
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const inputDate = new Date(parsedDate);
        inputDate.setHours(0, 0, 0, 0);
        
        // Allow within 1 day grace for timezone discrepancies
        const gracePast = new Date(today.getTime() - 86400000);
        if (inputDate < gracePast) {
          errors.startDate = 'Start date cannot be in the past.';
        }
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Generate safe Application Reference ID
    const applicationId = `RIF-INT-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const applicationRecord = {
      id: applicationId,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      whatsapp: whatsapp.trim(),
      age: parsedAge,
      reason: reason.trim(),
      startDate: startDate.trim(),
      createdAt: new Date().toISOString(),
    };

    savedApplications.push(applicationRecord);

    // Secure audit log (omits raw PII such as phone and email to respect privacy)
    console.log('[Internship Application Saved]', {
      applicationId,
      nameInitial: fullName.trim().charAt(0) + '***',
      age: parsedAge,
      startDate: startDate.trim(),
      reasonLength: reason.trim().length,
      createdAt: applicationRecord.createdAt,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your application has been received successfully! Our internship coordinator will contact you shortly.',
        applicationId,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('[Internship API Error]:', err);
    return NextResponse.json(
      { success: false, message: 'An unexpected server error occurred while processing your application. Please try again.' },
      { status: 500 }
    );
  }
}
