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
 * @since 3.0.0
 *
 * @inline
 *
 * @internal
 */
export type Prettify<T> = { [K in keyof T]: T[K] } & {};

export type Unsure<T> = {
    [K in keyof T]?: T[K] | null;
};

/**
 * @since 2.0.0
 */
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

/**
 * @since 2.0.0
 */
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

/**
 * @since 3.0.0
 */
export type AnyModel = ModelsMap[keyof ModelsMap];

/**
 * @internal
 */
type Exact<T, U> = T extends U ? (U extends T ? true : false) : false;

/**
 * @since 3.0.0
 */
export type ModelsKey<T extends AnyModel> = {
    [K in keyof ModelsMap]: Exact<ModelsMap[K], T> extends true ? K : never;
}[keyof ModelsMap];

/**
 * @category Options
 *
 * @since 1.0.1
 *
 * @deprecated Use {@link AnyApiOptions} instead
 */
export type SimpleApiOptions = AnyApiOptions;

/**
 * @category Options
 *
 * @since 2.1.0
 *
 * @deprecated Use {@link AnyApiOptions} instead
 */
export type AllApiOptions = AnyApiOptions;

/**
 * @category Options
 *
 * @since 3.0.0
 */
export type AnyApiOptions = Partial<
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
    & TeamStandingOption
>;

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
