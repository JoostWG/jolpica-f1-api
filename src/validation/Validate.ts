import {
    Validator as BaseValidator,
    type ObjectShape,
    type ObjectValidatorFunc,
    type ValidatorFunc,
} from 'valicheck';
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

export class Validate extends BaseValidator {
    public circuitsResponse(): ValidatorFunc<CircuitsResponse> {
        return this.apiResponse({
            CircuitTable: this.object({
                Circuits: this.array(this.circuit()),
            }),
        });
    }

    public teamsResponse(): ValidatorFunc<ConstructorsResponse> {
        return this.apiResponse({
            ConstructorTable: this.object({
                Constructors: this.array(this.team()),
            }),
        });
    }

    public teamStandingsResponse(): ValidatorFunc<ConstructorStandingsResponse> {
        return this.apiResponse({
            StandingsTable: this.object({
                StandingsLists: this.array(this.object({
                    season: this.year(),
                    round: this.integer(),
                    ConstructorStandings: this.array(this.teamStanding()),
                })),
            }),
        });
    }

    public driversResponse(): ValidatorFunc<DriversResponse> {
        return this.apiResponse({
            DriverTable: this.object({
                Drivers: this.array(this.driver()),
            }),
        });
    }

    public driverStandingsResponse(): ValidatorFunc<DriverStandingsResponse> {
        return this.apiResponse({
            StandingsTable: this.object({
                StandingsLists: this.array(this.object({
                    season: this.year(),
                    round: this.integer(),
                    DriverStandings: this.array(this.driverStanding()),
                })),
            }),
        });
    }

    public lapsResponse(): ValidatorFunc<LapsResponse> {
        return this.apiResponse({
            RaceTable: this.object({
                Races: this.array(this.intersect(
                    this.race(),
                    this.object({
                        Laps: this.array(this.lap()),
                    }),
                )),
            }),
        });
    }

    public pitStopsResponse(): ValidatorFunc<PitStopsResponse> {
        return this.apiResponse({
            RaceTable: this.object({
                Races: this.array(this.intersect(
                    this.race(),
                    this.object({
                        PitStops: this.array(this.pitStop()),
                    }),
                )),
            }),
        });
    }

    public qualifyingResultsResponse(): ValidatorFunc<QualifyingResultsResponse> {
        return this.apiResponse({
            RaceTable: this.object({
                Races: this.array(this.intersect(
                    this.race(),
                    this.object({
                        QualifyingResults: this.array(this.qualifyingResult()),
                    }),
                )),
            }),
        });
    }

    public racesResponse(): ValidatorFunc<RacesResponse> {
        return this.apiResponse({
            RaceTable: this.object({
                Races: this.array(this.race()),
            }),
        });
    }

    public resultsResponse(): ValidatorFunc<ResultsResponse> {
        return this.apiResponse({
            RaceTable: this.object({
                Races: this.array(this.intersect(
                    this.race(),
                    this.object({
                        Results: this.array(this.result()),
                    }),
                )),
            }),
        });
    }

    public seasonsResponse(): ValidatorFunc<SeasonsResponse> {
        return this.apiResponse({
            SeasonTable: this.object({
                Seasons: this.array(this.season()),
            }),
        });
    }

    public sprintResultsResponse(): ValidatorFunc<SprintResultsResponse> {
        return this.apiResponse({
            RaceTable: this.object({
                Races: this.array(this.intersect(
                    this.race(),
                    this.object({
                        SprintResults: this.array(this.sprintResult()),
                    }),
                )),
            }),
        });
    }

    public statusesResponse(): ValidatorFunc<StatusesResponse> {
        return this.apiResponse({
            StatusTable: this.object({
                Status: this.array(this.status()),
            }),
        });
    }

    // Models

    protected averageSpeed(): ValidatorFunc<AverageSpeedApiData> {
        return this.object({
            units: this.string(),
            speed: this.integer(),
        });
    }

    protected circuit(): ValidatorFunc<CircuitApiData> {
        return this.object({
            circuitId: this.string(),
            url: this.string(),
            circuitName: this.string(),
            Location: this.location(),
        });
    }

    protected team(): ValidatorFunc<ConstructorApiData> {
        return this.object({
            constructorId: this.optional(this.integer()),
            url: this.optional(this.string()),
            name: this.string(),
            nationality: this.optional(this.string()),
        });
    }

    protected teamStanding(): ValidatorFunc<ConstructorStandingApiData> {
        return this.object({
            position: this.optional(this.integer()),
            positionText: this.string(),
            points: this.integer(),
            wins: this.integer(),
            Constructor: this.team(),
        });
    }

    protected dateTime(): ValidatorFunc<DateTimeApiData> {
        return this.object({
            date: this.date(),
            time: this.string({ pattern: /^\d{2}:\d{2}:\d{2}Z$/u }),
        });
    }

    protected driver(): ValidatorFunc<DriverApiData> {
        return this.object({
            driverId: this.string(),
            url: this.string(),
            givenName: this.string(),
            familyName: this.string(),
            dateOfBirth: this.date(),
            nationality: this.string(),
            permanentNumber: this.optional(this.integer()),
            code: this.optional(this.string()),
        });
    }

    protected driverStanding(): ValidatorFunc<DriverStandingApiData> {
        return this.object({
            position: this.optional(this.integer()),
            positionText: this.string(),
            points: this.integer(),
            wins: this.integer(),
            Driver: this.driver(),
            Constructors: this.array(this.team()),
        });
    }

    protected fastestLap(): ValidatorFunc<FastestLapApiData> {
        return this.object({
            rank: this.integer(),
            lap: this.integer(),
            Time: this.fastestLapTime(),
            AverageSpeed: this.averageSpeed(),
        });
    }

    protected fastestLapTime(): ValidatorFunc<FastestLapTimeApiData> {
        return this.object({
            time: this.string(), // TODO format
        });
    }

    protected finishingTime(): ValidatorFunc<FinishingTimeApiData> {
        return this.object({
            millis: this.integer(),
            time: this.string(), // TODO format
        });
    }

    protected lap(): ValidatorFunc<LapApiData> {
        return this.object({
            number: this.integer(),
            Timings: this.array(this.timing()),
        });
    }

    protected location(): ValidatorFunc<LocationApiData> {
        return this.object({
            lat: this.decimal(),
            long: this.decimal(),
            locality: this.string(),
            country: this.string(),
        });
    }

    protected pitStop(): ValidatorFunc<PitStopApiData> {
        return this.object({
            driverId: this.string(),
            lap: this.optional(this.integer()),
            stop: this.optional(this.integer()),
            time: this.optional(this.string()), // TODO idk what the format is
        });
    }

    protected qualifyingResult(): ValidatorFunc<QualifyingResultApiData> {
        return this.object({
            number: this.integer(),
            position: this.optional(this.integer()),
            Driver: this.driver(),
            Constructor: this.team(),
            Q1: this.optional(this.string()),
            Q2: this.optional(this.string()),
            Q3: this.optional(this.string()),
        });
    }

    protected race(): ObjectValidatorFunc<RaceApiData> {
        return this.object({
            season: this.year(),
            round: this.integer(),
            url: this.optional(this.string()),
            raceName: this.string(),
            Circuit: this.circuit(),
            date: this.date(),
            time: this.optional(this.string()), // TODO: Format
            FirstPractice: this.optional(this.dateTime()),
            SecondPractice: this.optional(this.dateTime()),
            ThirdPractice: this.optional(this.dateTime()),
            Qualifying: this.optional(this.dateTime()),
            Sprint: this.optional(this.dateTime()),
            SprintQualifying: this.optional(this.dateTime()),
            SprintShootout: this.optional(this.dateTime()),
        });
    }

    protected result(): ValidatorFunc<ResultApiData> {
        return this.object({
            number: this.integer(),
            position: this.integer(),
            positionText: this.string(),
            points: this.integer(),
            Driver: this.driver(),
            Constructor: this.optional(this.team()),
            grid: this.optional(this.integer()),
            laps: this.optional(this.integer()),
            status: this.optional(this.enum(StatusType)),
            FastestLap: this.optional(this.fastestLap()),
            Time: this.optional(this.finishingTime()),
        });
    }

    protected season(): ValidatorFunc<SeasonApiData> {
        return this.object({
            season: this.year(),
            url: this.string(),
        });
    }

    protected sprintResult(): ValidatorFunc<SprintResultApiData> {
        return this.object({
            number: this.integer(),
            position: this.integer(),
            positionText: this.string(),
            points: this.integer(),
            Driver: this.driver(),
            Constructor: this.optional(this.team()),
            grid: this.optional(this.integer()),
            laps: this.optional(this.integer()),
            status: this.optional(this.enum(StatusType)),
            Time: this.optional(this.finishingTime()),
            FastestLap: this.optional(this.fastestLap()),
        });
    }

    protected status(): ValidatorFunc<StatusApiData> {
        return this.object({
            statusId: this.enum(StatusType),
            count: this.integer(),
            status: this.string(),
        });
    }

    protected timing(): ValidatorFunc<TimingApiData> {
        return this.object({
            driverId: this.string(),
            position: this.integer(),
            time: this.string(), // TODO: Format
        });
    }

    protected apiResponse<T extends Record<string, unknown>>(
        dataShape: ObjectShape<T>,
    ): ValidatorFunc<SuccessResponse<T>> {
        return this.object({
            MRData: this.object({
                xmlns: this.literal(''),
                series: this.literal('f1'),
                url: this.string(),
                limit: this.integer(),
                offset: this.integer(),
                total: this.integer(),
                ...dataShape,
            } as ObjectShape<MRData & T>),
        });
    }

    protected year(): ValidatorFunc<`${number}`> {
        return this.string({ pattern: /^\d{4}$/u }) as ValidatorFunc<`${number}`>;
    }

    protected integer(): ValidatorFunc<`${number}`> {
        return this.string({ pattern: /^-?\d+$/u }) as ValidatorFunc<`${number}`>;
    }

    protected decimal(): ValidatorFunc<`${number}`> {
        return this.string({ pattern: /^-?\d+(\.\d+)?$/u }) as ValidatorFunc<`${number}`>;
    }

    protected date(): ValidatorFunc<string> {
        return this.string({ pattern: /^\d{4}-\d{2}\d{2}$/u });
    }
}
