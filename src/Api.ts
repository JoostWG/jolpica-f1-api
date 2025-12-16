import { BaseApi, type BaseApiConstructorOptions } from './BaseApi';
import { Data } from './Data';
import { PendingRequest } from './PendingRequest';
import type {
    Circuit,
    CircuitOption,
    Driver,
    DriverOption,
    DriverStanding,
    FastestRankOption,
    FinishPositionOption,
    GridPositionOption,
    Lap,
    LapOption,
    PitStop,
    PitStopOption,
    QualifyingResult,
    Race,
    ResponsesMap,
    Result,
    RoundOption,
    Season,
    SeasonOption,
    SimpleApiOptions,
    SprintResult,
    StatusOption,
    Team,
    TeamOption,
    TeamStanding,
} from './types';

export class Api extends BaseApi {
    private readonly data: Data;

    public constructor(options: BaseApiConstructorOptions = {}) {
        super(options);

        this.data = new Data();
    }

    public circuits(
        options?:
            & SeasonOption
            & RoundOption
            & DriverOption
            & FastestRankOption
            & GridPositionOption
            & FinishPositionOption
            & StatusOption
            & TeamOption,
    ): PendingRequest<'circuits', Circuit> {
        return this.makePendingRequest(
            'circuits',
            (data) => data.CircuitTable.Circuits.map(this.data.createCircuit.bind(this.data)),
            options,
        );
    }

    public driverStandings(
        options: Required<SeasonOption> & RoundOption & DriverOption,
    ): PendingRequest<'driverstandings', DriverStanding> {
        return new PendingRequest(
            this,
            'driverstandings',
            options,
            (data) =>
                data.StandingsTable.StandingsLists.flatMap((standingsList) =>
                    standingsList.DriverStandings.map((standingsData) =>
                        this.data.createDriverStanding(
                            standingsData,
                            standingsList.season,
                            standingsList.round,
                        )
                    )
                ),
        );
    }

    public drivers(
        options?:
            & SeasonOption
            & RoundOption
            & CircuitOption
            & FastestRankOption
            & GridPositionOption
            & FinishPositionOption
            & StatusOption
            & TeamOption,
    ): PendingRequest<'drivers', Driver> {
        return this.makePendingRequest(
            'drivers',
            (data) => data.DriverTable.Drivers.map(this.data.createDriver.bind(this.data)),
            options,
        );
    }

    public laps(
        options:
            & Required<SeasonOption>
            & Required<RoundOption>
            & DriverOption
            & LapOption
            & TeamOption,
    ): PendingRequest<'laps', Lap> {
        return this.makePendingRequest(
            'laps',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.Laps.map((lapData) => this.data.createLap(lapData, raceData))
                ),
            options,
        );
    }

    public pitStops(
        options:
            & Required<SeasonOption>
            & Required<RoundOption>
            & DriverOption
            & LapOption
            & PitStopOption,
    ): PendingRequest<'pitstops', PitStop> {
        return this.makePendingRequest(
            'pitstops',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.PitStops.map((pitStopData) =>
                        this.data.createPitStop(pitStopData, raceData)
                    )
                ),
            options,
        );
    }

    public qualifyingResults(
        options?:
            & SeasonOption
            & RoundOption
            & CircuitOption
            & DriverOption
            & GridPositionOption
            & FastestRankOption
            & StatusOption
            & TeamOption,
    ): PendingRequest<'qualifying', QualifyingResult> {
        return this.makePendingRequest(
            'qualifying',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.QualifyingResults.map((resultData) =>
                        this.data.createQualifyingResult(resultData, raceData)
                    )
                ),
            options,
        );
    }

    public races(
        options?:
            & SeasonOption
            & RoundOption
            & CircuitOption
            & DriverOption
            & FinishPositionOption
            & GridPositionOption
            & StatusOption
            & TeamOption,
    ): PendingRequest<'races', Race> {
        return this.makePendingRequest(
            'races',
            (data) => data.RaceTable.Races.map(this.data.createRace.bind(this.data)),
            options,
        );
    }

    public results(
        options?:
            & SeasonOption
            & RoundOption
            & CircuitOption
            & DriverOption
            & FastestRankOption
            & GridPositionOption
            & StatusOption
            & TeamOption,
    ): PendingRequest<'results', Result> {
        return this.makePendingRequest(
            'results',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.Results.map((resultData) =>
                        this.data.createResult(resultData, raceData)
                    )
                ),
            options,
        );
    }

    public seasons(
        options?:
            & CircuitOption
            & DriverOption
            & GridPositionOption
            & StatusOption
            & TeamOption,
    ): PendingRequest<'seasons', Season> {
        return this.makePendingRequest(
            'seasons',
            (data) => data.SeasonTable.Seasons.map(this.data.createSeason.bind(this.data)),
            options,
        );
    }

    public sprintResults(
        options?:
            & CircuitOption
            & DriverOption
            & GridPositionOption
            & StatusOption
            & TeamOption,
    ): PendingRequest<'sprint', SprintResult> {
        return this.makePendingRequest(
            'sprint',
            (data) =>
                data.RaceTable.Races.flatMap((raceData) =>
                    raceData.SprintResults.map((resultData) =>
                        this.data.createSprintResult(resultData, raceData)
                    )
                ),
            options,
        );
    }

    public teamStandings(
        options: Required<SeasonOption> & RoundOption & TeamOption,
    ): PendingRequest<'constructorstandings', TeamStanding> {
        return this.makePendingRequest(
            'constructorstandings',
            (data) =>
                data.StandingsTable.StandingsLists.flatMap((standingsList) =>
                    standingsList.ConstructorStandings.map((standingsData) =>
                        this.data.createTeamStanding(
                            standingsData,
                            standingsList.season,
                            standingsList.round,
                        )
                    )
                ),
            options,
        );
    }

    public teams(
        options?:
            & SeasonOption
            & RoundOption
            & CircuitOption
            & FastestRankOption
            & GridPositionOption
            & FinishPositionOption
            & StatusOption,
    ): PendingRequest<'constructors', Team> {
        return this.makePendingRequest(
            'constructors',
            (data) => data.ConstructorTable.Constructors.map(this.data.createTeam.bind(this.data)),
            options,
        );
    }

    private makePendingRequest<TResource extends keyof ResponsesMap, TReturn>(
        resource: TResource,
        transform: (data: ResponsesMap[TResource]['MRData']) => TReturn[],
        options?: SimpleApiOptions,
    ): PendingRequest<TResource, TReturn> {
        return new PendingRequest(this, resource, options ?? {}, transform);
    }
}
