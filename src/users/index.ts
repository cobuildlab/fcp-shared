export enum UserStatus {
  Active = 'active',
  Inactive = 'inactive',
  InvitationPending = 'invitationPending',
}

export type UserStatusType = `${UserStatus}`;
