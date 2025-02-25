export enum CustomerStatus {
  Active = 'active',
  Disabled = 'disabled',
}

export enum CustomerSubscription {
  Basic = 'basic',
  Pro = 'pro',
  Premium = 'premium',
  Elite = 'elite',
  ProDriver = 'pro driver',
  ProLegacy = 'pro (legacy)',
}

export type CustomerStatusType = `${CustomerStatus}`;
export type CustomerSubscriptionType = `${CustomerSubscription}`;
