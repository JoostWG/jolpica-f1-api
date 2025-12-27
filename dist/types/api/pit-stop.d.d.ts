import { SuccessResponse } from './common.d.js';
import { RaceApiData } from './race.d.js';
import './circuit.d.js';

/**
 * @category Api data
 *
 * @since 1.0.1
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
 *
 * @since 1.0.1
 */
type PitStopsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { PitStops: PitStopApiData[] })[];
    };
}>;

export type { PitStopApiData, PitStopsResponse };
