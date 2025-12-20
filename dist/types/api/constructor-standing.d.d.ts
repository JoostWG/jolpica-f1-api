import { SuccessResponse } from './common.d.js';
import { ConstructorApiData } from './constructor.d.js';

/**
 * @category Api data
 */
interface ConstructorStandingApiData {
    position?: string;
    positionText: string;
    points: string;
    wins: string;
    Constructor: ConstructorApiData;
}

/**
 * @category Api responses
 */
type ConstructorStandingsResponse = SuccessResponse<{
    StandingsTable: {
        StandingsLists: {
            season: string;
            round: string;
            ConstructorStandings: ConstructorStandingApiData[];
        }[];
    };
}>;

export type { ConstructorStandingApiData, ConstructorStandingsResponse };
