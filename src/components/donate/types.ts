export interface DonorFormData {
  firstName: string;
  lastName: string;
  mobile: string;
  address: string;
  email: string;
  pan: string;
}

export interface DonationPayload {
  causeId: string;
  causeTitle: string;
  amount: number;
  frequency?: string;
  childPreference?: 'Boy' | 'Girl';
  numberOfChildren?: number;
  dignityUnits?: string;
  amountMode?: 'preset' | 'specific' | 'other';
  donor: DonorFormData;
  timestamp?: string;
}

export const emptyDonor = (): DonorFormData => ({
  firstName: '',
  lastName: '',
  mobile: '',
  address: '',
  email: '',
  pan: '',
});
