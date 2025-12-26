import axios, {
    AxiosHeaders,
    type AxiosInstance,
    type AxiosRequestConfig,
    type AxiosResponse,
    type CreateAxiosDefaults,
} from 'axios';
import { BadRequest, HttpError, NotFound } from './errors';
import {
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
    Team,
    TeamStanding,
} from './models';
import { PendingRequest } from './PendingRequest';
import type {
    AnyApiOptions,
    AnyModel,
    ApiCache,
    BadRequestResponse,
    CircuitOptions,
    DriverOptions,
    DriverStandingOptions,
    LapOptions,
    ModelsKey,
    ModelsMap,
    Pagination,
    Prettify,
    QualifyingResultOptions,
    RaceOptions,
    ResponsesMap,
    ResultOptions,
    SeasonOptions,
    SprintResultOptions,
    SuccessResponse,
    TeamOptions,
    TeamStandingOptions,
} from './types';

/**
 * @category Base
 *
 * @since 1.0.1
 */
export class Api {
    /**
     * @since 3.0.0
     */
    public readonly baseUrl: string;
    protected readonly axios: AxiosInstance;
    protected readonly cache?: ApiCache;

    public constructor({ cache, config }: {
        cache?: ApiCache;
        config?: Omit<CreateAxiosDefaults, 'baseUrl'>;
    } = {}) {
        this.baseUrl = 'https://api.jolpi.ca/ergast/f1';

        this.axios = axios.create({
            baseURL: this.baseUrl,
            validateStatus: (status) =>
                (status >= 200 && status <= 299) || (status >= 400 && status <= 499),
            headers: new AxiosHeaders().setAccept('application/json'),
            ...config,
        });

        this.cache = cache;
    }

    /**
     * Get circuits
     *
     * @since 2.0.0
     */
    public circuits(options?: Prettify<CircuitOptions>): PendingRequest<Circuit[]> {
        return this.makePendingRequest(
            'circuits',
            (data) =>
                data.CircuitTable.Circuits.map((circuitData) => new Circuit(circuitData, this)),
            options,
        );
    }

    /**
     * Get driver standings
     *
     * @since 2.0.0
     */
    public driverStandings(
        options: Prettify<DriverStandingOptions>,
    ): PendingRequest<DriverStanding[]> {
        return new PendingRequest(
            this,
            'driverstandings',
            options,
            (data) =>
                data.StandingsTable.StandingsLists.flatMap((standingsList) =>
                    standingsList.DriverStandings.map((standingsData) =>
                        new DriverStanding(
                            standingsData,
                            standingsList.season,
                            standingsList.round,
                            this,
                        )
                    )
                ),
        );
    }

    /**
     * Get drivers
     *
     * @since 2.0.0
     */
    public drivers(options?: Prettify<DriverOptions>): PendingRequest<Driver[]> {
        return this.makePendingRequest(
            'drivers',
            (data) => data.DriverTable.Drivers.map((driverData) => new Driver(driverData, this)),
            options,
        );
    }

    /**
     * Get laps
     *
     * @since 2.0.0
     */
    public laps(options: Prettify<LapOptions>): PendingRequest<Lap[]> {
        return this.makePendingRequest(
            'laps',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.Laps.map((lapData) => new Lap(lapData, raceData, this))
                ),
            options,
        );
    }

    /**
     * Get pit stops
     *
     * @since 2.0.0
     */
    public pitStops(options: Prettify<LapOptions>): PendingRequest<PitStop[]> {
        return this.makePendingRequest(
            'pitstops',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.PitStops.map((pitStopData) => new PitStop(pitStopData, raceData, this))
                ),
            options,
        );
    }

    /**
     * Get qualifying results
     *
     * @since 2.0.0
     */
    public qualifyingResults(
        options?: Prettify<QualifyingResultOptions>,
    ): PendingRequest<QualifyingResult[]> {
        return this.makePendingRequest(
            'qualifying',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.QualifyingResults.map((resultData) =>
                        new QualifyingResult(resultData, raceData, this)
                    )
                ),
            options,
        );
    }

    /**
     * Get races
     *
     * @since 2.0.0
     */
    public races(options?: Prettify<RaceOptions>): PendingRequest<Race[]> {
        return this.makePendingRequest(
            'races',
            (data) => data.RaceTable.Races.map((raceData) => new Race(raceData, this)),
            options,
        );
    }

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
    public results(options?: Prettify<ResultOptions>): PendingRequest<Result[]> {
        return this.makePendingRequest(
            'results',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.Results.map((resultData) => new Result(resultData, raceData, this))
                ),
            options,
        );
    }

    /**
     * Get seasons
     *
     * @since 2.0.0
     */
    public seasons(options?: Prettify<SeasonOptions>): PendingRequest<Season[]> {
        return this.makePendingRequest(
            'seasons',
            (data) => data.SeasonTable.Seasons.map((seasonData) => new Season(seasonData, this)),
            options,
        );
    }

    /**
     * Get sprint results
     *
     * @since 2.0.0
     */
    public sprintResults(options?: Prettify<SprintResultOptions>): PendingRequest<SprintResult[]> {
        return this.makePendingRequest(
            'sprint',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.SprintResults.map((resultData) =>
                        new SprintResult(resultData, raceData, this)
                    )
                ),
            options,
        );
    }

    /**
     * Get team standings
     *
     * @since 2.0.0
     */
    public teamStandings(options: Prettify<TeamStandingOptions>): PendingRequest<TeamStanding[]> {
        return this.makePendingRequest(
            'constructorstandings',
            (data) =>
                data.StandingsTable.StandingsLists.flatMap((standingsList) =>
                    standingsList.ConstructorStandings.map((standingsData) =>
                        new TeamStanding(
                            standingsData,
                            standingsList.season,
                            standingsList.round,
                            this,
                        )
                    )
                ),
            options,
        );
    }

    /**
     * Get teams
     *
     * @since 2.0.0
     */
    public teams(options?: Prettify<TeamOptions>): PendingRequest<Team[]> {
        return this.makePendingRequest(
            'constructors',
            (data) =>
                data.ConstructorTable.Constructors.map((teamData) => new Team(teamData, this)),
            options,
        );
    }

    public async get<T extends SuccessResponse>(
        path: string,
        pagination?: Pagination,
        config?: AxiosRequestConfig,
    ): Promise<T> {
        if (this.cache) {
            const data = await this.cache.get<T>(path, pagination);

            if (data !== null) {
                return data;
            }
        }

        const response = await this.axios.get<T | BadRequestResponse>(`${path}.json`, {
            params: pagination,
            ...config,
        });

        if (response.status === 404) {
            throw new NotFound(response);
        }

        if (this.responseIsBadRequest(response)) {
            throw new BadRequest(response.data.detail);
        }

        if (response.status !== 200) {
            throw new HttpError(response.status);
        }

        const data = response.data as T;

        if (this.cache) {
            await this.cache.set(data, response.headers['Cache-Control'], path, pagination);
        }

        return data;
    }

    protected makePendingRequest<
        TData extends AnyModel[],
        TResource extends ModelsKey<TData[number]> = ModelsKey<TData[number]>,
        TModel extends ModelsMap[TResource] = ModelsMap[TResource],
    >(
        resource: TResource,
        transform: (data: ResponsesMap[TResource]['MRData']) => TModel[],
        options?: AnyApiOptions,
    ): PendingRequest<TData, TResource> {
        return new PendingRequest(this, resource, options ?? {}, transform);
    }

    protected responseIsBadRequest(
        response: AxiosResponse,
    ): response is AxiosResponse<BadRequestResponse> {
        return response.status === 400;
    }
}
