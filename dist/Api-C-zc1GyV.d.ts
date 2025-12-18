import './structures/AverageSpeed.js';
import { FastestLap } from './structures/FastestLap.js';
import './structures/FastestLapTime.js';
import { FinishingTime } from './structures/FinishingTime.js';
import { Location } from './structures/Location.js';
import { SessionDateTime } from './structures/SessionDateTime.js';
import { Timing } from './structures/Timing.js';
import { BaseApi } from './BaseApi.js';
import { CircuitOptions, DriverStandingOptions, LapOptions, PitStopOptions, QualifyingResultOptions, RaceOptions, ResultOptions, SeasonOptions, SprintResultOptions, TeamOptions, SeasonOption, RoundOption, CircuitOption, DriverOption, TeamOption, LapOption, PitStopOption, FastestRankOption, GridPositionOption, FinishPositionOption, StatusOption, DriverStandingOption, QualifyingResultOption, TeamStandingOption, DriverOptions, TeamStandingOptions } from './types/options.d.js';
import { CircuitApiData, CircuitsResponse } from './types/api/circuit.d.js';
import { DriverApiData, DriversResponse } from './types/api/driver.d.js';
import { ConstructorApiData, ConstructorsResponse } from './types/api/constructor.d.js';
import { DriverStandingApiData, DriverStandingsResponse } from './types/api/driver-standing.d.js';
import { RaceApiData, RacesResponse } from './types/api/race.d.js';
import { LapApiData, LapsResponse } from './types/api/lap.d.js';
import { PitStopApiData, PitStopsResponse } from './types/api/pit-stop.d.js';
import { QualifyingResultApiData, QualifyingResultsResponse } from './types/api/qualifying-result.d.js';
import { ResultApiData, ResultsResponse } from './types/api/result.d.js';
import { SeasonApiData, SeasonsResponse } from './types/api/season.d.js';
import { SprintResultApiData, SprintResultsResponse } from './types/api/sprint-result.d.js';
import { StatusType } from './enums/StatusType.js';
import { StatusApiData, StatusesResponse } from './types/api/status.d.js';
import { ConstructorStandingApiData, ConstructorStandingsResponse } from './types/api/constructor-standing.d.js';
import { Pagination } from './types/api/common.d.js';
import './types/ApiCache.d.js';

declare class Circuit {
    protected readonly api: Api;
    readonly id: string;
    readonly wikiUrl: string;
    readonly name: string;
    readonly location: Location;
    constructor(data: CircuitApiData, api: Api);
}

interface Response<T> {
    meta: {
        limit: number;
        offset: number;
        total: number;
    };
    data: T;
}
declare class PendingRequest<TResource extends keyof ResponsesMap, TStructure extends StructuresMap[TResource] = StructuresMap[TResource]> {
    protected readonly api: Api;
    readonly resource: TResource;
    readonly options: AllApiOptions;
    protected readonly transform: (data: ResponsesMap[TResource]['MRData']) => TStructure[];
    constructor(api: Api, resource: TResource, options: AllApiOptions, transform: (data: ResponsesMap[TResource]['MRData']) => TStructure[]);
    get(pagination?: Pagination): Promise<Response<TStructure[]>>;
    getOne(pagination?: Pick<Pagination, 'offset'>): Promise<TStructure | null>;
    private getPath;
}

declare class Driver {
    protected readonly api: Api;
    readonly id: string;
    readonly wikiUrl: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly dateOfBirth: Date;
    readonly nationality: string;
    readonly number: number | null;
    readonly code: string | null;
    constructor(data: DriverApiData, api: Api);
    get name(): string;
    get age(): number;
    ageAt(date: Date): number;
    circuits(options?: Omit<CircuitOptions, 'driver'>): PendingRequest<'circuits'>;
    driverStandings(options: Omit<DriverStandingOptions, 'driver'>): PendingRequest<'driverstandings'>;
    laps(options: Omit<LapOptions, 'driver'>): PendingRequest<'laps'>;
    pitStops(options: Omit<PitStopOptions, 'driver'>): PendingRequest<'pitstops'>;
    qualifyingResults(options?: Omit<QualifyingResultOptions, 'driver'>): PendingRequest<'qualifying'>;
    races(options?: Omit<RaceOptions, 'driver'>): PendingRequest<'races'>;
    results(options?: Omit<ResultOptions, 'driver'>): PendingRequest<'results'>;
    seasons(options?: Omit<SeasonOptions, 'driver'>): PendingRequest<'seasons'>;
    sprintResults(options?: Omit<SprintResultOptions, 'driver'>): PendingRequest<'sprint'>;
    teams(options?: TeamOptions): PendingRequest<'constructors'>;
    private getOptions;
}

declare class Team {
    protected readonly api: Api;
    readonly id: string | null;
    readonly wikiUrl: string | null;
    readonly name: string;
    readonly nationality: string | null;
    constructor(data: ConstructorApiData, api: Api);
}

declare class DriverStanding {
    protected readonly api: Api;
    readonly season: number;
    readonly round: number;
    readonly position: number | null;
    readonly positionText: string;
    readonly points: number;
    readonly wins: number;
    readonly driver: Driver;
    readonly teams: readonly Team[];
    constructor(data: DriverStandingApiData, season: string, round: string, api: Api);
}

declare class Race {
    protected readonly api: Api;
    readonly season: number;
    readonly round: number;
    readonly wikiUrl: string | null;
    readonly name: string;
    readonly circuit: Circuit;
    readonly date: string;
    readonly time: string | null;
    readonly firstPractice: SessionDateTime | null;
    readonly secondPractice: SessionDateTime | null;
    readonly thirdPractice: SessionDateTime | null;
    readonly qualifying: SessionDateTime | null;
    readonly sprint: SessionDateTime | null;
    readonly sprintQualifying: SessionDateTime | null;
    readonly sprintShootout: SessionDateTime | null;
    constructor(data: RaceApiData, api: Api);
    get dateTime(): Date;
}

declare class Lap {
    protected readonly api: Api;
    readonly number: number;
    readonly timings: readonly Timing[];
    readonly race: Race;
    constructor(data: LapApiData, raceData: RaceApiData, api: Api);
}

declare class PitStop {
    protected readonly api: Api;
    readonly driverId: string;
    readonly lap: number | null;
    readonly stop: number | null;
    readonly time: string | null;
    readonly duration: number | null;
    readonly race: Race;
    constructor(data: PitStopApiData, raceData: RaceApiData, api: Api);
}

declare class QualifyingResult {
    protected readonly api: Api;
    readonly number: number;
    readonly position: number | null;
    readonly driver: Driver;
    readonly team: Team;
    readonly q1: string | null;
    readonly q2: string | null;
    readonly q3: string | null;
    readonly race: Race;
    constructor(data: QualifyingResultApiData, raceData: RaceApiData, api: Api);
}

declare class Result {
    protected readonly api: Api;
    readonly number: number;
    readonly position: string;
    readonly positionText: string;
    readonly points: number;
    readonly driver: Driver;
    readonly team: Team | null;
    readonly grid: number | null;
    readonly laps: number | null;
    readonly status: string | null;
    readonly fastestLap: FastestLap | null;
    readonly finishingTime: FinishingTime | null;
    readonly race: Race;
    constructor(data: ResultApiData, raceData: RaceApiData, api: Api);
    get driverAge(): number;
}

declare class Season {
    protected readonly api: Api;
    readonly year: number;
    readonly wikiUrl: string;
    constructor(data: SeasonApiData, api: Api);
}

declare class SprintResult {
    protected readonly api: Api;
    readonly number: number;
    readonly position: string;
    readonly positionText: string;
    readonly points: number;
    readonly driver: Driver;
    readonly team: Team | null;
    readonly grid: number | null;
    readonly laps: number | null;
    readonly status: string | null;
    readonly finishingTime: FinishingTime | null;
    readonly fastestLap: FastestLap | null;
    readonly race: Race;
    constructor(data: SprintResultApiData, raceData: RaceApiData, api: Api);
}

declare class Status {
    protected readonly api: Api;
    readonly id: StatusType;
    readonly count: number;
    readonly name: string;
    constructor(data: StatusApiData, api: Api);
}

declare class TeamStanding {
    protected readonly api: Api;
    readonly season: number;
    readonly round: number;
    readonly position: string | null;
    readonly positionText: string;
    readonly points: number;
    readonly wins: number;
    readonly team: Team;
    constructor(data: ConstructorStandingApiData, season: string, round: string, api: Api);
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

interface StructuresMap {
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
 * @deprecated Use {@link AllApiOptions} instead
 */
type SimpleApiOptions = AllApiOptions;

type AllApiOptions =
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

declare class Api extends BaseApi {
    circuits(options?: CircuitOptions): PendingRequest<'circuits'>;
    driverStandings(options: DriverStandingOptions): PendingRequest<'driverstandings'>;
    drivers(options?: DriverOptions): PendingRequest<'drivers'>;
    laps(options: LapOptions): PendingRequest<'laps'>;
    pitStops(options: PitStopOptions): PendingRequest<'pitstops'>;
    qualifyingResults(options?: QualifyingResultOptions): PendingRequest<'qualifying'>;
    races(options?: RaceOptions): PendingRequest<'races'>;
    results(options?: ResultOptions): PendingRequest<'results'>;
    seasons(options?: SeasonOptions): PendingRequest<'seasons'>;
    sprintResults(options?: SprintResultOptions): PendingRequest<'sprint'>;
    teamStandings(options: TeamStandingOptions): PendingRequest<'constructorstandings'>;
    teams(options?: TeamOptions): PendingRequest<'constructors'>;
    private makePendingRequest;
}

export { Api as A, Circuit as C, Driver as D, Lap as L, PendingRequest as P, QualifyingResult as Q, Race as R, Season as S, Team as T, DriverStanding as a, PitStop as b, Result as c, SprintResult as d, Status as e, TeamStanding as f, type ResponsesMap as g, type StructuresMap as h, type SimpleApiOptions as i, type AllApiOptions as j };
