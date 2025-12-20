import { SuccessResponse } from './common.d.js';
import { ConstructorApiData } from './constructor.d.js';
import { DriverApiData } from './driver.d.js';

/**
 * @category Api data
 */
interface DriverStandingApiData {
    position?: string;
    positionText: string;
    points: string;
    wins: string;
    Driver: DriverApiData;
    Constructors: ConstructorApiData[];
}

/**
 * @category Api responses
 */
type DriverStandingsResponse = SuccessResponse<{
    StandingsTable: {
        StandingsLists: {
            season: string;
            round: string;
            DriverStandings: DriverStandingApiData[];
        }[];
    };
}>;

export type { DriverStandingApiData, DriverStandingsResponse };
