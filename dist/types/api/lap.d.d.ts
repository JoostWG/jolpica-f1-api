import { SuccessResponse } from './common.d.js';
import { RaceApiData } from './race.d.js';
import './circuit.d.js';

/**
 * @category Api data
 */
interface TimingApiData {
    driverId: string;
    position: string;
    time: string;
}

/**
 * @category Api data
 */
interface LapApiData {
    number: string;
    Timings: TimingApiData[];
}

/**
 * @category Api responses
 */
type LapsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { Laps: LapApiData[] })[];
    };
}>;

export type { LapApiData, LapsResponse, TimingApiData };
