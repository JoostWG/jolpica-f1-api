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

export interface StructuresMap {
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
 */
export interface Response<T> {
    meta: {
        limit: number;
        offset: number;
        total: number;
    };
    data: T;
}
