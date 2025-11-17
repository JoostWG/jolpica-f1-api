import { SuccessResponse } from './common.d.js';
import { ConstructorApiData } from './constructor.d.js';

interface ConstructorStandingApiData {
    position?: string;
    positionText: string;
    points: string;
    wins: string;
    Constructor: ConstructorApiData;
}

type ConstructorStandingsResponse = SuccessResponse<{
    StandingsTable: {
        StandingsLists: {
            ConstructorStandings: ConstructorStandingApiData[];
        }[];
    };
}>;

export type { ConstructorStandingApiData, ConstructorStandingsResponse };
