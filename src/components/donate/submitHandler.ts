import type { DonationPayload } from './types';

export interface SubmitResponse {
  success: boolean;
  message: string;
}

/**
 * TODO submitHandler — payment gateway is not connected.
 *
 * Current behavior:
 * - Validates and collects donor details and donation pledge.
 * - Logs payload to console.
 * - DOES NOT charge any payment card/UPI/account.
 * - DOES NOT show fake payment confirmation.
 *
 * Requirements needed before going live with real payments:
 * 1. Payment Provider Selection:
 *    - Sign up with an authorized Indian payment gateway (e.g., Razorpay, Cashfree, Easebuzz, or PayU).
 *    - Obtain Merchant ID, Key ID, and Key Secret. Store Key Secret strictly in server-side environment variables (.env.local).
 * 2. Order Creation Endpoint (`/api/donate/create-order`):
 *    - Accepts donation amount, currency ('INR'), receipt ID, and donor notes.
 *    - Calls gateway API (e.g. `razorpay.orders.create`) and returns order ID to frontend.
 * 3. Client Checkout Modal:
 *    - Initialize gateway SDK on the client with order ID, prefill donor name, phone, email.
 *    - Handle success callback (`razorpay_payment_id`, `razorpay_order_id`, `razorpay_signature`).
 * 4. Verification & Webhook Endpoint (`/api/donate/verify`):
 *    - Verifies HMAC signature using webhook secret to prevent tampering.
 *    - Saves transaction to database with donor PAN and address.
 *    - Triggers automated 80G tax exemption receipt PDF generation.
 *    - Sends thank-you email with attached 80G certificate via SMTP or transactional email service.
 */
export async function submitDonation(
  formType: string,
  payload: DonationPayload
): Promise<SubmitResponse> {
  // Simulate standard network latency
  await new Promise((resolve) => setTimeout(resolve, 300));

  console.info('[TODO submitHandler] Donation payload collected. No payment processed.', {
    formType,
    payload,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message: `Pledge of ₹${payload.amount.toLocaleString('en-IN')} received. Payment gateway integration is pending configuration.`,
  };
}
