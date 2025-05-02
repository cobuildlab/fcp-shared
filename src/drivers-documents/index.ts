export enum DriverDocumentType {
  CommercialDriverLicense = 'COMMERCIAL_DRIVER_LICENSE',
  EmploymentApplication = 'EMPLOYMENT_APPLICATION',
  MvrReport = 'MVR_REPORT',
  MedicalCertificate = 'MEDICAL_CERTIFICATE',
  MedicalExaminerVerificationNote = 'MEDICAL_EXAMINER_VERIFICATION_NOTE',
}

export type DriverDocumentTypeValues = `${DriverDocumentType}`;
