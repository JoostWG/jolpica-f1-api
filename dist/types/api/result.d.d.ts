import { SuccessResponse, FastestLapApiData, FinishingTimeApiData } from './common.d.js';
import { ConstructorApiData } from './constructor.d.js';
import { DriverApiData } from './driver.d.js';
import { RaceApiData } from './race.d.js';
import './circuit.d.js';

interface ResultApiData {
    number: string;
    position: string;
    positionText: string;
    points: string;
    Driver: DriverApiData;
    Constructor?: ConstructorApiData;
    grid?: string;
    laps?: string;
    status?: string;
    FastestLap: FastestLapApiData;
    Time?: FinishingTimeApiData;
}

type ResultsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & {
            Results: ResultApiData[];
        })[];
    };
}>;

export type { ResultApiData, ResultsResponse };
