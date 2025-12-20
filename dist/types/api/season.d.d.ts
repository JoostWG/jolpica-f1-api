import { SuccessResponse } from './common.d.js';

/**
 * @category Api data
 */
interface SeasonApiData {
    season: string;
    url: string;
}

/**
 * @category Api responses
 */
type SeasonsResponse = SuccessResponse<{
    SeasonTable: {
        Seasons: SeasonApiData[];
    };
}>;

export type { SeasonApiData, SeasonsResponse };
