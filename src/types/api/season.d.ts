import type { SuccessResponse } from '.';

/**
 * @category Api data
 */
export interface SeasonApiData {
    season: string;
    url: string;
}

/**
 * @category Api responses
 */
export type SeasonsResponse = SuccessResponse<{
    SeasonTable: {
        Seasons: SeasonApiData[];
    };
}>;
