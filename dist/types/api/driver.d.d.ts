import { SuccessResponse } from './common.d.js';

/**
 * @category Api data
 */
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

/**
 * @category Api responses
 */
type DriversResponse = SuccessResponse<{
    DriverTable: {
        Drivers: DriverApiData[];
    };
}>;

export type { DriverApiData, DriversResponse };
