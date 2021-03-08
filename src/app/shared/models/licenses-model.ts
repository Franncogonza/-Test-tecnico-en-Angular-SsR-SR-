export interface LicensesList {
    id:                     number;
    typeLicense:            TypeLicense;
    days:                   number;
    initDate:               Date;
    medicDiagnostic:        MedicDiagnostic;
    acceptanceStatement:    boolean;
    assignationType:        string;
    medicCenter:            null;
    approvedDays:           number;
    codeOfEmployed:         null;
    endingDate:             Date;
    medicalCertificateDate: Date;
    birthDate:              null;
    neonatology:            boolean;
    neonatologyDays:        null;
    multipleBirth:          boolean;
    numberOfchildren:       null;
    probableBirthDate:      null;
    fitToWork:              boolean;
    jobSector:              JobSector;
    gcbaLicenseStatus:      string;
    organizationalUnits:    OrganizationalUnit[];
    licenseTypesGroup:      LicenseTypesGroup;
    medicalDecisions:       any[];
    user:                   User;
    appointmentDate:        null;
    observations:           null | string;
}

export interface JobSector {
    id:          number;
    created:     Date;
    updated:     Date;
    code:        string;
    description: string;
}

export interface LicenseTypesGroup {
    id:          number;
    description: string;
}

export interface MedicDiagnostic {
    id:           string;
    key:          string;
    description:  string;
    category:     string;
    ter:          number;
    autoDecision: string;
}

export interface OrganizationalUnit {
    id:            number;
    created:       Date;
    updated:       Date;
    codeOU:        string;
    descriptionOU: string;
    jobPositions:  JobPosition[];
}

export interface JobPosition {
    id:                     number;
    created:                Date;
    updated:                Date;
    jobPositionCode:        string;
    jobPositionDescription: string;
    jobPositionNumericCode: number;
}

export interface TypeLicense {
    id:           number;
    key:          string;
    description:  string;
    type:         string;
    relationship: null;
}

export interface User {
    id:         number;
    businessId: string;
    tenant:     string;
    name:       string;
    surname:    string;
    cuil:       string;
}

export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    sorted:   boolean;
    unsorted: boolean;
    empty:    boolean;
}
