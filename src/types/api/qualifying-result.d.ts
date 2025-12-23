import type { ConstructorApiData, DriverApiData, RaceApiData, SuccessResponse } from '.';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface QualifyingResultApiData {
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
export type QualifyingResultsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & { QualifyingResults: QualifyingResultApiData[] })[];
    };
}>;
