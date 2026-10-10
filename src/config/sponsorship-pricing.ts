/**
 * RAISE INDIA FOUNDATION — OFFICIAL SPONSORSHIP PRICING CONFIGURATION
 * 
 * Single source of truth for campaign sponsorship amounts and frequency mappings.
 * Shared between client UI components and server validation routes (/api/donate).
 */

export interface FrequencyPricingConfig {
  id: 'monthly' | 'quarterly' | 'half-yearly' | 'annually';
  label: string;
  periodMonths: number;
  // Configured baseline charge per sponsored child (INR)
  baseAmountPerChild: number;
  periodSuffix: string;
  billingDescriptor: string;
}

/**
 * Support Shikshalaya: Transforming Education, Transforming Lives
 * Configured charges per child:
 * - Monthly: ₹1,200 (Foundational elementary schooling, stationery, nutrition)
 * - Quarterly (3 months): ₹3,600 (Academic term kit, remedial tutoring, nutrition)
 * - Half-Yearly (6 months): ₹7,200 (Semester support, uniforms, health checkups)
 * - Annually (12 months): ₹14,400 (Full-year holistic education, digital lab at Techshaala)
 * 
 * NOTE: These baseline sponsorship rates are the established organizational standard
 * for non-formal learning centers in Delhi and Agra.
 */
export const SHIKSHALAYA_PRICING: Record<'monthly' | 'quarterly' | 'half-yearly' | 'annually', FrequencyPricingConfig> = {
  'monthly': {
    id: 'monthly',
    label: 'Monthly',
    periodMonths: 1,
    baseAmountPerChild: 1200,
    periodSuffix: '/ month',
    billingDescriptor: 'Monthly elementary schooling & nutrition',
  },
  'quarterly': {
    id: 'quarterly',
    label: 'Quarterly',
    periodMonths: 3,
    baseAmountPerChild: 3600,
    periodSuffix: '/ quarter (3 months)',
    billingDescriptor: 'Quarterly academic term sponsorship',
  },
  'half-yearly': {
    id: 'half-yearly',
    label: 'Half-Yearly',
    periodMonths: 6,
    baseAmountPerChild: 7200,
    periodSuffix: '/ 6 months',
    billingDescriptor: 'Half-yearly semester & bridge support',
  },
  'annually': {
    id: 'annually',
    label: 'Annually',
    periodMonths: 12,
    baseAmountPerChild: 14400,
    periodSuffix: '/ year (12 months)',
    billingDescriptor: 'Full-year comprehensive education & uniforms',
  },
};

/**
 * Calculate the configured Shikshalaya amount for a given frequency and number of children.
 */
export function getShikshalayaConfiguredAmount(
  frequency: string,
  numberOfChildren: number = 1
): number {
  const safeFreq = (frequency || 'monthly').toLowerCase() as keyof typeof SHIKSHALAYA_PRICING;
  const config = SHIKSHALAYA_PRICING[safeFreq] || SHIKSHALAYA_PRICING.monthly;
  const safeCount = Math.max(1, Math.min(50, Math.floor(numberOfChildren || 1)));
  return config.baseAmountPerChild * safeCount;
}

/**
 * Validate if a submitted Shikshalaya amount matches the trusted server pricing configuration.
 * Allows custom amounts if flagged as custom.
 */
export function validateShikshalayaAmount(
  frequency: string,
  amount: number,
  numberOfChildren: number = 1,
  isCustom: boolean = false
): boolean {
  if (typeof amount !== 'number' || isNaN(amount) || amount < 100) {
    return false;
  }
  if (isCustom) {
    return amount >= 100;
  }
  const expected = getShikshalayaConfiguredAmount(frequency, numberOfChildren);
  return amount === expected;
}
