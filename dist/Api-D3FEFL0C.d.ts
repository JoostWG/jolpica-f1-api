import { AxiosInstance, CreateAxiosDefaults, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AverageSpeedApiData, LocationApiData, CircuitApiData, ConstructorApiData, DriverStandingApiData, FastestLapTimeApiData, FastestLapApiData, FinishingTimeApiData, ResultApiData, RaceApiData, DateTimeApiData, TimingApiData, LapApiData, PitStopApiData, QualifyingResultApiData, SeasonApiData, SprintResultApiData, StatusApiData, DriverApiData, ConstructorStandingApiData } from './types/api/data.d.js';
import z from 'zod';
import { CircuitsResponse, ConstructorStandingsResponse, ConstructorsResponse, DriverStandingsResponse, DriversResponse, LapsResponse, PitStopsResponse, QualifyingResultsResponse, RacesResponse, ResultsResponse, SeasonsResponse, SprintResultsResponse, StatusesResponse, Pagination, SuccessResponse, BadRequestResponse } from './types/api/index.d.js';
import { SeasonOption, RoundOption, CircuitOption, DriverOption, TeamOption, LapOption, PitStopOption, FastestRankOption, GridPositionOption, FinishPositionOption, StatusOption, DriverStandingOption, QualifyingResultOption, TeamStandingOption, ResultOptions, CircuitOptions, DriverStandingOptions, LapOptions, PitStopOptions, QualifyingResultOptions, RaceOptions, SeasonOptions, SprintResultOptions, StatusOptions, TeamOptions, DriverOptions, TeamStandingOptions } from './types/options.d.js';
import { StatusType } from './enums/StatusType.js';
import { ApiCache } from './types/ApiCache.d.js';
import { Validate } from './validation/Validate.js';

/**
 * This type exists solely for documentation purposes. To nicely format intersections.
 *
 * @since 3.0.0
 *
 * @inline
 *
 * @internal
 */
type Prettify<T> = { [K in keyof T]: T[K] } & {};

/**
 * @since 2.0.0
 */
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

/**
 * @since 2.0.0
 */
interface ModelsMap {
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
type AnyModel = ModelsMap[keyof ModelsMap];

/**
 * @internal
 */
type Exact<T, U> = T extends U ? (U extends T ? true : false) : false;

/**
 * @since 3.0.0
 */
type ModelsKey<T extends AnyModel> = {
    [K in keyof ModelsMap]: Exact<ModelsMap[K], T> extends true ? K : never;
}[keyof ModelsMap];

/**
 * @category Options
 *
 * @since 1.0.1
 *
 * @deprecated Use {@link AnyApiOptions} instead
 */
type SimpleApiOptions = AnyApiOptions;

/**
 * @category Options
 *
 * @since 2.1.0
 *
 * @deprecated Use {@link AnyApiOptions} instead
 */
type AllApiOptions = AnyApiOptions;

/**
 * @category Options
 *
 * @since 3.0.0
 */
type AnyApiOptions = Partial<
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
interface Response<T> {
    meta: {
        limit: number;
        offset: number;
        total: number;
    };
    data: T;
}

declare abstract class Model {
    protected readonly api: Api;
    constructor(api: Api);
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class AverageSpeed extends Model {
    /**
     * The units the speed was measured in
     */
    readonly units: string;
    /**
     * The average speed
     */
    readonly speed: number;
    constructor(data: AverageSpeedApiData, api: Api);
    /**
     * The average speed in kilometers per hour
     *
     * @since 3.0.0
     */
    get kph(): number;
    /**
     * The average speed in miles per hour
     *
     * @since 3.0.0
     */
    get mph(): number;
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class Location extends Model {
    readonly latitude: number;
    readonly longitude: number;
    readonly locality: string;
    readonly country: string;
    constructor(data: LocationApiData, api: Api);
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class Circuit extends Model {
    /**
     * The ID of this circuit used by the Jolpica API
     */
    readonly id: string;
    /**
     * The name of this circuit
     */
    readonly name: string;
    /**
     * URL to the wikipedia page about this circuit
     */
    readonly wikiUrl: string;
    /**
     * The location of the circuit.
     */
    readonly location: Location;
    constructor(data: CircuitApiData, api: Api);
}

/**
 * @category Base
 *
 * @since 2.0.0
 */
declare class PendingRequest<TData extends AnyModel[], TResource extends ModelsKey<TData[number]> = ModelsKey<TData[number]>, TModel extends ModelsMap[TResource] = ModelsMap[TResource]> {
    protected readonly api: Api;
    readonly resource: TResource;
    readonly options: AnyApiOptions;
    protected readonly transform: (data: ResponsesMap[TResource]['MRData']) => TModel[];
    protected readonly validator: z.ZodType<ResponsesMap[TResource]>;
    constructor(api: Api, resource: TResource, options: AnyApiOptions, transform: (data: ResponsesMap[TResource]['MRData']) => TModel[], validator: z.ZodType<ResponsesMap[TResource]>);
    /**
     * @since 3.0.0
     */
    get url(): string;
    get(pagination?: Pagination): Promise<Response<TModel[]>>;
    getOne(pagination?: Omit<Pagination, 'limit'>): Promise<TModel | null>;
    protected getPath(): string;
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class Team extends Model {
    readonly id: string | null;
    readonly wikiUrl: string | null;
    readonly name: string;
    readonly nationality: string | null;
    constructor(data: ConstructorApiData, api: Api);
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class DriverStanding extends Model {
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

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class FastestLapTime extends Model {
    readonly time: string;
    constructor(data: FastestLapTimeApiData, api: Api);
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class FastestLap extends Model {
    readonly rank: number;
    readonly lap: number;
    readonly time: FastestLapTime;
    readonly averageSpeed: AverageSpeed | null;
    constructor(data: FastestLapApiData, api: Api);
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class FinishingTime extends Model {
    readonly milliseconds: number;
    readonly time: string;
    constructor(data: FinishingTimeApiData, api: Api);
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class Result extends Model {
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
    /**
     * Returns the driver's age at the time of the race
     *
     * @since 3.0.0
     */
    get driverAge(): number | null;
    /**
     * Calculates the circuit length in meters based of the fastest lap time and average speed.
     *
     * @since 3.0.0
     */
    calculateCircuitLength(): number | null;
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class SessionDateTime extends Model {
    /**
     * The date this session was held
     */
    readonly date: string | null;
    /**
     * The time the session started
     */
    readonly time: string | null;
    constructor(data: DateTimeApiData, api: Api);
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class Race extends Model {
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
    /**
     * Fetch all results and calculate circuit length in meters using average speed and lap time
     *
     * @since 3.0.0
     */
    calculateCircuitLength(): Promise<number | null>;
    /**
     * @since 3.0.0
     */
    results(options?: Prettify<Omit<ResultOptions, 'Race'>>): PendingRequest<Result[]>;
    /**
     * @since 3.0.0
     */
    protected getOptions<T>(options: T): T & {
        season: number;
        round: number;
    };
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class Timing extends Model {
    readonly driverId: string;
    readonly position: number;
    readonly time: string;
    constructor(data: TimingApiData, api: Api);
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class Lap extends Model {
    readonly number: number;
    readonly timings: readonly Timing[];
    readonly race: Race;
    constructor(data: LapApiData, raceData: RaceApiData, api: Api);
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class PitStop extends Model {
    readonly driverId: string;
    readonly lap: number | null;
    readonly stop: number | null;
    readonly time: string | null;
    readonly duration: number | null;
    readonly race: Race;
    constructor(data: PitStopApiData, raceData: RaceApiData, api: Api);
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class QualifyingResult extends Model {
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

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class Season extends Model {
    readonly year: number;
    readonly wikiUrl: string;
    constructor(data: SeasonApiData, api: Api);
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class SprintResult extends Model {
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

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class Status extends Model {
    readonly id: StatusType;
    readonly count: number;
    readonly name: string;
    constructor(data: StatusApiData, api: Api);
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class Driver extends Model {
    /**
     *  Unique ID used by the API
     */
    readonly id: string;
    /**
     *  The driver's first name
     */
    readonly firstName: string;
    /**
     *  The driver's last name
     */
    readonly lastName: string;
    /**
     *  The driver's date of birth
     */
    readonly dateOfBirth: Date | null;
    /**
     *  The driver's nationality
     */
    readonly nationality: string | null;
    /**
     *  The driver's racing number
     */
    readonly number: number | null;
    /**
     *  The driver's three letter code
     */
    readonly code: string | null;
    /**
     *  URL to wikipedia page
     */
    readonly wikiUrl: string | null;
    constructor(data: DriverApiData, api: Api);
    /**
     * The driver's full name.
     *
     * @since 2.1.0
     */
    get name(): string;
    /**
     * The driver's current age.
     *
     * @since 2.1.0
     */
    get age(): number | null;
    /**
     * Get the driver's age for a given date.
     *
     * @since 2.1.0
     */
    ageAt(date: Date): number | null;
    /**
     * Get circuits the driver has raced at.
     *
     * @since 2.1.0
     */
    circuits(options?: Prettify<Omit<CircuitOptions, 'driver'>>): PendingRequest<Circuit[]>;
    /**
     * @since 2.1.0
     */
    driverStandings(options: Prettify<Omit<DriverStandingOptions, 'driver'>>): PendingRequest<DriverStanding[]>;
    /**
     * @since 2.1.0
     */
    laps(options: Prettify<Omit<LapOptions, 'driver'>>): PendingRequest<Lap[]>;
    /**
     * @since 2.1.0
     */
    pitStops(options: Prettify<Omit<PitStopOptions, 'driver'>>): PendingRequest<PitStop[]>;
    /**
     * @since 2.1.0
     */
    qualifyingResults(options?: Prettify<Omit<QualifyingResultOptions, 'driver'>>): PendingRequest<QualifyingResult[]>;
    /**
     * Get races this driver participated in
     *
     * @since 2.1.0
     */
    races(options?: Prettify<Omit<RaceOptions, 'driver'>>): PendingRequest<Race[]>;
    /**
     * @since 2.1.0
     */
    results(options?: Prettify<Omit<ResultOptions, 'driver'>>): PendingRequest<Result[]>;
    /**
     * @since 2.1.0
     */
    seasons(options?: Prettify<Omit<SeasonOptions, 'driver'>>): PendingRequest<Season[]>;
    /**
     * @since 2.1.0
     */
    sprintResults(options?: Prettify<Omit<SprintResultOptions, 'driver'>>): PendingRequest<SprintResult[]>;
    /**
     * @since 3.0.0
     */
    statuses(options?: Prettify<Omit<StatusOptions, 'driver'>>): PendingRequest<Status[]>;
    /**
     * @since 2.1.0
     */
    teams(options?: Prettify<TeamOptions>): PendingRequest<Team[]>;
    /**
     * @since 2.1.0
     */
    protected getOptions<T>(options: T): T & {
        driver: string;
    };
}

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class TeamStanding extends Model {
    readonly season: number;
    readonly round: number;
    readonly position: string | null;
    readonly positionText: string;
    readonly points: number;
    readonly wins: number;
    readonly team: Team;
    constructor(data: ConstructorStandingApiData, season: string, round: string, api: Api);
}

/**
 * @category Base
 *
 * @since 1.0.1
 */
declare class Api {
    /**
     * @since 3.0.0
     */
    readonly baseUrl: string;
    protected readonly axios: AxiosInstance;
    protected readonly cache?: ApiCache;
    protected readonly validator: Validate;
    constructor({ cache, config }?: {
        cache?: ApiCache;
        config?: Omit<CreateAxiosDefaults, 'baseUrl'>;
    });
    /**
     * Get circuits
     *
     * @since 2.0.0
     */
    circuits(options?: Prettify<CircuitOptions>): PendingRequest<Circuit[]>;
    /**
     * Get driver standings
     *
     * @since 2.0.0
     */
    driverStandings(options: Prettify<DriverStandingOptions>): PendingRequest<DriverStanding[]>;
    /**
     * Get drivers
     *
     * @since 2.0.0
     */
    drivers(options?: Prettify<DriverOptions>): PendingRequest<Driver[]>;
    /**
     * Get laps
     *
     * @since 2.0.0
     */
    laps(options: Prettify<LapOptions>): PendingRequest<Lap[]>;
    /**
     * Get pit stops
     *
     * @since 2.0.0
     */
    pitStops(options: Prettify<LapOptions>): PendingRequest<PitStop[]>;
    /**
     * Get qualifying results
     *
     * @since 2.0.0
     */
    qualifyingResults(options?: Prettify<QualifyingResultOptions>): PendingRequest<QualifyingResult[]>;
    /**
     * Get races
     *
     * @since 2.0.0
     */
    races(options?: Prettify<RaceOptions>): PendingRequest<Race[]>;
    /**
     * Get results
     *
     * @example Get the Norris' wins from 2025
     * ```ts
     * const { data: results } = await api
     *    .results({ season: 2025, driver: 'norris'})
     *     .get();
     * ```
     *
     * @since 2.0.0
     */
    results(options?: Prettify<ResultOptions>): PendingRequest<Result[]>;
    /**
     * Get seasons
     *
     * @since 2.0.0
     */
    seasons(options?: Prettify<SeasonOptions>): PendingRequest<Season[]>;
    /**
     * Get sprint results
     *
     * @since 2.0.0
     */
    sprintResults(options?: Prettify<SprintResultOptions>): PendingRequest<SprintResult[]>;
    /**
     * Get statuses
     *
     * @since 3.0.0
     */
    statuses(options?: Prettify<StatusOptions>): PendingRequest<Status[]>;
    /**
     * Get team standings
     *
     * @since 2.0.0
     */
    teamStandings(options: Prettify<TeamStandingOptions>): PendingRequest<TeamStanding[]>;
    /**
     * Get teams
     *
     * @since 2.0.0
     */
    teams(options?: Prettify<TeamOptions>): PendingRequest<Team[]>;
    get<T extends SuccessResponse>(path: string, pagination?: Pagination, config?: AxiosRequestConfig): Promise<T>;
    protected responseIsBadRequest(response: AxiosResponse): response is AxiosResponse<BadRequestResponse>;
}

export { Api as A, Circuit as C, Driver as D, FastestLap as F, Lap as L, Model as M, PitStop as P, QualifyingResult as Q, Race as R, Season as S, Team as T, AverageSpeed as a, DriverStanding as b, FastestLapTime as c, FinishingTime as d, Location as e, Result as f, SessionDateTime as g, SprintResult as h, Status as i, TeamStanding as j, Timing as k, PendingRequest as l, type Prettify as m, type ResponsesMap as n, type ModelsMap as o, type AnyModel as p, type ModelsKey as q, type SimpleApiOptions as r, type AllApiOptions as s, type AnyApiOptions as t, type Response as u };
