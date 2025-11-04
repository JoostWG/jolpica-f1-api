import type { SuccessResponse } from '.';

export interface DriverApiData {
    driverId: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
    permanentNumber?: string;
    code?: string;
}

export type DriversResponse = SuccessResponse<{
    DriverTable: {
        Drivers: DriverApiData[];
    };
}>;
