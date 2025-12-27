import { SuccessResponse } from './common.d.js';
import { ConstructorApiData } from './constructor.d.js';

/**
 * @category Api data
 *
 * @since 1.0.1
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
 *
 * @since 1.0.1
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
