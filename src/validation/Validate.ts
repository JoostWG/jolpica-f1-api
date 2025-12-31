import { StatusType } from '../enums';
import { ValidationError } from '../errors';
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
import type { Shape, Validator } from './types';

// TODO: Better class name? Or rename Validator type
export class Validate {
    public averageSpeed(): Validator<AverageSpeedApiData> {
        return this.object({
            units: this.string(),
            speed: this.integer(),
        });
    }

    public circuit(): Validator<CircuitApiData> {
        return this.object({
            circuitId: this.string(),
            url: this.string(),
            circuitName: this.string(),
            Location: this.location(),
        });
    }

    public team(): Validator<ConstructorApiData> {
        return this.object({
            constructorId: this.optional(this.integer()),
            url: this.optional(this.string()),
            name: this.string(),
            nationality: this.optional(this.string()),
        });
    }

    public teamStanding(): Validator<ConstructorStandingApiData> {
        return this.object({
            position: this.optional(this.integer()),
            positionText: this.string(),
            points: this.integer(),
            wins: this.integer(),
            Constructor: this.team(),
        });
    }

    public dateTime(): Validator<DateTimeApiData> {
        return this.object({
            date: this.date(),
            time: this.string({ pattern: /^\d{2}:\d{2}:\d{2}Z$/u }),
        });
    }

    public driver(): Validator<DriverApiData> {
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

    public driverStanding(): Validator<DriverStandingApiData> {
        return this.object({
            position: this.optional(this.integer()),
            positionText: this.string(),
            points: this.integer(),
            wins: this.integer(),
            Driver: this.driver(),
            Constructors: this.array(this.team()),
        });
    }

    public fastestLap(): Validator<FastestLapApiData> {
        return this.object({
            rank: this.integer(),
            lap: this.integer(),
            Time: this.fastestLapTime(),
            AverageSpeed: this.averageSpeed(),
        });
    }

    public fastestLapTime(): Validator<FastestLapTimeApiData> {
        return this.object({
            time: this.string(), // TODO format
        });
    }

    public finishingTime(): Validator<FinishingTimeApiData> {
        return this.object({
            millis: this.integer(),
            time: this.string(), // TODO format
        });
    }

    public lap(): Validator<LapApiData> {
        return this.object({
            number: this.integer(),
            Timings: this.array(this.timing()),
        });
    }

    public location(): Validator<LocationApiData> {
        return this.object({
            lat: this.decimal(),
            long: this.decimal(),
            locality: this.string(),
            country: this.string(),
        });
    }

    public pitStop(): Validator<PitStopApiData> {
        return this.object({
            driverId: this.string(),
            lap: this.optional(this.integer()),
            stop: this.optional(this.integer()),
            time: this.optional(this.string()), // TODO idk what the format is
        });
    }

    public qualifyingResult(): Validator<QualifyingResultApiData> {
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

    public race<T extends Record<string, unknown>>(extra?: Shape<T>): Validator<RaceApiData & T> {
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
            ...extra,
        } as Shape<RaceApiData & T>);
    }

    public result(): Validator<ResultApiData> {
        return this.object({
            number: this.integer(),
            position: this.integer(),
            positionText: this.string(),
            points: this.integer(),
            Driver: this.driver(),
            Constructor: this.optional(this.team()),
            grid: this.optional(this.integer()),
            laps: this.optional(this.integer()),
            status: this.optional(this.statusEnum()),
            FastestLap: this.optional(this.fastestLap()),
            Time: this.optional(this.finishingTime()),
        });
    }

    public season(): Validator<SeasonApiData> {
        return this.object({
            season: this.year(),
            url: this.string(),
        });
    }

    public sprintResult(): Validator<SprintResultApiData> {
        return this.object({
            number: this.integer(),
            position: this.integer(),
            positionText: this.string(),
            points: this.integer(),
            Driver: this.driver(),
            Constructor: this.optional(this.team()),
            grid: this.optional(this.integer()),
            laps: this.optional(this.integer()),
            status: this.optional(this.statusEnum()),
            Time: this.optional(this.finishingTime()),
            FastestLap: this.optional(this.fastestLap()),
        });
    }

    public status(): Validator<StatusApiData> {
        return this.object({
            statusId: this.statusEnum(),
            count: this.integer(),
            status: this.string(),
        });
    }

    public timing(): Validator<TimingApiData> {
        return this.object({
            driverId: this.string(),
            position: this.integer(),
            time: this.string(), // TODO: Format
        });
    }

    // Responses

    public circuitsResponse(): Validator<CircuitsResponse> {
        return this.apiResponse({
            CircuitTable: this.object({
                Circuits: this.array(this.circuit()),
            }),
        });
    }

    public teamsResponse(): Validator<ConstructorsResponse> {
        return this.apiResponse({
            ConstructorTable: this.object({
                Constructors: this.array(this.team()),
            }),
        });
    }

    public teamStandingsResponse(): Validator<ConstructorStandingsResponse> {
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

    public driversResponse(): Validator<DriversResponse> {
        return this.apiResponse({
            DriverTable: this.object({
                Drivers: this.array(this.driver()),
            }),
        });
    }

    public driverStandingsResponse(): Validator<DriverStandingsResponse> {
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

    public lapsResponse(): Validator<LapsResponse> {
        return this.apiResponse({
            RaceTable: this.object({
                Races: this.array(this.race({
                    Laps: this.array(this.lap()),
                })),
            }),
        });
    }

    public pitStopsResponse(): Validator<PitStopsResponse> {
        return this.apiResponse({
            RaceTable: this.object({
                Races: this.array(this.race({
                    PitStops: this.array(this.pitStop()),
                })),
            }),
        });
    }

    public qualifyingResultsResponse(): Validator<QualifyingResultsResponse> {
        return this.apiResponse({
            RaceTable: this.object({
                Races: this.array(this.race({
                    QualifyingResults: this.array(this.qualifyingResult()),
                })),
            }),
        });
    }

    public racesResponse(): Validator<RacesResponse> {
        return this.apiResponse({
            RaceTable: this.object({
                Races: this.array(this.race()),
            }),
        });
    }

    public resultsResponse(): Validator<ResultsResponse> {
        return this.apiResponse({
            RaceTable: this.object({
                Races: this.array(this.race({
                    Results: this.array(this.result()),
                })),
            }),
        });
    }

    public seasonsResponse(): Validator<SeasonsResponse> {
        return this.apiResponse({
            SeasonTable: this.object({
                Seasons: this.array(this.season()),
            }),
        });
    }

    public sprintResultsResponse(): Validator<SprintResultsResponse> {
        return this.apiResponse({
            RaceTable: this.object({
                Races: this.array(this.race({
                    SprintResults: this.array(this.sprintResult()),
                })),
            }),
        });
    }

    public statusesResponse(): Validator<StatusesResponse> {
        return this.apiResponse({
            StatusTable: this.object({
                Status: this.array(this.status()),
            }),
        });
    }

    protected apiResponse<T extends Record<string, unknown>>(
        dataShape: Shape<T>,
    ): Validator<SuccessResponse<T>> {
        return this.object({
            MRData: this.object({
                xmlns: this.exact(''),
                series: this.exact('f1'),
                url: this.string(),
                limit: this.integer(),
                offset: this.integer(),
                total: this.integer(),
                ...dataShape,
            } as Shape<MRData & T>),
        });
    }

    protected year(): Validator<`${number}`> {
        return this.string({ pattern: /^\d{4}$/u }) as Validator<`${number}`>;
    }

    protected statusEnum(): Validator<StatusType> {
        return this.exact(...Object.values(StatusType));
    }

    /**
     * @internal
     */
    protected optional<T>(validator: Validator<T>): Validator<T | undefined> {
        return function(value: unknown, path: string): T | undefined {
            if (value === undefined) {
                return undefined;
            }

            return validator(value, path);
        };
    }

    /**
     * @internal
     */
    protected string({ pattern }: { pattern?: RegExp } = {}): Validator<string> {
        return function(value: unknown, path: string): string {
            if (typeof value !== 'string') {
                throw new ValidationError(`[${path}] should be a string`);
            }

            if (pattern && !pattern.test(value)) {
                throw new ValidationError(`[${path}] doesn't match the pattern`);
            }

            return value;
        };
    }

    /**
     * @internal
     */
    protected integer(): Validator<`${number}`> {
        return this.string({ pattern: /^-?\d+$/u }) as Validator<`${number}`>;
    }

    /**
     * @internal
     */
    protected decimal(): Validator<`${number}`> {
        return this.string({ pattern: /^-?\d+(\.\d+)?$/u }) as Validator<`${number}`>;
    }

    /**
     * @internal
     */
    protected object<T extends Record<string, unknown>>(shape: Shape<T>): Validator<T> {
        return function(value: unknown, path: string): T {
            if (typeof value !== 'object' || !value || Array.isArray(value)) {
                throw new ValidationError(`[${path}] should be an object`);
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const result: Record<string, any> = {};

            for (const [key, validator] of Object.entries(shape)) {
                result[key] = validator(
                    // @ts-expect-error Not something for now
                    value[key],
                    `${path}.${key}`,
                );
            }

            return result as T;
        };
    }

    /**
     * @internal
     */
    protected array<T>(validator: Validator<T>): Validator<T[]> {
        return function(value: unknown, path: string): T[] {
            if (!Array.isArray(value)) {
                throw new ValidationError(`[${path}] should be an array`);
            }

            return value.map((item, index) => validator(item, `${path}[${index}]`));
        };
    }

    /**
     * @internal
     */
    protected date(): Validator<string> {
        return this.string({ pattern: /^\d{4}-\d{2}\d{2}$/u });
    }

    /**
     * @internal
     */
    protected exact<const A extends unknown[]>(...allowed: A): Validator<A[number]> {
        return function(value: unknown, path: string): A[number] {
            for (const x of allowed) {
                if (x === value) {
                    return value;
                }
            }

            throw new ValidationError(`[${path}] is not exact match`);
        };
    }
}
