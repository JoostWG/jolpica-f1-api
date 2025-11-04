import type { StatusType } from './enums';

import { BaseApi } from './BaseApi';
import { Data } from './Data';
import type {
    ApiCache,
    Circuit,
    CircuitOption,
    CircuitsResponse,
    ConstructorStandingsResponse,
    ConstructorsResponse,
    Driver,
    DriverOption,
    DriverStanding,
    DriverStandingsResponse,
    DriversResponse,
    FastestRankOption,
    FinishPositionOption,
    GridPositionOption,
    Lap,
    LapOption,
    LapsResponse,
    Pagination,
    PitStop,
    PitStopOption,
    PitStopsResponse,
    QualifyingResult,
    QualifyingResultsResponse,
    Race,
    RacesResponse,
    Result,
    ResultsResponse,
    RoundOption,
    Season,
    SeasonOption,
    SeasonsResponse,
    SprintResult,
    SprintResultsResponse,
    StatusesResponse,
    Team,
    TeamOption,
    TeamStanding,
} from './types';

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

export interface StatusOption {
    status?: StatusType;
}

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

export interface Response<T> {
    meta: {
        limit: number;
        offset: number;
        total: number;
    };
    data: T;
}

export class Api extends BaseApi {
    private readonly data: Data;

    public constructor(cache: ApiCache) {
        super(cache);

        this.data = new Data();
    }

    public async getCircuits(
        options?:
            & SeasonOption
            & RoundOption
            & DriverOption
            & FastestRankOption
            & GridPositionOption
            & FinishPositionOption
            & StatusOption
            & TeamOption,
        pagination?: Pagination,
    ): Promise<Response<Circuit[]>> {
        return await this.getWithOptions(
            'circuits',
            (data) => data.CircuitTable.Circuits.map(this.data.createCircuit.bind(this.data)),
            options,
            pagination,
        );
    }

    public async getDriverStandings(
        options: Required<SeasonOption> & RoundOption & DriverOption,
        pagination?: Pagination,
    ): Promise<Response<DriverStanding[]>> {
        return await this.getWithOptions(
            'driverstandings',
            (data) => {
                if (data.StandingsTable.StandingsLists.length <= 0) {
                    return [];
                }

                return data.StandingsTable.StandingsLists[0].DriverStandings.map(
                    this.data.createDriverStanding.bind(this.data),
                );
            },
            options,
            pagination,
        );
    }

    public async getDrivers(
        options?:
            & SeasonOption
            & RoundOption
            & CircuitOption
            & FastestRankOption
            & GridPositionOption
            & FinishPositionOption
            & StatusOption
            & TeamOption,
        pagination?: Pagination,
    ): Promise<Response<Driver[]>> {
        return await this.getWithOptions(
            'drivers',
            (data) => data.DriverTable.Drivers.map(this.data.createDriver.bind(this.data)),
            options,
            pagination,
        );
    }

    public async getLaps(
        options:
            & Required<SeasonOption>
            & Required<RoundOption>
            & DriverOption
            & LapOption
            & TeamOption,
        pagination?: Pagination,
    ): Promise<Response<Lap[]>> {
        return await this.getWithOptions(
            'laps',
            (data) => {
                if (data.RaceTable.Races.length <= 0) {
                    return [];
                }

                return data.RaceTable.Races[0].Laps.map(this.data.createLap.bind(this.data));
            },
            options,
            pagination,
        );
    }

    public async getPitStops(
        options:
            & Required<SeasonOption>
            & Required<RoundOption>
            & DriverOption
            & LapOption
            & PitStopOption,
        pagination?: Pagination,
    ): Promise<Response<PitStop[]>> {
        return await this.getWithOptions(
            'pitstops',
            (data) => {
                if (data.RaceTable.Races.length <= 0) {
                    return [];
                }

                return data.RaceTable.Races[0].PitStops.map(
                    this.data.createPitStop.bind(this.data),
                );
            },
            options,
            pagination,
        );
    }

    public async getQualifyingResults(
        options?:
            & SeasonOption
            & RoundOption
            & CircuitOption
            & DriverOption
            & GridPositionOption
            & FastestRankOption
            & StatusOption
            & TeamOption,
        pagination?: Pagination,
    ): Promise<Response<QualifyingResult[]>> {
        return await this.getWithOptions(
            'qualifying',
            (data) => {
                if (data.RaceTable.Races.length <= 0) {
                    return [];
                }

                return data.RaceTable.Races[0].QualifyingResults.map(
                    this.data.createQualifyingResult.bind(this.data),
                );
            },
            options,
            pagination,
        );
    }

    public async getRaces(
        options?:
            & SeasonOption
            & RoundOption
            & CircuitOption
            & DriverOption
            & FinishPositionOption
            & GridPositionOption
            & StatusOption
            & TeamOption,
        pagination?: Pagination,
    ): Promise<Response<Race[]>> {
        return await this.getWithOptions(
            'races',
            (data) => data.RaceTable.Races.map(this.data.createRace.bind(this.data)),
            options,
            pagination,
        );
    }

    public async getResults(
        options?:
            & SeasonOption
            & RoundOption
            & CircuitOption
            & DriverOption
            & FastestRankOption
            & GridPositionOption
            & StatusOption
            & TeamOption,
        pagination?: Pagination,
    ): Promise<Response<Result[]>> {
        return await this.getWithOptions(
            'results',
            (data) => {
                if (data.RaceTable.Races.length <= 0) {
                    return [];
                }

                return data.RaceTable.Races[0].Results.map(this.data.createResult.bind(this.data));
            },
            options,
            pagination,
        );
    }

    public async getSeasons(
        options?:
            & CircuitOption
            & DriverOption
            & GridPositionOption
            & StatusOption
            & TeamOption,
        pagination?: Pagination,
    ): Promise<Response<Season[]>> {
        return await this.getWithOptions(
            'seasons',
            (data) => data.SeasonTable.Seasons.map(this.data.createSeason.bind(this.data)),
            options,
            pagination,
        );
    }

    public async getSprintResults(
        options?:
            & CircuitOption
            & DriverOption
            & GridPositionOption
            & StatusOption
            & TeamOption,
        pagination?: Pagination,
    ): Promise<Response<SprintResult[]>> {
        return await this.getWithOptions(
            'sprint',
            (data) => {
                if (data.RaceTable.Races.length <= 0) {
                    return [];
                }

                return data.RaceTable.Races[0].SprintResults.map(
                    this.data.createSprintResult.bind(this.data),
                );
            },
            options,
            pagination,
        );
    }

    public async getTeamStandings(
        options: Required<SeasonOption> & RoundOption & TeamOption,
        pagination?: Pagination,
    ): Promise<Response<TeamStanding[]>> {
        return await this.getWithOptions(
            'constructorstandings',
            (data) => {
                if (data.StandingsTable.StandingsLists.length <= 0) {
                    return [];
                }

                return data.StandingsTable.StandingsLists[0].ConstructorStandings.map(
                    this.data.createTeamStanding.bind(this.data),
                );
            },
            options,
            pagination,
        );
    }

    public async getTeams(
        options?:
            & SeasonOption
            & RoundOption
            & CircuitOption
            & FastestRankOption
            & GridPositionOption
            & FinishPositionOption
            & StatusOption,
        pagination?: Pagination,
    ): Promise<Response<Team[]>> {
        return await this.getWithOptions(
            'constructors',
            (data) => data.ConstructorTable.Constructors.map(this.data.createTeam.bind(this.data)),
            options,
            pagination,
        );
    }

    // eslint-disable-next-line @typescript-eslint/max-params
    private async getWithOptions<K extends keyof ResponsesMap, R>(
        path: K,
        transform: (data: ResponsesMap[K]['MRData']) => R,
        options?: SimpleApiOptions,
        pagination?: Pagination,
    ): Promise<Response<R>> {
        const response = await this.get<ResponsesMap[K]>(
            this.getPath(`/${path}`, options ?? {}),
            pagination,
        );

        return {
            meta: {
                limit: Number(response.MRData.limit),
                offset: Number(response.MRData.offset),
                total: Number(response.MRData.total),
            },
            data: transform(response.MRData),
        };
    }

    private getPath(basePath: string, options: SimpleApiOptions): string {
        const path: string[] = [];

        if (options.season) {
            path.push(options.season);

            if (options.round) {
                path.push(String(options.round));
            }
        }

        if (options.circuit) {
            path.push('circuits', options.circuit);
        }

        if (options.driver) {
            path.push('drivers', options.driver);
        }

        if (options.team) {
            path.push('constructors', options.team);
        }

        if (options.lap) {
            path.push('laps', String(options.lap));
        }

        if (options.pitStopNumber) {
            path.push('pitstops', String(options.pitStopNumber));
        }

        if (options.fastestRank) {
            path.push('fastest', String(options.fastestRank));
        }

        if (options.gridPosition) {
            path.push('grid', String(options.gridPosition));
        }

        if (options.finishPosition) {
            path.push('results', String(options.finishPosition));
        }

        if (options.status) {
            path.push('status', options.status);
        }

        if (path.length === 0) {
            return basePath;
        }

        return `/${path.join('/')}${basePath}`;
    }
}
