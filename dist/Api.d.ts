import { StatusType } from './enums/StatusType.js';
import { BaseApi, BaseApiConstructorOptions } from './BaseApi.js';
import { CircuitsResponse } from './types/api/circuit.d.js';
import { Pagination } from './types/api/common.d.js';
import { ConstructorsResponse } from './types/api/constructor.d.js';
import { ConstructorStandingsResponse } from './types/api/constructor-standing.d.js';
import { DriversResponse } from './types/api/driver.d.js';
import { DriverStandingsResponse } from './types/api/driver-standing.d.js';
import { LapsResponse } from './types/api/lap.d.js';
import { PitStopsResponse } from './types/api/pit-stop.d.js';
import { QualifyingResultsResponse } from './types/api/qualifying-result.d.js';
import { RacesResponse } from './types/api/race.d.js';
import { ResultsResponse } from './types/api/result.d.js';
import { SeasonsResponse } from './types/api/season.d.js';
import { SprintResultsResponse } from './types/api/sprint-result.d.js';
import { StatusesResponse } from './types/api/status.d.js';
import { SeasonOption, RoundOption, CircuitOption, DriverOption, TeamOption, LapOption, PitStopOption, FastestRankOption, GridPositionOption, FinishPositionOption } from './types/options.d.js';
import { Circuit, DriverStanding, Driver, Lap, PitStop, QualifyingResult, Race, Result, Season, SprintResult, TeamStanding, Team } from './types/structures.d.js';
import './types/ApiCache.d.js';
import 'axios';

type SimpleApiOptions = SeasonOption & RoundOption & CircuitOption & DriverOption & TeamOption & LapOption & PitStopOption & FastestRankOption & GridPositionOption & FinishPositionOption & StatusOption;
interface StatusOption {
    status?: StatusType;
}
interface ResponsesMap {
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
interface Response<T> {
    meta: {
        limit: number;
        offset: number;
        total: number;
    };
    data: T;
}
declare class Api extends BaseApi {
    private readonly data;
    constructor(options: BaseApiConstructorOptions);
    getCircuits(options?: SeasonOption & RoundOption & DriverOption & FastestRankOption & GridPositionOption & FinishPositionOption & StatusOption & TeamOption, pagination?: Pagination): Promise<Response<Circuit[]>>;
    getDriverStandings(options: Required<SeasonOption> & RoundOption & DriverOption, pagination?: Pagination): Promise<Response<DriverStanding[]>>;
    getDrivers(options?: SeasonOption & RoundOption & CircuitOption & FastestRankOption & GridPositionOption & FinishPositionOption & StatusOption & TeamOption, pagination?: Pagination): Promise<Response<Driver[]>>;
    getLaps(options: Required<SeasonOption> & Required<RoundOption> & DriverOption & LapOption & TeamOption, pagination?: Pagination): Promise<Response<Lap[]>>;
    getPitStops(options: Required<SeasonOption> & Required<RoundOption> & DriverOption & LapOption & PitStopOption, pagination?: Pagination): Promise<Response<PitStop[]>>;
    getQualifyingResults(options?: SeasonOption & RoundOption & CircuitOption & DriverOption & GridPositionOption & FastestRankOption & StatusOption & TeamOption, pagination?: Pagination): Promise<Response<QualifyingResult[]>>;
    getRaces(options?: SeasonOption & RoundOption & CircuitOption & DriverOption & FinishPositionOption & GridPositionOption & StatusOption & TeamOption, pagination?: Pagination): Promise<Response<Race[]>>;
    getResults(options?: SeasonOption & RoundOption & CircuitOption & DriverOption & FastestRankOption & GridPositionOption & StatusOption & TeamOption, pagination?: Pagination): Promise<Response<Result[]>>;
    getSeasons(options?: CircuitOption & DriverOption & GridPositionOption & StatusOption & TeamOption, pagination?: Pagination): Promise<Response<Season[]>>;
    getSprintResults(options?: CircuitOption & DriverOption & GridPositionOption & StatusOption & TeamOption, pagination?: Pagination): Promise<Response<SprintResult[]>>;
    getTeamStandings(options: Required<SeasonOption> & RoundOption & TeamOption, pagination?: Pagination): Promise<Response<TeamStanding[]>>;
    getTeams(options?: SeasonOption & RoundOption & CircuitOption & FastestRankOption & GridPositionOption & FinishPositionOption & StatusOption, pagination?: Pagination): Promise<Response<Team[]>>;
    private getWithOptions;
    private getPath;
}

export { Api, type Response, type ResponsesMap, type SimpleApiOptions, type StatusOption };
