import { SuccessResponse } from './common.d.js';

/**
 * @category Api data
 *
 * @since 1.0.1
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
 *
 * @since 1.0.1
 */
type DriversResponse = SuccessResponse<{
    DriverTable: {
        Drivers: DriverApiData[];
    };
}>;

export type { DriverApiData, DriversResponse };
