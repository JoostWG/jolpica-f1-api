import type { Api } from '../Api';
import type { PendingRequest } from '../PendingRequest';
import type {
    CircuitOptions,
    DriverApiData,
    DriverStandingOptions,
    LapOptions,
    PitStopOptions,
    QualifyingResultOptions,
    RaceOptions,
    ResultOptions,
    SeasonOptions,
    SprintResultOptions,
    TeamOptions,
} from '../types';

export class Driver {
    public readonly id: string;
    public readonly wikiUrl: string;
    public readonly firstName: string;
    public readonly lastName: string;
    public readonly dateOfBirth: Date;
    public readonly nationality: string;
    public readonly number: number | null;
    public readonly code: string | null;

    public constructor(data: DriverApiData, protected readonly api: Api) {
        this.id = data.driverId;
        this.wikiUrl = data.url;
        this.firstName = data.givenName;
        this.lastName = data.familyName;
        this.dateOfBirth = new Date(data.dateOfBirth);
        this.nationality = data.nationality;
        this.number = data.permanentNumber !== undefined ? Number(data.permanentNumber) : null;
        this.code = data.code ?? null;
    }

    public get name(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public get age(): number {
        return this.ageAt(new Date());
    }

    public ageAt(date: Date): number {
        const age = date.getFullYear() - this.dateOfBirth.getFullYear();

        if (this.dateOfBirth.getMonth() > date.getMonth()) {
            return age - 1;
        }

        if (this.dateOfBirth.getDate() > date.getDate()) {
            return age - 1;
        }

        return age;
    }

    public circuits(options?: Omit<CircuitOptions, 'driver'>): PendingRequest<'circuits'> {
        return this.api.circuits(this.getOptions(options));
    }

    public driverStandings(
        options: Omit<DriverStandingOptions, 'driver'>,
    ): PendingRequest<'driverstandings'> {
        return this.api.driverStandings(this.getOptions(options));
    }

    public laps(options: Omit<LapOptions, 'driver'>): PendingRequest<'laps'> {
        return this.api.laps(this.getOptions(options));
    }

    public pitStops(options: Omit<PitStopOptions, 'driver'>): PendingRequest<'pitstops'> {
        return this.api.pitStops(this.getOptions(options));
    }

    public qualifyingResults(
        options?: Omit<QualifyingResultOptions, 'driver'>,
    ): PendingRequest<'qualifying'> {
        return this.api.qualifyingResults(this.getOptions(options));
    }

    public races(options?: Omit<RaceOptions, 'driver'>): PendingRequest<'races'> {
        return this.api.races(this.getOptions(options));
    }

    public results(options?: Omit<ResultOptions, 'driver'>): PendingRequest<'results'> {
        return this.api.results(this.getOptions(options));
    }

    public seasons(options?: Omit<SeasonOptions, 'driver'>): PendingRequest<'seasons'> {
        return this.api.seasons(this.getOptions(options));
    }

    public sprintResults(options?: Omit<SprintResultOptions, 'driver'>): PendingRequest<'sprint'> {
        return this.api.sprintResults(this.getOptions(options));
    }

    public teams(options?: TeamOptions): PendingRequest<'constructors'> {
        return this.api.teams(this.getOptions(options));
    }

    private getOptions<T>(options: T): T & { driver: string } {
        return { driver: this.id, ...options };
    }
}
