import { SuccessResponse } from './common.d.js';

interface SeasonApiData {
    season: string;
    url: string;
}

type SeasonsResponse = SuccessResponse<{
    SeasonTable: {
        Seasons: SeasonApiData[];
    };
}>;

export type { SeasonApiData, SeasonsResponse };
