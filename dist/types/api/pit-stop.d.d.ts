import { SuccessResponse } from './common.d.js';
import { RaceApiData } from './race.d.js';
import './circuit.d.js';

/**
 * @category Api data
 */
interface PitStopApiData {
    driverId: string;
    lap?: string;
    stop?: string;
    time?: string;
    duration?: string;
}

/**
 * @category Api responses
 */
type PitStopsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { PitStops: PitStopApiData[] })[];
    };
}>;

export type { PitStopApiData, PitStopsResponse };
