import type { RaceApiData, SuccessResponse } from '.';

/**
 * @category Api data
 */
export interface TimingApiData {
    driverId: string;
    position: string;
    time: string;
}

/**
 * @category Api data
 */
export interface LapApiData {
    number: string;
    Timings: TimingApiData[];
}

/**
 * @category Api responses
 */
export type LapsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { Laps: LapApiData[] })[];
    };
}>;
