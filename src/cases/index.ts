export enum DataQsStatus {
  Approved = 'APPROVED',
  Denied = 'DENIED',
  Submitted = 'SUBMITTED',
  Closed = 'CLOSED',
}

/**
 * Pm means Payment
 * Pw means Paperwork
 * Res means Response
 * Dol means Driver's own lawyer
 */
export enum CaseStatus {
  New = 'NEW',
  InProgress = 'IN_PROGRESS',
  Closed = 'CLOSED',
  InReview = 'IN_REVIEW',
  AwaitingPmOrPw = 'AWAITING_PM_OR_PW',
  AwaitingResClient = 'AWAITING_RES_CLIENT',
  OpenDol = 'OPEN_DOL',
}

export enum CitationStatus {
  Open = 'Open',
  Closed = 'Closed',
  ClosedFiledInDataQs = 'Closed/Filed in DataQs',
  OpenDol = 'Open (DOL)',
}

export type DataQsStatusType = `${DataQsStatus}`;
export type CaseStatusType = `${CaseStatus}`;
export type CitationStatusType = `${CitationStatus}`;
