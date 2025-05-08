// CDL Class.

export enum CdlClassValue {
  A = 'A',
  B = 'B',
  C = 'C',
  NA = 'N_A_NON_CDL_LICENSE',
}

export enum CdlClassLabel {
  A = 'A',
  B = 'B',
  C = 'C',
  NA = 'N/A (non-CDL license)',
}

export const CDL_CLASSES = Object.values(CdlClassValue).map((cdlClass, index) => ({
  label: cdlClass,
  value: Object.values(CdlClassLabel)[index],
}));

// Endorsements.

export enum CdlEndorsementValue {
  T = 'T_DOUBLE_TRIPLE_TRAILERS',
  P = 'P_PASSENGER',
  N = 'N_TANKER_TANK_VEHICLE',
  H = 'H_HAZARDOUS_MATERIALS',
  X = 'X_COMBINATION_OF_HAZMAT_TANKER',
  S = 'S_SCHOOL_BUS',
  Other = 'OTHER',
}

export enum CdlEndorsementLabel {
  T = 'T - Double/Triple Trailers',
  P = 'P - Passenger',
  N = 'N - Tanker (tank vehicle)',
  H = 'H - Hazardous materials',
  X = 'X - Combination of HAZMAT/Tanker',
  S = 'S - School bus',
  Other = 'Other',
}

export const CDL_ENDORSEMENTS = Object.values(CdlEndorsementValue).map((endorsement, index) => ({
  label: endorsement,
  value: Object.values(CdlEndorsementLabel)[index],
}));

// Restrictions.

export enum CdlRestrictionValue {
  L = 'L',
  Z = 'Z',
  E = 'E',
  K = 'K',
  O = 'O',
  M = 'M',
  V = 'V',
  B = 'B',
  Other = 'OTHER',
}

export enum CdlRestrictionLabel {
  L = 'L - No airbrake equipped CMV',
  Z = 'Z - No full airbrake equipped CMV',
  E = 'E - No manual transmission equipped CMV',
  K = 'K - Intrastate only',
  O = 'O - No tractor/trailer CMV',
  M = 'M - No class A passenger vehicle',
  V = 'V - Medical variance',
  B = 'B - Corrective lenses',
  Other = 'Other',
}

export const CDL_RESTRICTIONS = Object.values(CdlRestrictionValue).map((restriction, index) => ({
  label: restriction,
  value: Object.values(CdlRestrictionLabel)[index],
}));
