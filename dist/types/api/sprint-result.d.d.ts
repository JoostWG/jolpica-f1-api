import { SuccessResponse, FinishingTimeApiData, FastestLapApiData } from './common.d.js';
import { ConstructorApiData } from './constructor.d.js';
import { DriverApiData } from './driver.d.js';
import { RaceApiData } from './race.d.js';
import './circuit.d.js';

/**
 * @category Api data
 */
interface SprintResultApiData {
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
type SprintResultsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & {
            SprintResults: SprintResultApiData[];
        })[];
    };
}>;

export type { SprintResultApiData, SprintResultsResponse };
