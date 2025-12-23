import type { SuccessResponse } from '.';
import type { ConstructorApiData } from './constructor';

/**
 * @category Api data
 *
 * @since 1.0.1
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
 *
 * @since 1.0.1
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
