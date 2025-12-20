import type { SuccessResponse } from '.';

/**
 * @category Api data
 */
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

/**
 * @category Api responses
 */
export type DriversResponse = SuccessResponse<{
    DriverTable: {
        Drivers: DriverApiData[];
    };
}>;
