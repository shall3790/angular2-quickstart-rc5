export interface Company {
    $id: string;
    Number: number;
    Id: string;
    Name: string;
    LegalName: string;
    SAPCompany: number;
}

export interface Chain {
    $id: string;
    Number: number;
    Company: Company;
    Name: string;
    TestChain: boolean;
    Group: string;
    $ref: string;
}

export interface State {
    $id: string;
    Abbreviation: string;
    Name: string;
    $ref: string;
}

export interface Store {
    $id: string;
    StoreId: number;
    Company: Company;
    Chain: Chain;
    StoreNumber: number;
    SAPCostCenter: number;
    StoreName: string;
    StreetAddress: string;
    City: string;
    State: string;
    ZipCode: string;
    ZipCodeExtention?: any;
    County: string;
    PhoneNumber: number;
    TimeZone: string;
    EmailAddress?: any;
    Location: string;
    Latitude?: any;
    Longitude?: any;
    Region?: any;
    District?: any;
    Supervisor?: any;
    ReportDistrict?: any;
    ReportState?: any;
    MarketType?: any;
    OpenDate: Date;
    DryRunDate?: any;
    DeliveryDate?: any;
    FixtureDate?: any;
    ConstructionDate?: any;
    RelocationDate?: any;
    GLReportDate?: any;
    LeaseStartDate?: any;
    LeaseTermDate?: any;
    SquareFootage?: any;
    RetailSquareFootage?: any;
    PersonnelArea?: any;
    Active: boolean;
    Status: string;
    BasicFactor?: any;
    SendoutFactor?: any;
    GroundUp: boolean;
}