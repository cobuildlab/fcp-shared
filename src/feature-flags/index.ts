export enum FeatureFlag {
  MvrReport = 'MVR_REPORT',
  CustomerCategorySelect = 'CUSTOMER_CATEGORY_SELECT',
  CustomerDashboardRedirectButtonNewCases = 'CUSTOMER_DASHBOARD_REDIRECT_BUTTON_NEW_CASES',
  AttachDocumentTabV2 = 'ATTACH_DOCUMENT_TAB_V2',
  CaseSummaryField = 'CASE_SUMMARY_FIELD',
  ConfirmationDialogOnCaseCommentsPublication = 'CONFIRMATION_DIALOG_ON_CASE_COMMENTS_PUBLICATION',
  CaseSummaryPrintOutPDF = 'CASE_SUMMARY_PRINT_OUT_PDF',
  ViolationCodeManagerComponentWithOOS = 'VIOLATION_CODE_MANAGER_COMPONENT_WITH_OOS',
  DuplicateCaseCheckerModal = 'DUPLICATE_CASE_CHECKER_MODAL',
  ViolationCodeOOSDisplay = 'VIOLATION_CODE_OOS_DISPLAY',
  RedirectionAfterClickOnCommentNotifications = 'REDIRECTION_AFTER_CLICK_ON_COMMENT_NOTIFICATIONS',
  MarkTheCommentsAsRead = 'MARK_THE_COMMENTS_AS_READ',
  DriverViewVersion2 = 'DRIVE_VIEW_VERSION_2',
  DriversDocumentsView = 'DRIVERS_DOCUMENTS_VIEW',
  DriversDocumentsManagementView = 'DRIVERS_DOCUMENTS_MANAGEMENT_VIEW',
}

export type FeatureFlagType = `${FeatureFlag}`;
