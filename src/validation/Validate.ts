import { v, type ObjectShape, type ObjectValidatorFunc, type ValidatorFunc } from 'valicheck';
import { StatusType } from '../enums';
import type {
    AverageSpeedApiData,
    CircuitApiData,
    CircuitsResponse,
    ConstructorApiData,
    ConstructorStandingApiData,
    ConstructorStandingsResponse,
    ConstructorsResponse,
    DateTimeApiData,
    DriverApiData,
    DriverStandingApiData,
    DriverStandingsResponse,
    DriversResponse,
    FastestLapApiData,
    FastestLapTimeApiData,
    FinishingTimeApiData,
    LapApiData,
    LapsResponse,
    LocationApiData,
    MRData,
    PitStopApiData,
    PitStopsResponse,
    QualifyingResultApiData,
    QualifyingResultsResponse,
    RaceApiData,
    RacesResponse,
    ResultApiData,
    ResultsResponse,
    SeasonApiData,
    SeasonsResponse,
    SprintResultApiData,
    SprintResultsResponse,
    StatusApiData,
    StatusesResponse,
    SuccessResponse,
    TimingApiData,
} from '../types';

export class Validate {
    public circuitsResponse(): ValidatorFunc<CircuitsResponse> {
        return this.apiResponse({
            CircuitTable: v.object({
                Circuits: v.array(this.circuit()),
            }),
        });
    }

    public teamsResponse(): ValidatorFunc<ConstructorsResponse> {
        return this.apiResponse({
            ConstructorTable: v.object({
                Constructors: v.array(this.team()),
            }),
        });
    }

    public teamStandingsResponse(): ValidatorFunc<ConstructorStandingsResponse> {
        return this.apiResponse({
            StandingsTable: v.object({
                StandingsLists: v.array(v.object({
                    season: this.year(),
                    round: this.integer(),
                    ConstructorStandings: v.array(this.teamStanding()),
                })),
            }),
        });
    }

    public driversResponse(): ValidatorFunc<DriversResponse> {
        return this.apiResponse({
            DriverTable: v.object({
                Drivers: v.array(this.driver()),
            }),
        });
    }

    public driverStandingsResponse(): ValidatorFunc<DriverStandingsResponse> {
        return this.apiResponse({
            StandingsTable: v.object({
                StandingsLists: v.array(v.object({
                    season: this.year(),
                    round: this.integer(),
                    DriverStandings: v.array(this.driverStanding()),
                })),
            }),
        });
    }

    public lapsResponse(): ValidatorFunc<LapsResponse> {
        return this.apiResponse({
            RaceTable: v.object({
                Races: v.array(v.intersect(
                    this.race(),
                    v.object({
                        Laps: v.array(this.lap()),
                    }),
                )),
            }),
        });
    }

    public pitStopsResponse(): ValidatorFunc<PitStopsResponse> {
        return this.apiResponse({
            RaceTable: v.object({
                Races: v.array(v.intersect(
                    this.race(),
                    v.object({
                        PitStops: v.array(this.pitStop()),
                    }),
                )),
            }),
        });
    }

    public qualifyingResultsResponse(): ValidatorFunc<QualifyingResultsResponse> {
        return this.apiResponse({
            RaceTable: v.object({
                Races: v.array(v.intersect(
                    this.race(),
                    v.object({
                        QualifyingResults: v.array(this.qualifyingResult()),
                    }),
                )),
            }),
        });
    }

    public racesResponse(): ValidatorFunc<RacesResponse> {
        return this.apiResponse({
            RaceTable: v.object({
                Races: v.array(this.race()),
            }),
        });
    }

    public resultsResponse(): ValidatorFunc<ResultsResponse> {
        return this.apiResponse({
            RaceTable: v.object({
                Races: v.array(v.intersect(
                    this.race(),
                    v.object({
                        Results: v.array(this.result()),
                    }),
                )),
            }),
        });
    }

    public seasonsResponse(): ValidatorFunc<SeasonsResponse> {
        return this.apiResponse({
            SeasonTable: v.object({
                Seasons: v.array(this.season()),
            }),
        });
    }

    public sprintResultsResponse(): ValidatorFunc<SprintResultsResponse> {
        return this.apiResponse({
            RaceTable: v.object({
                Races: v.array(v.intersect(
                    this.race(),
                    v.object({
                        SprintResults: v.array(this.sprintResult()),
                    }),
                )),
            }),
        });
    }

    public statusesResponse(): ValidatorFunc<StatusesResponse> {
        return this.apiResponse({
            StatusTable: v.object({
                Status: v.array(this.status()),
            }),
        });
    }

    // Models

    protected averageSpeed(): ValidatorFunc<AverageSpeedApiData> {
        return v.object({
            units: v.string(),
            speed: this.integer(),
        });
    }

    protected circuit(): ValidatorFunc<CircuitApiData> {
        return v.object({
            circuitId: v.string(),
            url: v.string(),
            circuitName: v.string(),
            Location: this.location(),
        });
    }

    protected team(): ValidatorFunc<ConstructorApiData> {
        return v.object({
            constructorId: v.optional(this.integer()),
            url: v.optional(v.string()),
            name: v.string(),
            nationality: v.optional(v.string()),
        });
    }

    protected teamStanding(): ValidatorFunc<ConstructorStandingApiData> {
        return v.object({
            position: v.optional(this.integer()),
            positionText: v.string(),
            points: this.integer(),
            wins: this.integer(),
            Constructor: this.team(),
        });
    }

    protected dateTime(): ValidatorFunc<DateTimeApiData> {
        return v.object({
            date: this.date(),
            time: v.string({ pattern: /^\d{2}:\d{2}:\d{2}Z$/u }),
        });
    }

    protected driver(): ValidatorFunc<DriverApiData> {
        return v.object({
            driverId: v.string(),
            url: v.string(),
            givenName: v.string(),
            familyName: v.string(),
            dateOfBirth: this.date(),
            nationality: v.string(),
            permanentNumber: v.optional(this.integer()),
            code: v.optional(v.string()),
        });
    }

    protected driverStanding(): ValidatorFunc<DriverStandingApiData> {
        return v.object({
            position: v.optional(this.integer()),
            positionText: v.string(),
            points: this.integer(),
            wins: this.integer(),
            Driver: this.driver(),
            Constructors: v.array(this.team()),
        });
    }

    protected fastestLap(): ValidatorFunc<FastestLapApiData> {
        return v.object({
            rank: this.integer(),
            lap: this.integer(),
            Time: this.fastestLapTime(),
            AverageSpeed: this.averageSpeed(),
        });
    }

    protected fastestLapTime(): ValidatorFunc<FastestLapTimeApiData> {
        return v.object({
            time: v.string(), // TODO format
        });
    }

    protected finishingTime(): ValidatorFunc<FinishingTimeApiData> {
        return v.object({
            millis: this.integer(),
            time: v.string(), // TODO format
        });
    }

    protected lap(): ValidatorFunc<LapApiData> {
        return v.object({
            number: this.integer(),
            Timings: v.array(this.timing()),
        });
    }

    protected location(): ValidatorFunc<LocationApiData> {
        return v.object({
            lat: this.decimal(),
            long: this.decimal(),
            locality: v.string(),
            country: v.string(),
        });
    }

    protected pitStop(): ValidatorFunc<PitStopApiData> {
        return v.object({
            driverId: v.string(),
            lap: v.optional(this.integer()),
            stop: v.optional(this.integer()),
            time: v.optional(v.string()), // TODO idk what the format is
        });
    }

    protected qualifyingResult(): ValidatorFunc<QualifyingResultApiData> {
        return v.object({
            number: this.integer(),
            position: v.optional(this.integer()),
            Driver: this.driver(),
            Constructor: this.team(),
            Q1: v.optional(v.string()),
            Q2: v.optional(v.string()),
            Q3: v.optional(v.string()),
        });
    }

    protected race(): ObjectValidatorFunc<RaceApiData> {
        return v.object({
            season: this.year(),
            round: this.integer(),
            url: v.optional(v.string()),
            raceName: v.string(),
            Circuit: this.circuit(),
            date: this.date(),
            time: v.optional(v.string()), // TODO: Format
            FirstPractice: v.optional(this.dateTime()),
            SecondPractice: v.optional(this.dateTime()),
            ThirdPractice: v.optional(this.dateTime()),
            Qualifying: v.optional(this.dateTime()),
            Sprint: v.optional(this.dateTime()),
            SprintQualifying: v.optional(this.dateTime()),
            SprintShootout: v.optional(this.dateTime()),
        });
    }

    protected result(): ValidatorFunc<ResultApiData> {
        return v.object({
            number: this.integer(),
            position: this.integer(),
            positionText: v.string(),
            points: this.integer(),
            Driver: this.driver(),
            Constructor: v.optional(this.team()),
            grid: v.optional(this.integer()),
            laps: v.optional(this.integer()),
            status: v.optional(v.string()),
            FastestLap: v.optional(this.fastestLap()),
            Time: v.optional(this.finishingTime()),
        });
    }

    protected season(): ValidatorFunc<SeasonApiData> {
        return v.object({
            season: this.year(),
            url: v.string(),
        });
    }

    protected sprintResult(): ValidatorFunc<SprintResultApiData> {
        return v.object({
            number: this.integer(),
            position: this.integer(),
            positionText: v.string(),
            points: this.integer(),
            Driver: this.driver(),
            Constructor: v.optional(this.team()),
            grid: v.optional(this.integer()),
            laps: v.optional(this.integer()),
            status: v.optional(v.string()),
            Time: v.optional(this.finishingTime()),
            FastestLap: v.optional(this.fastestLap()),
        });
    }

    protected status(): ValidatorFunc<StatusApiData> {
        return v.object({
            statusId: v.enumValue(StatusType),
            count: this.integer(),
            status: v.string(),
        });
    }

    protected timing(): ValidatorFunc<TimingApiData> {
        return v.object({
            driverId: v.string(),
            position: this.integer(),
            time: v.string(), // TODO: Format
        });
    }

    protected apiResponse<T extends Record<string, unknown>>(
        dataShape: ObjectShape<T>,
    ): ValidatorFunc<SuccessResponse<T>> {
        return v.object({
            MRData: v.object({
                xmlns: v.literal(''),
                series: v.literal('f1'),
                url: v.string(),
                limit: this.integer(),
                offset: this.integer(),
                total: this.integer(),
                ...dataShape,
            } as ObjectShape<MRData & T>),
        });
    }

    protected year(): ValidatorFunc<`${number}`> {
        return v.string({ pattern: /^\d{4}$/u }) as ValidatorFunc<`${number}`>;
    }

    protected integer(): ValidatorFunc<`${number}`> {
        return v.string({ pattern: /^-?\d+$/u }) as ValidatorFunc<`${number}`>;
    }

    protected decimal(): ValidatorFunc<`${number}`> {
        return v.string({ pattern: /^-?\d+(\.\d+)?$/u }) as ValidatorFunc<`${number}`>;
    }

    protected date(): ValidatorFunc<string> {
        return v.string({ pattern: /^\d{4}-\d{2}\d{2}$/u });
    }
}
