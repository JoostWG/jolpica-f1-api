import { SuccessResponse } from './common.d.js';
import { RaceApiData } from './race.d.js';
import './circuit.d.js';

interface TimingApiData {
    driverId: string;
    position: string;
    time: string;
}

interface LapApiData {
    number: string;
    Timings: TimingApiData[];
}

type LapsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { Laps: LapApiData[] })[];
    };
}>;

export type { LapApiData, LapsResponse, TimingApiData };
