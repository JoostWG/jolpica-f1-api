import { BaseApi } from './BaseApi';
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
    AllApiOptions,
    CircuitOptions,
    DriverOptions,
    DriverStandingOptions,
    LapOptions,
    PitStopOptions,
    QualifyingResultOptions,
    RaceOptions,
    ResponsesMap,
    ResultOptions,
    SeasonOptions,
    SprintResultOptions,
    StructuresMap,
    TeamOptions,
    TeamStandingOptions,
} from './types';

/**
 * @category Base
 *
 * @since 1.0.1
 */
export class Api extends BaseApi {
    /**
     * @since 2.0.0
     */
    public circuits(options?: CircuitOptions): PendingRequest<'circuits'> {
        return this.makePendingRequest(
            'circuits',
            (data) =>
                data.CircuitTable.Circuits.map((circuitData) => new Circuit(circuitData, this)),
            options,
        );
    }

    /**
     * @since 2.0.0
     */
    public driverStandings(options: DriverStandingOptions): PendingRequest<'driverstandings'> {
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
     * @since 2.0.0
     */
    public drivers(options?: DriverOptions): PendingRequest<'drivers'> {
        return this.makePendingRequest(
            'drivers',
            (data) => data.DriverTable.Drivers.map((driverData) => new Driver(driverData, this)),
            options,
        );
    }

    /**
     * @since 2.0.0
     */
    public laps(options: LapOptions): PendingRequest<'laps'> {
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
     * @since 2.0.0
     */
    public pitStops(options: PitStopOptions): PendingRequest<'pitstops'> {
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
     * @since 2.0.0
     */
    public qualifyingResults(options?: QualifyingResultOptions): PendingRequest<'qualifying'> {
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
     * @since 2.0.0
     */
    public races(options?: RaceOptions): PendingRequest<'races'> {
        return this.makePendingRequest(
            'races',
            (data) => data.RaceTable.Races.map((raceData) => new Race(raceData, this)),
            options,
        );
    }

    /**
     * @since 2.0.0
     *
     * @example Get the Norris' wins from 2025
     * ```ts
     * const { data: results } = await api
     *    .results({ season: 2025, driver: 'norris'})
     *     .get();
     * ```
     */
    public results(options?: ResultOptions): PendingRequest<'results'> {
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
     * @since 2.0.0
     */
    public seasons(options?: SeasonOptions): PendingRequest<'seasons'> {
        return this.makePendingRequest(
            'seasons',
            (data) => data.SeasonTable.Seasons.map((seasonData) => new Season(seasonData, this)),
            options,
        );
    }

    /**
     * @since 2.0.0
     */
    public sprintResults(options?: SprintResultOptions): PendingRequest<'sprint'> {
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
     * @since 2.0.0
     */
    public teamStandings(options: TeamStandingOptions): PendingRequest<'constructorstandings'> {
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
     * @since 2.0.0
     */
    public teams(options?: TeamOptions): PendingRequest<'constructors'> {
        return this.makePendingRequest(
            'constructors',
            (data) =>
                data.ConstructorTable.Constructors.map((teamData) => new Team(teamData, this)),
            options,
        );
    }

    private makePendingRequest<TResource extends keyof ResponsesMap>(
        resource: TResource,
        transform: (data: ResponsesMap[TResource]['MRData']) => StructuresMap[TResource][],
        options?: AllApiOptions,
    ): PendingRequest<TResource> {
        return new PendingRequest(this, resource, options ?? {}, transform);
    }
}
