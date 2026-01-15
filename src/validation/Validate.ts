import z from 'zod';
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
    PitStopApiData,
    PitStopsResponse,
    QualifyingResultApiData,
    QualifyingResultsResponse,
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
    public circuitsResponse(): z.ZodType<CircuitsResponse> {
        return this.apiResponse({
            CircuitTable: z.object({
                Circuits: z.array(this.circuit()),
            }),
        });
    }

    public teamsResponse(): z.ZodType<ConstructorsResponse> {
        return this.apiResponse({
            ConstructorTable: z.object({
                Constructors: z.array(this.team()),
            }),
        });
    }

    public teamStandingsResponse(): z.ZodType<ConstructorStandingsResponse> {
        return this.apiResponse({
            StandingsTable: z.object({
                StandingsLists: z.array(z.object({
                    season: this.year(),
                    round: this.integer(),
                    ConstructorStandings: z.array(this.teamStanding()),
                })),
            }),
        });
    }

    public driversResponse(): z.ZodType<DriversResponse> {
        return this.apiResponse({
            DriverTable: z.object({
                Drivers: z.array(this.driver()),
            }),
        });
    }

    public driverStandingsResponse(): z.ZodType<DriverStandingsResponse> {
        return this.apiResponse({
            StandingsTable: z.object({
                StandingsLists: z.array(z.object({
                    season: this.year(),
                    round: this.integer(),
                    DriverStandings: z.array(this.driverStanding()),
                })),
            }),
        });
    }

    public lapsResponse(): z.ZodType<LapsResponse> {
        return this.apiResponse({
            RaceTable: z.object({
                Races: z.array(
                    this.race().extend({
                        Laps: z.array(this.lap()),
                    }),
                ),
            }),
        });
    }

    public pitStopsResponse(): z.ZodType<PitStopsResponse> {
        return this.apiResponse({
            RaceTable: z.object({
                Races: z.array(
                    this.race().extend({
                        PitStops: z.array(this.pitStop()),
                    }),
                ),
            }),
        });
    }

    public qualifyingResultsResponse(): z.ZodType<QualifyingResultsResponse> {
        return this.apiResponse({
            RaceTable: z.object({
                Races: z.array(
                    this.race().extend({
                        QualifyingResults: z.array(this.qualifyingResult()),
                    }),
                ),
            }),
        });
    }

    public racesResponse(): z.ZodType<RacesResponse> {
        return this.apiResponse({
            RaceTable: z.object({
                Races: z.array(this.race()),
            }),
        });
    }

    public resultsResponse(): z.ZodType<ResultsResponse> {
        return this.apiResponse({
            RaceTable: z.object({
                Races: z.array(
                    this.race().extend({
                        Results: z.array(this.result()),
                    }),
                ),
            }),
        });
    }

    public seasonsResponse(): z.ZodType<SeasonsResponse> {
        return this.apiResponse({
            SeasonTable: z.object({
                Seasons: z.array(this.season()),
            }),
        });
    }

    public sprintResultsResponse(): z.ZodType<SprintResultsResponse> {
        return this.apiResponse({
            RaceTable: z.object({
                Races: z.array(
                    this.race().extend({
                        SprintResults: z.array(this.sprintResult()),
                    }),
                ),
            }),
        });
    }

    public statusesResponse(): z.ZodType<StatusesResponse> {
        return this.apiResponse({
            StatusTable: z.object({
                Status: z.array(this.status()),
            }),
        });
    }

    // Models

    protected averageSpeed(): z.ZodType<AverageSpeedApiData> {
        return z.object({
            units: z.string(),
            speed: this.integer(),
        });
    }

    protected circuit(): z.ZodType<CircuitApiData> {
        return z.object({
            circuitId: z.string(),
            url: z.string(),
            circuitName: z.string(),
            Location: this.location(),
        });
    }

    protected team(): z.ZodType<ConstructorApiData> {
        return z.object({
            constructorId: z.string().optional(),
            url: z.string().optional(),
            name: z.string(),
            nationality: z.string().optional(),
        });
    }

    protected teamStanding(): z.ZodType<ConstructorStandingApiData> {
        return z.object({
            position: this.integer().optional(),
            positionText: z.string(),
            points: this.integer(),
            wins: this.integer(),
            Constructor: this.team(),
        });
    }

    protected dateTime(): z.ZodType<DateTimeApiData> {
        return z.object({
            date: this.date(),
            time: z.string().regex(/^\d{2}:\d{2}:\d{2}Z$/u),
        });
    }

    protected driver(): z.ZodType<DriverApiData> {
        return z.object({
            driverId: z.string(),
            url: z.string(),
            givenName: z.string(),
            familyName: z.string(),
            dateOfBirth: this.date(),
            nationality: z.string(),
            permanentNumber: this.integer().optional(),
            code: z.string().optional(),
        });
    }

    protected driverStanding(): z.ZodType<DriverStandingApiData> {
        return z.object({
            position: this.integer().optional(),
            positionText: z.string(),
            points: this.integer(),
            wins: this.integer(),
            Driver: this.driver(),
            Constructors: z.array(this.team()),
        });
    }

    protected fastestLap(): z.ZodType<FastestLapApiData> {
        return z.object({
            rank: this.integer(),
            lap: this.integer(),
            Time: this.fastestLapTime(),
            AverageSpeed: this.averageSpeed().optional(),
        });
    }

    protected fastestLapTime(): z.ZodType<FastestLapTimeApiData> {
        return z.object({
            time: z.string(), // TODO format
        });
    }

    protected finishingTime(): z.ZodType<FinishingTimeApiData> {
        return z.object({
            millis: this.integer(),
            time: z.string(), // TODO format
        });
    }

    protected lap(): z.ZodType<LapApiData> {
        return z.object({
            number: this.integer(),
            Timings: z.array(this.timing()),
        });
    }

    protected location(): z.ZodType<LocationApiData> {
        return z.object({
            lat: this.decimal(),
            long: this.decimal(),
            locality: z.string(),
            country: z.string(),
        });
    }

    protected pitStop(): z.ZodType<PitStopApiData> {
        return z.object({
            driverId: z.string(),
            lap: this.integer().optional(),
            stop: this.integer().optional(),
            time: z.string().optional(), // TODO idk what the format is
        });
    }

    protected qualifyingResult(): z.ZodType<QualifyingResultApiData> {
        return z.object({
            number: this.integer(),
            position: this.integer().optional(),
            Driver: this.driver(),
            Constructor: this.team(),
            Q1: z.string().optional(),
            Q2: z.string().optional(),
            Q3: z.string().optional(),
        });
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    protected race() {
        return z.object({
            season: this.year(),
            round: this.integer(),
            url: z.string().optional(),
            raceName: z.string(),
            Circuit: this.circuit(),
            date: this.date(),
            time: z.string().optional(), // TODO: Format
            FirstPractice: this.dateTime().optional(),
            SecondPractice: this.dateTime().optional(),
            ThirdPractice: this.dateTime().optional(),
            Qualifying: this.dateTime().optional(),
            Sprint: this.dateTime().optional(),
            SprintQualifying: this.dateTime().optional(),
            SprintShootout: this.dateTime().optional(),
        });
    }

    protected result(): z.ZodType<ResultApiData> {
        return z.object({
            number: this.integer(),
            position: this.integer(),
            positionText: z.string(),
            points: this.integer(),
            Driver: this.driver(),
            Constructor: this.team().optional(),
            grid: this.integer().optional(),
            laps: this.integer().optional(),
            status: z.string().optional(),
            FastestLap: this.fastestLap().optional(),
            Time: this.finishingTime().optional(),
        });
    }

    protected season(): z.ZodType<SeasonApiData> {
        return z.object({
            season: this.year(),
            url: z.string(),
        });
    }

    protected sprintResult(): z.ZodType<SprintResultApiData> {
        return z.object({
            number: this.integer(),
            position: this.integer(),
            positionText: z.string(),
            points: this.integer(),
            Driver: this.driver(),
            Constructor: this.team().optional(),
            grid: this.integer().optional(),
            laps: this.integer().optional(),
            status: z.string().optional(),
            Time: this.finishingTime().optional(),
            FastestLap: this.fastestLap().optional(),
        });
    }

    protected status(): z.ZodType<StatusApiData> {
        return z.object({
            statusId: z.enum(StatusType),
            count: this.integer(),
            status: z.string(),
        });
    }

    protected timing(): z.ZodType<TimingApiData> {
        return z.object({
            driverId: z.string(),
            position: this.integer(),
            time: z.string(), // TODO: Format
        });
    }

    protected apiResponse<S extends z.ZodRawShape>(
        dataShape: S,
    ): z.ZodType<SuccessResponse<z.infer<z.ZodObject<S>>>> {
        // @ts-expect-error idk whats wrong
        return z.object({
            MRData: z.object({
                xmlns: z.literal(''),
                series: z.literal('f1'),
                url: z.string(),
                limit: this.integer(),
                offset: this.integer(),
                total: this.integer(),
            }).extend(dataShape),
        });
    }

    protected year(): z.ZodString {
        return z.string().regex(/^\d{4}$/u);
    }

    protected integer(): z.ZodString {
        return z.string().regex(/^-?\d+$/u);
    }

    protected decimal(): z.ZodString {
        return z.string().regex(/^-?\d+(\.\d+)?$/u);
    }

    protected date(): z.ZodString {
        return z.string().regex(/^\d{4}-\d{2}-\d{2}$/u);
    }
}
