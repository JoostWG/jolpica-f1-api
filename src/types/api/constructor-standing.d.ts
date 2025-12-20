import type { SuccessResponse } from '.';
import type { ConstructorApiData } from './constructor';

/**
 * @category Api data
 */
export interface ConstructorStandingApiData {
    position?: string;
    positionText: string;
    points: string;
    wins: string;
    Constructor: ConstructorApiData;
}

/**
 * @category Api responses
 */
export type ConstructorStandingsResponse = SuccessResponse<{
    StandingsTable: {
        StandingsLists: {
            season: string;
            round: string;
            ConstructorStandings: ConstructorStandingApiData[];
        }[];
    };
}>;
