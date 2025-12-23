import type { SuccessResponse } from '.';
import type { ConstructorApiData } from './constructor';
import type { DriverApiData } from './driver';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface DriverStandingApiData {
    position?: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: DriverApiData;
    Constructors: ConstructorApiData[];
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type DriverStandingsResponse = SuccessResponse<{
    StandingsTable: {
        StandingsLists: {
            season: string;
            round: string;
            DriverStandings: DriverStandingApiData[];
        }[];
    };
}>;
