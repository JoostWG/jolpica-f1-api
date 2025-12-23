import type { RaceApiData, SuccessResponse } from '.';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface TimingApiData {
    driverId: string;
    position: string;
    time: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface LapApiData {
    number: string;
    Timings: TimingApiData[];
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type LapsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { Laps: LapApiData[] })[];
    };
}>;
