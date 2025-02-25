export enum Role {
  AppAdmin = 'App Admin',
  AppAgent = 'App Agent',

  // Regular customers.
  AppCustomer = 'App Customer',
  AppCustomerProDriver = 'App Customer Pro Driver',
  AppCustomerElite = 'App Customer Elite',
  AppCustomerPremium = 'App Customer Premium',

  // Customer drivers.
  AppCustomerBasic = 'App Customer Basic',
  AppCustomerProLegacy = 'App Customer Pro Legacy',
  Customer = 'Customer',
}

export type RoleType = `${Role}`;
