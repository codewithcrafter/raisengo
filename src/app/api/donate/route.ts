import { NextResponse } from 'next/server';
import { 
  getShikshalayaConfiguredAmount, 
  validateShikshalayaAmount,
  SHIKSHALAYA_PRICING 
} from '@/config/sponsorship-pricing';

interface DonationPayload {
  amount: number;
  dignityUnit?: string;
  causeId?: string;
  frequency?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  need80G?: boolean;
  pan?: string;
  address?: string;
  citizenConsent?: boolean;
  childPreference?: string;
  numberOfChildren?: number;
  isCustom?: boolean;
}

export async function POST(request: Request) {
  try {
    const body: DonationPayload = await request.json();

    const { 
      amount, 
      dignityUnit, 
      causeId, 
      frequency = 'one-time', 
      firstName = '', 
      lastName = '', 
      email = '', 
      phone = '', 
      need80G = false, 
      pan = '', 
      citizenConsent = false,
      childPreference,
      numberOfChildren,
      isCustom = false
    } = body;

    const errors: Record<string, string> = {};

    // 1. Strict Server-Side Amount Validation
    if (typeof amount !== 'number' || isNaN(amount)) {
      errors.amount = 'Donation amount must be a valid number.';
    } else if (amount <= 0) {
      errors.amount = 'Donation amount must be greater than zero.';
    } else if (amount < 100) {
      errors.amount = 'Minimum donation amount is ₹100.';
    } else if (amount > 10000000) {
      errors.amount = 'For donations exceeding ₹1 Crore, please contact our Institutional CSR Desk directly.';
    }

    // 2. Campaign-Specific Trusted Configuration Validation
    if (causeId === 'shikshalaya') {
      const safeFreq = (frequency || 'monthly').toLowerCase();
      const validFrequencies = ['monthly', 'quarterly', 'half-yearly', 'annually'];
      
      if (!validFrequencies.includes(safeFreq)) {
        errors.frequency = 'Please select a valid frequency: Monthly, Quarterly, Half-Yearly, or Annually.';
      }

      const count = numberOfChildren && numberOfChildren >= 1 ? numberOfChildren : 1;
      if (!isCustom) {
        const expected = getShikshalayaConfiguredAmount(safeFreq, count);
        if (amount !== expected) {
          errors.amount = `The submitted amount (₹${amount.toLocaleString('en-IN')}) does not match the configured charge (₹${expected.toLocaleString('en-IN')}) for ${safeFreq} sponsorship.`;
        }
      }
    } else if (causeId === 'chuppi-todo' && dignityUnit && !isCustom) {
      const match = dignityUnit.match(/(\d+)/);
      if (match) {
        const units = parseInt(match[1], 10);
        const validUnits = [1, 10, 15, 25];
        if (validUnits.includes(units) && amount !== units * 1000) {
          errors.amount = `Configured amount for ${units} Dignity Units is ₹${(units * 1000).toLocaleString('en-IN')}.`;
        }
      }
    } else if (causeId === 'little-heartbeats' && !isCustom) {
      const validPresets = [3000, 5000, 10000, 20000];
      // If amount isn't one of presets and not custom, flag error
      if (!validPresets.includes(amount) && amount !== 5000) {
        errors.amount = 'Please select a valid medical care tier or enter a custom amount.';
      }
    }

    // 2. Name validation
    if (!firstName.trim()) {
      errors.firstName = 'First name is required.';
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last name is required.';
    }

    // 3. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    // 4. Phone validation (Indian 10-digit mobile)
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      errors.phone = 'Mobile number is required.';
    } else if (cleanPhone.length < 10) {
      errors.phone = 'Please provide a valid 10-digit mobile number.';
    }

    // 5. 80G Tax PAN Validation
    if (need80G) {
      const cleanPan = pan.trim().toUpperCase();
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (!cleanPan) {
        errors.pan = 'PAN number is required to issue Section 80G tax certificates.';
      } else if (!panRegex.test(cleanPan)) {
        errors.pan = 'Please enter a valid 10-character PAN (e.g. ABCDE1234F).';
      }
    }

    // 6. Citizen declaration
    if (!citizenConsent) {
      errors.citizenConsent = 'Confirmation of Indian citizenship is required under FCRA regulations.';
    }

    // 7. Optional Shikshalaya children count validation
    if (numberOfChildren !== undefined && numberOfChildren !== null) {
      if (typeof numberOfChildren !== 'number' || isNaN(numberOfChildren) || numberOfChildren < 1 || !Number.isInteger(numberOfChildren)) {
        errors.numberOfChildren = 'Number of children must be a positive whole number (e.g. 1, 2, 3).';
      }
    }

    // If validation fails, return 400 with errors
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Generate verified reference number
    const refId = `RIF-SPON-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({
      success: true,
      refId,
      message: 'Sponsorship pledge received successfully.',
      data: {
        refId,
        amount,
        dignityUnit,
        causeId,
        frequency,
        childPreference: childPreference || null,
        numberOfChildren: numberOfChildren || null,
        donorName: `${firstName.trim()} ${lastName.trim()}`,
        has80G: need80G
      }
    });
  } catch (error) {
    console.error('Server donation processing error:', error);
    return NextResponse.json(
      { success: false, message: 'Invalid donation request payload.' },
      { status: 500 }
    );
  }
}
