import { BaseApi } from './BaseApi';
import { PendingRequest } from './PendingRequest';
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
} from './structures';
import type {
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
    SimpleApiOptions,
    SprintResultOptions,
    StructuresMap,
    TeamOptions,
    TeamStandingOptions,
} from './types';

export class Api extends BaseApi {
    public circuits(options?: CircuitOptions): PendingRequest<'circuits'> {
        return this.makePendingRequest(
            'circuits',
            (data) => data.CircuitTable.Circuits.map((circuitData) => new Circuit(circuitData)),
            options,
        );
    }

    public driverStandings(options: DriverStandingOptions): PendingRequest<'driverstandings'> {
        return new PendingRequest(
            this,
            'driverstandings',
            options,
            (data) =>
                data.StandingsTable.StandingsLists.flatMap((standingsList) =>
                    standingsList.DriverStandings.map((standingsData) =>
                        new DriverStanding(standingsData, standingsList.season, standingsList.round)
                    )
                ),
        );
    }

    public drivers(options?: DriverOptions): PendingRequest<'drivers'> {
        return this.makePendingRequest(
            'drivers',
            (data) => data.DriverTable.Drivers.map((driverData) => new Driver(driverData)),
            options,
        );
    }

    public laps(options: LapOptions): PendingRequest<'laps'> {
        return this.makePendingRequest(
            'laps',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.Laps.map((lapData) => new Lap(lapData, raceData))
                ),
            options,
        );
    }

    public pitStops(options: PitStopOptions): PendingRequest<'pitstops'> {
        return this.makePendingRequest(
            'pitstops',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.PitStops.map((pitStopData) => new PitStop(pitStopData, raceData))
                ),
            options,
        );
    }

    public qualifyingResults(options?: QualifyingResultOptions): PendingRequest<'qualifying'> {
        return this.makePendingRequest(
            'qualifying',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.QualifyingResults.map((resultData) =>
                        new QualifyingResult(resultData, raceData)
                    )
                ),
            options,
        );
    }

    public races(options?: RaceOptions): PendingRequest<'races'> {
        return this.makePendingRequest(
            'races',
            (data) => data.RaceTable.Races.map((raceData) => new Race(raceData)),
            options,
        );
    }

    public results(options?: ResultOptions): PendingRequest<'results'> {
        return this.makePendingRequest(
            'results',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.Results.map((resultData) => new Result(resultData, raceData))
                ),
            options,
        );
    }

    public seasons(options?: SeasonOptions): PendingRequest<'seasons'> {
        return this.makePendingRequest(
            'seasons',
            (data) => data.SeasonTable.Seasons.map((seasonData) => new Season(seasonData)),
            options,
        );
    }

    public sprintResults(options?: SprintResultOptions): PendingRequest<'sprint'> {
        return this.makePendingRequest(
            'sprint',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.SprintResults.map((resultData) =>
                        new SprintResult(resultData, raceData)
                    )
                ),
            options,
        );
    }

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
                        )
                    )
                ),
            options,
        );
    }

    public teams(options?: TeamOptions): PendingRequest<'constructors'> {
        return this.makePendingRequest(
            'constructors',
            (data) => data.ConstructorTable.Constructors.map((teamData) => new Team(teamData)),
            options,
        );
    }

    private makePendingRequest<TResource extends keyof ResponsesMap>(
        resource: TResource,
        transform: (data: ResponsesMap[TResource]['MRData']) => StructuresMap[TResource][],
        options?: SimpleApiOptions,
    ): PendingRequest<TResource> {
        return new PendingRequest(this, resource, options ?? {}, transform);
    }
}
