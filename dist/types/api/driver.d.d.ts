import { SuccessResponse } from './common.d.js';

interface DriverApiData {
    driverId: string;
    url: string;
    givenName: string;
    familyName: string;
    dateOfBirth: string;
    nationality: string;
    permanentNumber?: string;
    code?: string;
}

type DriversResponse = SuccessResponse<{
    DriverTable: {
        Drivers: DriverApiData[];
    };
}>;

export type { DriverApiData, DriversResponse };
