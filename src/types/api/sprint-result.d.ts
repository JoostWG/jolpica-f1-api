import type { RaceApiData, SuccessResponse } from '.';
import type { FastestLapApiData, FinishingTimeApiData } from './common';
import type { ConstructorApiData } from './constructor';
import type { DriverApiData } from './driver';

/**
 * @category Api data
 */
export interface SprintResultApiData {
    number: string;
    position: string;
    positionText: string;
    points: string;
    Driver: DriverApiData;
    Constructor?: ConstructorApiData;
    grid?: string;
    laps?: string;
    status?: string;
    Time?: FinishingTimeApiData;
    FastestLap?: FastestLapApiData;
}

/**
 * @category Api responses
 */
export type SprintResultsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & {
            SprintResults: SprintResultApiData[];
        })[];
    };
}>;
