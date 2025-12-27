import { SuccessResponse } from './common.d.js';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
interface SeasonApiData {
    season: string;
    url: string;
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type SeasonsResponse = SuccessResponse<{
    SeasonTable: {
        Seasons: SeasonApiData[];
    };
}>;

export type { SeasonApiData, SeasonsResponse };
