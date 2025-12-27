import { SuccessResponse } from './common.d.js';
import { RaceApiData } from './race.d.js';
import './circuit.d.js';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
interface TimingApiData {
    driverId: string;
    position: string;
    time: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
interface LapApiData {
    number: string;
    Timings: TimingApiData[];
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type LapsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { Laps: LapApiData[] })[];
    };
}>;

export type { LapApiData, LapsResponse, TimingApiData };
