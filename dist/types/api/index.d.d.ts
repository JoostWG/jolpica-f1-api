import { CircuitApiData, ConstructorApiData, ConstructorStandingApiData, DriverApiData, DriverStandingApiData, RaceApiData, LapApiData, PitStopApiData, QualifyingResultApiData, ResultApiData, SeasonApiData, SprintResultApiData, StatusApiData } from './data.d.js';
export { AverageSpeedApiData, DateTimeApiData, FastestLapApiData, FastestLapTimeApiData, FinishingTimeApiData, LocationApiData, TimingApiData } from './data.d.js';
import '../../enums/StatusType.js';

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type CircuitsResponse = SuccessResponse<{
    CircuitTable: {
        Circuits: CircuitApiData[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type ConstructorsResponse = SuccessResponse<{
    ConstructorTable: {
        Constructors: ConstructorApiData[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type ConstructorStandingsResponse = SuccessResponse<{
    StandingsTable: {
        StandingsLists: {
            season: string;
            round: string;
            ConstructorStandings: ConstructorStandingApiData[];
        }[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type DriversResponse = SuccessResponse<{
    DriverTable: {
        Drivers: DriverApiData[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type DriverStandingsResponse = SuccessResponse<{
    StandingsTable: {
        StandingsLists: {
            season: string;
            round: string;
            DriverStandings: DriverStandingApiData[];
        }[];
    };
}>;

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

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type RacesResponse = SuccessResponse<{
    RaceTable: {
        Races: RaceApiData[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type ResultsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & {
            Results: ResultApiData[];
        })[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type SeasonsResponse = SuccessResponse<{
    SeasonTable: {
        Seasons: SeasonApiData[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type SprintResultsResponse = SuccessResponse<{
    RaceTable: {
        Races: (RaceApiData & {
            SprintResults: SprintResultApiData[];
        })[];
    };
}>;

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type StatusesResponse = SuccessResponse<{
    StatusTable: {
        Status: StatusApiData[];
    };
}>;

/**
 * @category Base
 *
 * @since 1.0.1
 */
interface Pagination {
    /**
     * Maximum number of results results returned. Defaults to 30. Max is 100
     */
    limit?: number;
    /**
     * Allows you to offset the results by the specified number for pagination. Defaults to 0.
     */
    offset?: number;
}

/**
 * The root object of the json response.
 *
 * @since 1.0.1
 *
 * @see https://github.com/jolpica/jolpica-f1/tree/main/docs#common-response-fields
 */
interface MRData {
    /**
     * Blank, provided for compatibility with legacy ergast API.
     */
    xmlns: '';
    /**
     * The racing series of the results (always f1).
     */
    series: 'f1';
    /**
     * The API URL that the returned data was retrieved from (without query parameters).
     */
    url: string;
    /**
     * The limit used for this call. May be different from the query parameter set in some cases.
     */
    limit: `${number}`;
    /**
     * The result offset of this call.
     */
    offset: `${number}`;
    /**
     * The total number of items available from the endpoint.
     */
    total: `${number}`;
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
interface SuccessResponse<T = unknown> {
    MRData: MRData & T;
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
interface BadRequestResponse {
    detail: string;
}

export { type BadRequestResponse, CircuitApiData, type CircuitsResponse, ConstructorApiData, ConstructorStandingApiData, type ConstructorStandingsResponse, type ConstructorsResponse, DriverApiData, DriverStandingApiData, type DriverStandingsResponse, type DriversResponse, LapApiData, type LapsResponse, type MRData, type Pagination, PitStopApiData, type PitStopsResponse, QualifyingResultApiData, type QualifyingResultsResponse, RaceApiData, type RacesResponse, ResultApiData, type ResultsResponse, SeasonApiData, type SeasonsResponse, SprintResultApiData, type SprintResultsResponse, StatusApiData, type StatusesResponse, type SuccessResponse };
