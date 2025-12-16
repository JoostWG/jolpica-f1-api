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
    FastestRankOption,
    FinishPositionOption,
    GridPositionOption,
    LapOption,
    PitStopOption,
    RoundOption,
    SeasonOption,
    StatusOption,
    TeamOption,
} from './options';

export type * from './api';
export type * from './ApiCache';
export type * from './options';
export type * from './structures';

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

export type SimpleApiOptions =
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
    & StatusOption;
