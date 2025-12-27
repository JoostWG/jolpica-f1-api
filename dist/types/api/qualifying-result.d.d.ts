import { SuccessResponse } from './common.d.js';
import { ConstructorApiData } from './constructor.d.js';
import { DriverApiData } from './driver.d.js';
import { RaceApiData } from './race.d.js';
import './circuit.d.js';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
interface QualifyingResultApiData {
    number: string;
    position?: string;
    Driver: DriverApiData;
    Constructor: ConstructorApiData;
    Q1?: string;
    Q2?: string;
    Q3?: string;
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type QualifyingResultsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { QualifyingResults: QualifyingResultApiData[] })[];
    };
}>;

export type { QualifyingResultApiData, QualifyingResultsResponse };
