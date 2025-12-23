import type { RaceApiData, SuccessResponse } from '.';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface PitStopApiData {
    driverId: string;
    lap?: string;
    stop?: string;
    time?: string;
    duration?: string;
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type PitStopsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { PitStops: PitStopApiData[] })[];
    };
}>;
