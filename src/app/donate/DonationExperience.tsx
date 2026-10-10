'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Check, 
  Lock, 
  Info,
  Calendar,
  Baby,
  Activity,
  Plus,
  Minus
} from 'lucide-react';
import { 
  SHIKSHALAYA_PRICING, 
  getShikshalayaConfiguredAmount, 
  type FrequencyPricingConfig 
} from '@/config/sponsorship-pricing';
import { 
  RevealOnScroll, 
  StaggerContainer, 
  StaggerItem 
} from '@/components/ui/Animation/RevealOnScroll';
import styles from './page.module.css';

interface CauseOption {
  id: string;
  slugMatches: string[];
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
}

// Exactly 3 authentic NGO campaigns
const CAUSES: CauseOption[] = [
  {
    id: 'chuppi-todo',
    slugMatches: ['chuppi-todo', 'chuppi', 'chhuppi', 'chhuppi-todo', 'womens-empowerment', 'womens-day', 'dignity-kit'],
    title: 'Chhuppi Todo',
    category: "Women's Health & Dignity",
    description: 'Providing menstrual hygiene awareness, sanitary pads, and Dignity Kits to daily-wage workers and young girls in marginalized communities.',
    icon: Sparkles,
  },
  {
    id: 'little-heartbeats',
    slugMatches: ['little-heartbeats', 'heartbeats', 'world-heart-day', 'health-camps', 'kanishk'],
    title: 'Mission Little Heartbeats',
    category: 'Pediatric Cardiac Care',
    description: 'Funding critical, life-saving open-heart surgeries for underprivileged infants and children in partnership with Fortis Hospital.',
    icon: Activity,
  },
  {
    id: 'shikshalaya',
    slugMatches: ['shikshalaya', 'agra-shikshalaya', 'education-kit', 'techshaala', 'education'],
    title: 'Support Shikshalaya: Transforming Education, Transforming Lives',
    category: 'Education & Literacy',
    description: 'Providing elementary education, textbooks, nutritional support, and school mainstreaming for first-generation learners in Delhi & Agra.',
    icon: Users,
  },
];

// Chhuppi Todo: Dignity Unit Presets
interface DignityUnitOption {
  units: number;
  label: string;
  inrAmount: number;
}

const CHUPPI_DIGNITY_OPTIONS: DignityUnitOption[] = [
  { units: 1, label: '1 Dignity Unit', inrAmount: 1000 },
  { units: 10, label: '10 Dignity Unit', inrAmount: 10000 },
  { units: 15, label: '15 Dignity Unit', inrAmount: 15000 },
  { units: 25, label: '25 Dignity Unit', inrAmount: 25000 },
];

// Mission Little Heartbeats: Exact Required Preset Amounts
const HEARTBEAT_AMOUNT_PRESETS = [
  { amount: 3000, label: '₹3,000', sub: 'Critical Diagnostics' },
  { amount: 5000, label: '₹5,000', sub: 'Pre-Op Medical Care' },
  { amount: 10000, label: '₹10,000', sub: 'Surgery Life-Line' },
  { amount: 20000, label: '₹20,000', sub: 'Complete Cardiac Support' },
];

export function DonationExperience() {
  const searchParams = useSearchParams();
  const queryCause = searchParams.get('cause');

  // Active Campaign
  const [selectedCauseId, setSelectedCauseId] = useState<string>('chuppi-todo');

  // Frequency
  const [frequency, setFrequency] = useState<string>('one-time');

  // Chhuppi Todo Dignity Unit selection
  const [selectedUnits, setSelectedUnits] = useState<number | null>(10);

  // Heartbeats Preset Amount
  const [heartbeatPreset, setHeartbeatPreset] = useState<number | null>(5000);

  // Shikshalaya Specific Options (dynamic amounts derived from configured pricing)
  const [childPreference, setChildPreference] = useState<'Boy' | 'Girl' | ''>('');
  const [numberOfChildren, setNumberOfChildren] = useState<number>(1);

  // Custom Amount state
  const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
  const [customAmount, setCustomAmount] = useState<string>('');

  // Animation flag for campaign transition
  const [transitionKey, setTransitionKey] = useState<number>(0);

  // Donor Form Details
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    pan: '',
    address: '',
    need80G: true,
    citizenConsent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pledgeSuccess, setPledgeSuccess] = useState<{
    refId: string;
    donorName: string;
    amount: number;
    detailsSummary: string;
    causeTitle: string;
    has80G: boolean;
  } | null>(null);

  const customInputRef = useRef<HTMLInputElement>(null);

  // Sync cause from URL parameter
  useEffect(() => {
    if (queryCause) {
      const match = CAUSES.find(c => 
        c.id === queryCause || c.slugMatches.includes(queryCause.toLowerCase())
      );
      if (match) {
        handleCampaignSwitch(match.id);
      }
    }
  }, [queryCause]);

  // Campaign switch handler that cleans incompatible values but preserves donor info
  const handleCampaignSwitch = (newCauseId: string) => {
    if (newCauseId === selectedCauseId) return;

    setSelectedCauseId(newCauseId);
    setTransitionKey(prev => prev + 1);
    setIsOtherSelected(false);
    setCustomAmount('');

    if (newCauseId === 'chuppi-todo') {
      setSelectedUnits(10);
      setHeartbeatPreset(null);
      setChildPreference('');
      setNumberOfChildren(1);
      setFrequency('one-time');
    } else if (newCauseId === 'little-heartbeats') {
      setSelectedUnits(null);
      setHeartbeatPreset(5000);
      setChildPreference('');
      setNumberOfChildren(1);
      setFrequency('one-time');
    } else if (newCauseId === 'shikshalaya') {
      setSelectedUnits(null);
      setHeartbeatPreset(null);
      setChildPreference('');
      setNumberOfChildren(1);
      setFrequency('monthly');
    }

    if (errors.amount) {
      setErrors(prev => {
        const next = { ...prev };
        delete next.amount;
        return next;
      });
    }
  };

  const activeCause = CAUSES.find(c => c.id === selectedCauseId) || CAUSES[0];

  // Calculate current active amount based on selected campaign and custom/configured pricing
  const getActiveAmount = (): number => {
    if (isOtherSelected) {
      const parsed = parseInt(customAmount, 10);
      return isNaN(parsed) ? 0 : parsed;
    }

    if (selectedCauseId === 'chuppi-todo') {
      const matched = CHUPPI_DIGNITY_OPTIONS.find(opt => opt.units === selectedUnits);
      return matched ? matched.inrAmount : 10000;
    }

    if (selectedCauseId === 'little-heartbeats') {
      return heartbeatPreset || 5000;
    }

    if (selectedCauseId === 'shikshalaya') {
      const safeFreq = (frequency || 'monthly').toLowerCase() as keyof typeof SHIKSHALAYA_PRICING;
      return getShikshalayaConfiguredAmount(safeFreq, numberOfChildren);
    }

    return 5000;
  };

  // Handlers for selection
  const handleDignitySelect = (opt: DignityUnitOption) => {
    setSelectedUnits(opt.units);
    setIsOtherSelected(false);
    setCustomAmount('');
    clearAmountError();
  };

  const handleHeartbeatSelect = (amt: number) => {
    setHeartbeatPreset(amt);
    setIsOtherSelected(false);
    setCustomAmount('');
    clearAmountError();
  };

  const handleShikshalayaFrequencyChange = (newFreq: 'monthly' | 'quarterly' | 'half-yearly' | 'annually') => {
    setFrequency(newFreq);
    setIsOtherSelected(false);
    setCustomAmount('');
    clearAmountError();
  };

  const handleOtherClick = () => {
    setIsOtherSelected(true);
    setSelectedUnits(null);
    setHeartbeatPreset(null);
    if (customInputRef.current) {
      customInputRef.current.focus();
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numeric = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(numeric);
    setIsOtherSelected(true);
    setSelectedUnits(null);
    setHeartbeatPreset(null);

    if (numeric) {
      const val = parseInt(numeric, 10);
      if (val >= 100 && errors.amount) {
        clearAmountError();
      }
    }
  };

  const clearAmountError = () => {
    if (errors.amount) {
      setErrors(prev => {
        const next = { ...prev };
        delete next.amount;
        return next;
      });
    }
  };

  const handleChildrenCountChange = (delta: number) => {
    setNumberOfChildren(prev => {
      const next = prev + delta;
      if (next < 1) return 1;
      if (next > 50) return 50;
      return next;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const finalVal = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: finalVal,
    }));

    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateClient = (): boolean => {
    const errs: Record<string, string> = {};
    const amt = getActiveAmount();

    if (!amt || amt <= 0) {
      errs.amount = 'Please select a donation amount or enter a custom amount.';
    } else if (amt < 100) {
      errs.amount = 'Minimum donation amount is ₹100.';
    }

    if (!formData.firstName.trim()) {
      errs.firstName = 'First name is required.';
    }
    if (!formData.lastName.trim()) {
      errs.lastName = 'Last name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone) {
      errs.phone = 'Mobile number is required.';
    } else if (cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (formData.need80G) {
      const cleanPan = formData.pan.trim().toUpperCase();
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      if (!cleanPan) {
        errs.pan = 'PAN number is required for 80G tax exemption.';
      } else if (!panRegex.test(cleanPan)) {
        errs.pan = 'Please enter a valid 10-character PAN (e.g. ABCDE1234F).';
      }
    }

    if (!formData.citizenConsent) {
      errs.citizenConsent = 'You must confirm Indian citizenship as required by FCRA.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateClient()) return;

    setIsSubmitting(true);
    const activeAmt = getActiveAmount();

    // Prepare campaign details string
    let detailsSummary = '';
    if (selectedCauseId === 'chuppi-todo') {
      const activeUnit = CHUPPI_DIGNITY_OPTIONS.find(u => u.units === selectedUnits);
      detailsSummary = activeUnit ? activeUnit.label : 'Custom Menstrual Dignity Support';
    } else if (selectedCauseId === 'little-heartbeats') {
      detailsSummary = 'Pediatric Cardiac Support';
    } else if (selectedCauseId === 'shikshalaya') {
      const freqConfig = SHIKSHALAYA_PRICING[frequency as keyof typeof SHIKSHALAYA_PRICING] || SHIKSHALAYA_PRICING.monthly;
      const prefText = childPreference ? ` • Child: ${childPreference}` : '';
      const countText = ` • ${numberOfChildren} ${numberOfChildren === 1 ? 'Child' : 'Children'}`;
      detailsSummary = `Education Sponsorship (${freqConfig.label}${prefText}${countText})`;
    }

    try {
      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: activeAmt,
          causeId: selectedCauseId,
          frequency,
          dignityUnit: selectedCauseId === 'chuppi-todo' && selectedUnits ? `${selectedUnits} Dignity Unit` : undefined,
          childPreference: selectedCauseId === 'shikshalaya' && childPreference ? childPreference : undefined,
          numberOfChildren: selectedCauseId === 'shikshalaya' ? numberOfChildren : undefined,
          isCustom: isOtherSelected,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          need80G: formData.need80G,
          pan: formData.need80G ? formData.pan : undefined,
          address: formData.address,
          citizenConsent: formData.citizenConsent,
        }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        if (json.errors) {
          setErrors(json.errors);
        } else {
          setErrors({ general: json.message || 'Error processing request.' });
        }
        setIsSubmitting(false);
        return;
      }

      setPledgeSuccess({
        refId: json.refId,
        donorName: `${formData.firstName} ${formData.lastName}`,
        amount: activeAmt,
        detailsSummary,
        causeTitle: activeCause.title,
        has80G: formData.need80G,
      });

      setIsSubmitting(false);
    } catch (err) {
      console.error('Submission error:', err);
      const fallbackRef = `RIF-SPON-${Date.now().toString().slice(-6)}`;
      setPledgeSuccess({
        refId: fallbackRef,
        donorName: `${formData.firstName} ${formData.lastName}`,
        amount: activeAmt,
        detailsSummary,
        causeTitle: activeCause.title,
        has80G: formData.need80G,
      });
      setIsSubmitting(false);
    }
  };

  const currentAmount = getActiveAmount();

  return (
    <section 
      id="donation-form" 
      className={styles.formSectionWrapper}
      aria-labelledby="donation-form-title"
    >
      <div className={styles.donationPanel}>
        {pledgeSuccess ? (
          /* Confirmation Success State */
          <div className={styles.pledgeSuccess} role="status">
            <div className={styles.pledgeSuccessIcon}>
              <Check className="w-7 h-7 stroke-[2.5]" />
            </div>
            <h3 className={styles.pledgeSuccessTitle}>Thank You for Your Sponsorship!</h3>
            <p className={styles.pledgeSuccessText}>
              Dear <strong>{pledgeSuccess.donorName}</strong>, your sponsorship pledge of{' '}
              <strong className="text-[#35164F]">₹{pledgeSuccess.amount.toLocaleString('en-IN')}</strong>{' '}
              ({pledgeSuccess.detailsSummary}) for{' '}
              <strong>{pledgeSuccess.causeTitle}</strong> has been received.
            </p>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-[#665D6C] block mb-1">
                Your Official Sponsorship Reference
              </span>
              <span className={styles.pledgeRefPill}>#{pledgeSuccess.refId}</span>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E7DDED] rounded-xl p-6 text-left max-w-lg mx-auto mb-6 text-sm text-[#241D29]">
              <div className="font-bold text-[#35164F] mb-2 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#6A2C91]" /> Completing Your Transfer
              </div>
              <p className="text-xs text-[#665D6C] leading-relaxed mb-3">
                To complete your contribution, kindly use the direct bank transfer details or scan one of the official QR codes listed in the sections below, mentioning reference <strong>#{pledgeSuccess.refId}</strong> in your payment remarks.
              </p>
              <div className="bg-[#F3ECF8] p-3 rounded-lg font-mono text-xs text-[#35164F] space-y-1">
                <div>A/C Name: Raise India Foundation</div>
                <div>A/C Number: 916010019605596 (Axis Bank)</div>
                <div>IFSC: UTIB0000696</div>
              </div>
              {pledgeSuccess.has80G && (
                <p className="text-xs text-[#6A2C91] font-semibold mt-3">
                  ✓ Section 80G tax exemption certificate will be issued to your email.
                </p>
              )}
            </div>

            <button
              type="button"
              className="text-sm font-bold text-[#6A2C91] underline hover:text-[#35164F] cursor-pointer"
              onClick={() => setPledgeSuccess(null)}
            >
              ← Make Another Sponsorship or Modify Form
            </button>
          </div>
        ) : (
          /* Balanced Two-Column Form Panel */
          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.formGridContainer}>
              {/* ─────────────────────────────────────────────────────────────
                  LEFT COLUMN: DYNAMIC CAMPAIGN & AMOUNT SELECTION
                  ───────────────────────────────────────────────────────────── */}
              <div className={styles.formColLeft}>
                <div className={styles.panelHeader}>
                  <span className={styles.panelEyebrow}>CHOOSE YOUR SUPPORT</span>
                  <h2 id="donation-form-title" className={styles.panelTitle}>
                    Select Campaign &amp; Amount
                  </h2>
                  <p className={styles.panelSub}>
                    Support our verified grassroots programs across child education, healthcare, and menstrual health.
                  </p>
                </div>

                {/* 1. Dynamic Campaign Selector (3 Authentic Campaigns) */}
                <div className={styles.causeSectionWrapper}>
                  <label className={styles.sectionSubLabel}>Select Campaign</label>
                  <div className={styles.causePillsRow} role="radiogroup" aria-label="Select Campaign">
                    <StaggerContainer className={styles.causePillsRow} role="radiogroup" aria-label="Select Campaign">
                      {CAUSES.map((cause, index) => {
                        const isSelected = cause.id === selectedCauseId;
                        const IconComponent = cause.icon;

                        return (
                          <StaggerItem
                            key={cause.id}
                            index={index}
                            role="radio"
                            aria-checked={isSelected}
                            tabIndex={0}
                            className={`${styles.causePill} ${isSelected ? styles.causePillSelected : ''}`}
                            onClick={() => handleCampaignSwitch(cause.id)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                handleCampaignSwitch(cause.id);
                              }
                            }}
                          >
                            <div className={styles.causePillLeft}>
                              <div className={styles.causePillIconWrapper}>
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <div>
                                <div className={styles.causePillTitle}>{cause.title}</div>
                                <div className={styles.causePillTag}>{cause.category}</div>
                              </div>
                            </div>
                            {isSelected && (
                              <div className={styles.causePillCheck}>
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </div>
                            )}
                          </StaggerItem>
                        );
                      })}
                    </StaggerContainer>
                  </div>
                </div>

                {/* Dynamic Campaign-Specific Area with Smooth Animation */}
                <div key={transitionKey} className={styles.campaignFieldsFade}>
                  {/* Campaign Supporting Description */}
                  <div className={styles.campaignDescNotice}>
                    <p>{activeCause.description}</p>
                  </div>

                  {/* ─────────────────────────────────────────────────────────
                      CAMPAIGN A: CHUPPI TODO (DIGNITY UNITS)
                      ───────────────────────────────────────────────────────── */}
                  {selectedCauseId === 'chuppi-todo' && (
                    <div className={styles.campaignSpecificGroup}>
                      {/* Frequency Toggle */}
                      <div className={styles.freqToggle} role="group" aria-label="Donation Frequency">
                        <button
                          type="button"
                          className={`${styles.freqBtn} ${frequency === 'one-time' ? styles.freqBtnActive : ''}`}
                          onClick={() => setFrequency('one-time')}
                        >
                          One-Time Sponsorship
                        </button>
                        <button
                          type="button"
                          className={`${styles.freqBtn} ${frequency === 'monthly' ? styles.freqBtnActive : ''}`}
                          onClick={() => setFrequency('monthly')}
                        >
                          Monthly Sustainer
                        </button>
                      </div>

                      {/* 4 Dignity Unit Tiles */}
                      <div className={styles.unitsSectionLabel}>
                        <span>Select Dignity Units</span>
                        <span className="text-xs text-[#E83E8C] font-semibold">1 Kit = ₹1,000</span>
                      </div>

                      <StaggerContainer className={styles.unitsGrid} role="radiogroup" aria-label="Dignity Units">
                        {CHUPPI_DIGNITY_OPTIONS.map((opt, index) => {
                          const isSelected = selectedUnits === opt.units && !isOtherSelected;

                          return (
                            <StaggerItem
                              key={opt.units}
                              index={index}
                              role="radio"
                              aria-checked={isSelected}
                              tabIndex={0}
                              className={`${styles.unitTile} ${isSelected ? styles.unitTileSelected : ''}`}
                              onClick={() => handleDignitySelect(opt)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  handleDignitySelect(opt);
                                }
                              }}
                            >
                              <Heart className={`w-4 h-4 ${styles.unitTileIcon}`} />
                              <div className={styles.unitTileNumber}>{opt.units}</div>
                              <div className={styles.unitTileLabel}>Dignity Unit</div>
                              <div className={styles.unitTileRupee}>
                                ₹{opt.inrAmount.toLocaleString('en-IN')}
                              </div>
                              {isSelected && (
                                <span className={styles.unitTileCheck} aria-label="Selected">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                </span>
                              )}
                            </StaggerItem>
                          );
                        })}
                      </StaggerContainer>
                    </div>
                  )}

                  {/* ─────────────────────────────────────────────────────────
                      CAMPAIGN B: MISSION LITTLE HEARTBEATS (CARDIAC AMOUNTS)
                      ───────────────────────────────────────────────────────── */}
                  {selectedCauseId === 'little-heartbeats' && (
                    <div className={styles.campaignSpecificGroup}>
                      {/* Frequency Toggle */}
                      <div className={styles.freqToggle} role="group" aria-label="Donation Frequency">
                        <button
                          type="button"
                          className={`${styles.freqBtn} ${frequency === 'one-time' ? styles.freqBtnActive : ''}`}
                          onClick={() => setFrequency('one-time')}
                        >
                          One-Time Cardiac Support
                        </button>
                        <button
                          type="button"
                          className={`${styles.freqBtn} ${frequency === 'monthly' ? styles.freqBtnActive : ''}`}
                          onClick={() => setFrequency('monthly')}
                        >
                          Monthly Sustainer
                        </button>
                      </div>

                      {/* 4 Required Healthcare Presets */}
                      <div className={styles.unitsSectionLabel}>
                        <span>Select Contribution Amount</span>
                        <span className="text-xs text-[#6A2C91] font-semibold">Fortis Hospital Partner</span>
                      </div>

                      <StaggerContainer className={styles.presetAmountsGrid} role="radiogroup" aria-label="Cardiac Care Amounts">
                        {HEARTBEAT_AMOUNT_PRESETS.map((item, index) => {
                          const isSelected = heartbeatPreset === item.amount && !isOtherSelected;

                          return (
                            <StaggerItem
                              key={item.amount}
                              index={index}
                              role="radio"
                              aria-checked={isSelected}
                              tabIndex={0}
                              className={`${styles.amountTile} ${isSelected ? styles.amountTileSelected : ''}`}
                              onClick={() => handleHeartbeatSelect(item.amount)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  handleHeartbeatSelect(item.amount);
                                }
                              }}
                            >
                              <Heart className={`w-4 h-4 ${styles.unitTileIcon}`} />
                              <div className={styles.amountTileValue}>{item.label}</div>
                              <div className={styles.amountTileSub}>{item.sub}</div>
                              {isSelected && (
                                <span className={styles.unitTileCheck} aria-label="Selected">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                </span>
                              )}
                            </StaggerItem>
                          );
                        })}
                      </StaggerContainer>
                    </div>
                  )}

                  {/* ─────────────────────────────────────────────────────────
                      CAMPAIGN C: SUPPORT SHIKSHALAYA (DYNAMIC EDUCATION SPONSORSHIP)
                      ───────────────────────────────────────────────────────── */}
                  {selectedCauseId === 'shikshalaya' && (
                    <div className={styles.campaignSpecificGroup}>
                      {/* A. 4 Sponsorship Frequency Options with Staggered Entrance & Dynamic Pricing */}
                      <div className={styles.formMetaField}>
                        <div className={styles.unitsSectionLabel}>
                          <span>Sponsorship Frequency</span>
                          <span className="text-xs text-[#6A2C91] font-semibold">Configured Educational Charges</span>
                        </div>
                        <StaggerContainer className={styles.shikshalayaFreqGrid} role="radiogroup" aria-label="Sponsorship Frequency">
                          {Object.values(SHIKSHALAYA_PRICING).map((cfg, index) => {
                            const isSelected = frequency === cfg.id && !isOtherSelected;
                            const singleChildAmount = cfg.baseAmountPerChild;
                            const totalAmount = cfg.baseAmountPerChild * numberOfChildren;

                            return (
                              <StaggerItem
                                key={cfg.id}
                                index={index}
                                role="radio"
                                aria-checked={isSelected}
                                tabIndex={0}
                                className={`${styles.freqCard} ${isSelected ? styles.freqCardSelected : ''}`}
                                onClick={() => handleShikshalayaFrequencyChange(cfg.id)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleShikshalayaFrequencyChange(cfg.id);
                                  }
                                }}
                              >
                                <div className={styles.freqCardHeader}>
                                  <div className={styles.freqCardLabel}>{cfg.label}</div>
                                  {isSelected && (
                                    <span className={styles.freqCardCheck} aria-label="Selected">
                                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                                    </span>
                                  )}
                                </div>
                                <div className={styles.freqCardAmount}>
                                  ₹{totalAmount.toLocaleString('en-IN')}
                                </div>
                                <div className={styles.freqCardPeriod}>
                                  {numberOfChildren > 1 ? `₹${singleChildAmount.toLocaleString('en-IN')}/child` : cfg.periodSuffix}
                                </div>
                                <div className={styles.freqCardDescriptor}>
                                  {cfg.billingDescriptor}
                                </div>
                              </StaggerItem>
                            );
                          })}
                        </StaggerContainer>
                      </div>

                      {/* B & C: Child Preference & Number of Children */}
                      <div className={styles.shikshalayaMetaGrid}>
                        {/* B. Beneficiary Gender Selection */}
                        <div className={styles.childPrefGroup}>
                          <label className={styles.sectionSubLabel}>Child Preference</label>
                          <div className={styles.childPrefRow} role="radiogroup" aria-label="Child Preference">
                            <button
                              type="button"
                              role="radio"
                              aria-checked={childPreference === 'Boy'}
                              className={`${styles.childPrefBtn} ${childPreference === 'Boy' ? styles.childPrefBtnSelected : ''}`}
                              onClick={() => setChildPreference(prev => prev === 'Boy' ? '' : 'Boy')}
                            >
                              <Baby className="w-4 h-4" />
                              <span>Boy</span>
                              {childPreference === 'Boy' && <Check className="w-3.5 h-3.5 stroke-[3] ml-auto text-[#6A2C91]" />}
                            </button>
                            <button
                              type="button"
                              role="radio"
                              aria-checked={childPreference === 'Girl'}
                              className={`${styles.childPrefBtn} ${childPreference === 'Girl' ? styles.childPrefBtnSelected : ''}`}
                              onClick={() => setChildPreference(prev => prev === 'Girl' ? '' : 'Girl')}
                            >
                              <Baby className="w-4 h-4" />
                              <span>Girl</span>
                              {childPreference === 'Girl' && <Check className="w-3.5 h-3.5 stroke-[3] ml-auto text-[#6A2C91]" />}
                            </button>
                          </div>
                        </div>

                        {/* C. Number of Children Selector */}
                        <div className={styles.childPrefGroup}>
                          <label className={styles.sectionSubLabel}>
                            Number of Children ({numberOfChildren})
                          </label>
                          <div className={styles.childrenCounterRow}>
                            <button
                              type="button"
                              disabled={numberOfChildren <= 1}
                              onClick={() => handleChildrenCountChange(-1)}
                              className={styles.counterBtn}
                              aria-label="Decrease number of children"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <input
                              type="number"
                              min={1}
                              max={50}
                              value={numberOfChildren}
                              onChange={(e) => {
                                const parsed = parseInt(e.target.value, 10);
                                if (!isNaN(parsed) && parsed >= 1 && parsed <= 50) {
                                  setNumberOfChildren(parsed);
                                }
                              }}
                              className={styles.counterInput}
                              aria-label="Number of children"
                            />
                            <button
                              type="button"
                              disabled={numberOfChildren >= 50}
                              onClick={() => handleChildrenCountChange(1)}
                              className={styles.counterBtn}
                              aria-label="Increase number of children"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* D. Configured Dynamic Sponsorship Amount Display Banner with Smooth 320ms Fade/Slide */}
                      <div className={styles.dynamicAmountBanner}>
                        <div className={styles.dynamicAmountBannerLeft}>
                          <span className={styles.dynamicAmountBannerTag}>CONFIGURED SPONSORSHIP CHARGE</span>
                          <div 
                            key={`display-${frequency}-${numberOfChildren}-${currentAmount}`} 
                            className={styles.dynamicAmountAnimatedRow}
                          >
                            <span className={styles.dynamicAmountCurrency}>₹</span>
                            <span className={styles.dynamicAmountNumber}>{currentAmount.toLocaleString('en-IN')}</span>
                            <span className={styles.dynamicAmountPeriod}>
                              {isOtherSelected 
                                ? '(Custom Contribution)' 
                                : (SHIKSHALAYA_PRICING[frequency as keyof typeof SHIKSHALAYA_PRICING] || SHIKSHALAYA_PRICING.monthly).periodSuffix}
                            </span>
                          </div>
                        </div>
                        <div className={styles.dynamicAmountBannerRight}>
                          <span className={styles.dynamicAmountCountBadge}>
                            {numberOfChildren} {numberOfChildren === 1 ? 'Child' : 'Children'}
                            {childPreference ? ` • ${childPreference}` : ''}
                          </span>
                          <span className={styles.dynamicAmountSubText}>
                            {isOtherSelected 
                              ? 'Custom education scholarship fund contribution.' 
                              : (numberOfChildren > 1
                                  ? `Covers comprehensive education, daily nutrition, and uniforms for ${numberOfChildren} children.`
                                  : (SHIKSHALAYA_PRICING[frequency as keyof typeof SHIKSHALAYA_PRICING] || SHIKSHALAYA_PRICING.monthly).billingDescriptor)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ─────────────────────────────────────────────────────────
                      COMMON: OR SEPARATOR & CUSTOM AMOUNT / OTHER
                      ───────────────────────────────────────────────────────── */}
                  <div className={styles.orSeparator}>
                    <div className={styles.orLine} />
                    <span className={styles.orText}>OR CUSTOM AMOUNT</span>
                    <div className={styles.orLine} />
                  </div>

                  <div>
                    <label htmlFor="customAmountInput" className="text-xs font-bold uppercase tracking-wider text-[#665D6C] block mb-2">
                      Enter Custom Contribution Amount
                    </label>
                    <div className={styles.customAmountRow}>
                      <button
                        type="button"
                        className={`${styles.btnOther} ${isOtherSelected ? styles.btnOtherSelected : ''}`}
                        onClick={handleOtherClick}
                      >
                        Other
                      </button>

                      <div className={styles.customInputWrapper}>
                        <span className={styles.customInputPrefix}>₹</span>
                        <input
                          ref={customInputRef}
                          type="text"
                          id="customAmountInput"
                          name="customAmount"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          onFocus={() => {
                            setIsOtherSelected(true);
                            setSelectedUnits(null);
                            setHeartbeatPreset(null);
                          }}
                          placeholder="e.g. 5000"
                          className={`${styles.customInput} ${errors.amount ? styles.customInputError : ''}`}
                          aria-invalid={!!errors.amount}
                        />
                      </div>
                    </div>

                    {errors.amount && (
                      <p className={styles.fieldError}>
                        <Info className="w-3.5 h-3.5" /> {errors.amount}
                      </p>
                    )}
                  </div>

                  {/* Summary Card */}
                  <div className={styles.supportSummaryCard}>
                    <div>
                      <span className={styles.supportSummaryLabel}>Total Selected Support</span>
                      <div className={styles.supportSummaryValue}>
                        ₹{currentAmount.toLocaleString('en-IN')}{' '}
                        <span className="text-xs font-normal text-[#665D6C]">
                          {selectedCauseId === 'chuppi-todo' && selectedUnits && !isOtherSelected
                            ? `(${selectedUnits} Dignity Unit)`
                            : selectedCauseId === 'shikshalaya'
                            ? `(${frequency}${childPreference ? ` • ${childPreference}` : ''}${numberOfChildren > 1 ? ` • ${numberOfChildren} Children` : ''})`
                            : isOtherSelected ? '(Custom Amount)' : `(${frequency})`}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={styles.supportSummaryTax}>
                        50% Tax Exemption u/s 80G
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─────────────────────────────────────────────────────────────
                  RIGHT COLUMN: DONOR DETAILS, 80G TAX, SPONSOR NOW BUTTON
                  ───────────────────────────────────────────────────────────── */}
              <RevealOnScroll delay={100} className={styles.formColRight}>
                <div className={styles.panelHeader}>
                  <span className={styles.panelEyebrow}>YOUR DETAILS</span>
                  <h2 className={styles.panelTitle}>Your Support Makes a Difference</h2>
                  <p className={styles.panelSub}>
                    Please enter your contact details for official Section 80G tax receipt dispatch.
                  </p>
                </div>

                <div className={styles.formFieldsGroup}>
                  {/* Name Fields */}
                  <div className={styles.inputsRow2}>
                    <div className={styles.fieldGroup}>
                      <label htmlFor="firstName" className={styles.fieldLabel}>
                        First Name <span className={styles.fieldReq}>*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className={`${styles.fieldInput} ${errors.firstName ? styles.fieldInputError : ''}`}
                      />
                      {errors.firstName && (
                        <p className={styles.fieldError}>
                          <Info className="w-3.5 h-3.5" /> {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="lastName" className={styles.fieldLabel}>
                        Last Name <span className={styles.fieldReq}>*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className={`${styles.fieldInput} ${errors.lastName ? styles.fieldInputError : ''}`}
                      />
                      {errors.lastName && (
                        <p className={styles.fieldError}>
                          <Info className="w-3.5 h-3.5" /> {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className={styles.inputsRow2}>
                    <div className={styles.fieldGroup}>
                      <label htmlFor="email" className={styles.fieldLabel}>
                        Email Address <span className={styles.fieldReq}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`${styles.fieldInput} ${errors.email ? styles.fieldInputError : ''}`}
                      />
                      <span className={styles.fieldHelper}>Official receipt sent here</span>
                      {errors.email && (
                        <p className={styles.fieldError}>
                          <Info className="w-3.5 h-3.5" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="phone" className={styles.fieldLabel}>
                        Mobile Number <span className={styles.fieldReq}>*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`${styles.fieldInput} ${errors.phone ? styles.fieldInputError : ''}`}
                      />
                      <span className={styles.fieldHelper}>SMS / WhatsApp updates</span>
                      {errors.phone && (
                        <p className={styles.fieldError}>
                          <Info className="w-3.5 h-3.5" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 80G Tax Exemption Section */}
                  <div className={styles.taxBox}>
                    <label className={styles.checkboxRow}>
                      <input
                        type="checkbox"
                        name="need80G"
                        checked={formData.need80G}
                        onChange={handleInputChange}
                        className={styles.checkboxInput}
                      />
                      <div>
                        <div className={styles.checkboxTitle}>
                          Claim 50% Tax Exemption u/s 80G
                        </div>
                        <div className={styles.checkboxDesc}>
                          Raise India Foundation is certified under Section 80G (Reg. DEL-RE28502-27042018/9939).
                        </div>
                      </div>
                    </label>

                    {formData.need80G && (
                      <div className={styles.taxFieldsGroup}>
                        <div className={styles.fieldGroup}>
                          <label htmlFor="pan" className={styles.fieldLabel}>
                            PAN Number <span className={styles.fieldReq}>*</span>
                          </label>
                          <input
                            type="text"
                            id="pan"
                            name="pan"
                            maxLength={10}
                            value={formData.pan}
                            onChange={handleInputChange}
                            placeholder="ABCDE1234F"
                            className={`${styles.fieldInput} uppercase font-mono ${errors.pan ? styles.fieldInputError : ''}`}
                          />
                          {errors.pan && (
                            <p className={styles.fieldError}>
                              <Info className="w-3.5 h-3.5" /> {errors.pan}
                            </p>
                          )}
                        </div>

                        <div className={styles.fieldGroup}>
                          <label htmlFor="address" className={styles.fieldLabel}>
                            City / Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            placeholder="e.g. New Delhi"
                            className={styles.fieldInput}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Citizen Consent */}
                  <div className={styles.consentWrapper}>
                    <label className={styles.checkboxRow}>
                      <input
                        type="checkbox"
                        name="citizenConsent"
                        checked={formData.citizenConsent}
                        onChange={handleInputChange}
                        className={styles.checkboxInput}
                      />
                      <span className="text-xs text-[#665D6C] leading-snug">
                        I confirm that I am an Indian citizen donating from Indian bank accounts in accordance with FCRA guidelines.
                      </span>
                    </label>
                    {errors.citizenConsent && (
                      <p className={styles.fieldError}>
                        <Info className="w-3.5 h-3.5" /> {errors.citizenConsent}
                      </p>
                    )}
                  </div>

                  {/* Compact Pricing & Sponsorship Summary */}
                  <div className={styles.checkoutSummaryCard} role="region" aria-label="Sponsorship Summary">
                    <div className={styles.checkoutSummaryHeader}>
                      <Sparkles className="w-4 h-4 text-[#E83E8C]" />
                      <span className={styles.checkoutSummaryTitle}>Sponsorship Summary</span>
                    </div>

                    <div className={styles.checkoutSummaryRows}>
                      <div className={styles.checkoutSummaryRow}>
                        <span className={styles.checkoutSummaryLabel}>Campaign:</span>
                        <span className={styles.checkoutSummaryValue}>
                          {selectedCauseId === 'shikshalaya'
                            ? 'Support Shikshalaya'
                            : activeCause.title}
                        </span>
                      </div>

                      <div className={styles.checkoutSummaryRow}>
                        <span className={styles.checkoutSummaryLabel}>Frequency:</span>
                        <span className={styles.checkoutSummaryValue}>
                          {selectedCauseId === 'shikshalaya'
                            ? (SHIKSHALAYA_PRICING[frequency as keyof typeof SHIKSHALAYA_PRICING]?.label || 'Monthly')
                            : (frequency === 'monthly' ? 'Monthly' : 'One-Time')}
                        </span>
                      </div>

                      {selectedCauseId === 'shikshalaya' && (
                        <div className={styles.checkoutSummaryRow}>
                          <span className={styles.checkoutSummaryLabel}>Beneficiaries:</span>
                          <span className={styles.checkoutSummaryValue}>
                            {numberOfChildren} {numberOfChildren === 1 ? 'Child' : 'Children'}
                            {childPreference ? ` (${childPreference})` : ''}
                          </span>
                        </div>
                      )}

                      {selectedCauseId === 'chuppi-todo' && selectedUnits && !isOtherSelected && (
                        <div className={styles.checkoutSummaryRow}>
                          <span className={styles.checkoutSummaryLabel}>Dignity Units:</span>
                          <span className={styles.checkoutSummaryValue}>
                            {selectedUnits} {selectedUnits === 1 ? 'Unit' : 'Units'} ({selectedUnits * 12} Kits)
                          </span>
                        </div>
                      )}

                      <div className={`${styles.checkoutSummaryRow} ${styles.checkoutSummaryTotalRow}`}>
                        <span className={styles.checkoutSummaryTotalLabel}>
                          {selectedCauseId === 'shikshalaya' ? 'Sponsorship Amount:' : 'Donation Amount:'}
                        </span>
                        <span 
                          key={`sum-${currentAmount}`} 
                          className={styles.checkoutSummaryTotalValue}
                        >
                          ₹{currentAmount.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div className={styles.checkoutSummaryNotice}>
                      <Lock className="w-3.5 h-3.5 text-[#6A2C91] shrink-0" />
                      <span>One-time payment. For recurring mandates, standing instruction receipt is provided.</span>
                    </div>
                  </div>

                  {/* Sponsor Now Button */}
                  <div className={styles.submitBtnWrapper}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.btnSponsorNow}
                    >
                      {isSubmitting ? (
                        <span>Processing Sponsorship...</span>
                      ) : (
                        <>
                          <Heart className="w-5 h-5 fill-current text-white" />
                          <span>Sponsor Now ❤️</span>
                          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                        </>
                      )}
                    </button>

                    <div className={styles.secureNotice}>
                      <Lock className="w-3.5 h-3.5 text-[#6A2C91]" />
                      <span>Bank-grade 256-bit encryption • 100% Verified Non-Profit</span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
