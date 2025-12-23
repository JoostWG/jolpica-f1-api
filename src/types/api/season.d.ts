import type { SuccessResponse } from '.';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface SeasonApiData {
    season: string;
    url: string;
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type SeasonsResponse = SuccessResponse<{
    SeasonTable: {
        Seasons: SeasonApiData[];
    };
}>;
