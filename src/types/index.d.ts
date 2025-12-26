import type {
    Circuit,
    Driver,
    DriverStanding,
    Lap,
    PitStop,
    QualifyingResult,
    Race,
    Result,
    Season,
    SprintResult,
    Status,
    Team,
    TeamStanding,
} from '../models';
import type {
    CircuitsResponse,
    ConstructorStandingsResponse,
    ConstructorsResponse,
    DriverStandingsResponse,
    DriversResponse,
    LapsResponse,
    PitStopsResponse,
    QualifyingResultsResponse,
    RacesResponse,
    ResultsResponse,
    SeasonsResponse,
    SprintResultsResponse,
    StatusesResponse,
} from './api';
import type {
    CircuitOption,
    DriverOption,
    DriverStandingOption,
    FastestRankOption,
    FinishPositionOption,
    GridPositionOption,
    LapOption,
    PitStopOption,
    QualifyingResultOption,
    RoundOption,
    SeasonOption,
    StatusOption,
    TeamOption,
    TeamStandingOption,
} from './options';

export type * from './api';
export type * from './ApiCache';
export type * from './options';

/**
 * This type exists solely for documentation purposes. To nicely format intersections.
 *
 * @inline
 *
 * @internal
 */
export type Prettify<T> = { [K in keyof T]: T[K] } & {};

export interface ResponsesMap {
    circuits: CircuitsResponse;
    constructorstandings: ConstructorStandingsResponse;
    constructors: ConstructorsResponse;
    driverstandings: DriverStandingsResponse;
    drivers: DriversResponse;
    laps: LapsResponse;
    pitstops: PitStopsResponse;
    qualifying: QualifyingResultsResponse;
    races: RacesResponse;
    results: ResultsResponse;
    seasons: SeasonsResponse;
    sprint: SprintResultsResponse;
    status: StatusesResponse;
}

export interface ModelsMap {
    circuits: Circuit;
    constructorstandings: TeamStanding;
    constructors: Team;
    driverstandings: DriverStanding;
    drivers: Driver;
    laps: Lap;
    pitstops: PitStop;
    qualifying: QualifyingResult;
    races: Race;
    results: Result;
    seasons: Season;
    sprint: SprintResult;
    status: Status;
}

export type AnyModel = ModelsMap[keyof ModelsMap];

export type ModelsKey<T extends AnyModel> = {
    [K in keyof ModelsMap]: ModelsMap[K] extends T ? K : never;
}[keyof ModelsMap];

/**
 * @category Options
 *
 * @since 1.0.1
 *
 * @deprecated Use {@link AllApiOptions} instead
 */
export type SimpleApiOptions = AllApiOptions;

/**
 * @category Options
 *
 * @since 2.1.0
 */
export type AllApiOptions =
    & SeasonOption
    & RoundOption
    & CircuitOption
    & DriverOption
    & TeamOption
    & LapOption
    & PitStopOption
    & FastestRankOption
    & GridPositionOption
    & FinishPositionOption
    & StatusOption
    & DriverStandingOption
    & QualifyingResultOption
    & TeamStandingOption;

/**
 * @category Base
 *
 * @since 1.0.1
 */
export interface Response<T> {
    meta: {
        limit: number;
        offset: number;
        total: number;
    };
    data: T;
}
