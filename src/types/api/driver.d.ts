import type { SuccessResponse } from '.';

/**
 * @category Api data
 *
 * @since 1.0.1
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
 *
 * @since 1.0.1
 */
export type DriversResponse = SuccessResponse<{
    DriverTable: {
        Drivers: DriverApiData[];
    };
}>;
