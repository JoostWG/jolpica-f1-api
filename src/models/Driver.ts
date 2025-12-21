import type { Api } from '../Api';
import type { PendingRequest } from '../PendingRequest';
import type {
    CircuitOptions,
    DriverApiData,
    DriverStandingOptions,
    LapOptions,
    PitStopOptions,
    Prettify,
    QualifyingResultOptions,
    RaceOptions,
    ResultOptions,
    SeasonOptions,
    SprintResultOptions,
    TeamOptions,
} from '../types';
import type { Circuit } from './Circuit';
import type { DriverStanding } from './DriverStanding';
import type { Lap } from './Lap';
import type { PitStop } from './PitStop';
import type { QualifyingResult } from './QualifyingResult';
import type { Race } from './Race';
import type { Result } from './Result';
import type { Season } from './Season';
import type { SprintResult } from './SprintResult';
import type { Team } from './Team';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class Driver {
    /**
     *  Unique ID used by the API
     */
    public readonly id: string;
    /**
     *  The driver's first name
     */
    public readonly firstName: string;
    /**
     *  The driver's last name
     */
    public readonly lastName: string;
    /**
     *  The driver's date of birth
     */
    public readonly dateOfBirth: Date;
    /**
     *  The driver's nationality
     */
    public readonly nationality: string;
    /**
     *  The driver's racing number
     */
    public readonly number: number | null;
    /**
     *  The driver's three letter code
     */
    public readonly code: string | null;
    /**
     *  URL to wikipedia page
     */
    public readonly wikiUrl: string;

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

    /**
     * The driver's full name.
     *
     * @since 2.1.0
     */
    public get name(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    /**
     * The driver's current age.
     *
     * @since 2.1.0
     */
    public get age(): number {
        return this.ageAt(new Date());
    }

    /**
     * Get the driver's age for a given date.
     *
     * @since 2.1.0
     */
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

    /**
     * Get circuits the driver has raced at.
     *
     * @since 2.1.0
     */
    public circuits(options?: Prettify<Omit<CircuitOptions, 'driver'>>): PendingRequest<Circuit> {
        return this.api.circuits(this.getOptions(options));
    }

    /**
     * @since 2.1.0
     */
    public driverStandings(
        options: Prettify<Omit<DriverStandingOptions, 'driver'>>,
    ): PendingRequest<DriverStanding> {
        return this.api.driverStandings(this.getOptions(options));
    }

    /**
     * @since 2.1.0
     */
    public laps(options: Prettify<Omit<LapOptions, 'driver'>>): PendingRequest<Lap> {
        return this.api.laps(this.getOptions(options));
    }

    /**
     * @since 2.1.0
     */
    public pitStops(options: Prettify<Omit<PitStopOptions, 'driver'>>): PendingRequest<PitStop> {
        return this.api.pitStops(this.getOptions(options));
    }

    /**
     * @since 2.1.0
     */
    public qualifyingResults(
        options?: Prettify<Omit<QualifyingResultOptions, 'driver'>>,
    ): PendingRequest<QualifyingResult> {
        return this.api.qualifyingResults(this.getOptions(options));
    }

    /**
     * @since 2.1.0
     */
    public races(options?: Prettify<Omit<RaceOptions, 'driver'>>): PendingRequest<Race> {
        return this.api.races(this.getOptions(options));
    }

    /**
     * @since 2.1.0
     */
    public results(options?: Prettify<Omit<ResultOptions, 'driver'>>): PendingRequest<Result> {
        return this.api.results(this.getOptions(options));
    }

    /**
     * @since 2.1.0
     */
    public seasons(options?: Prettify<Omit<SeasonOptions, 'driver'>>): PendingRequest<Season> {
        return this.api.seasons(this.getOptions(options));
    }

    /**
     * @since 2.1.0
     */
    public sprintResults(
        options?: Prettify<Omit<SprintResultOptions, 'driver'>>,
    ): PendingRequest<SprintResult> {
        return this.api.sprintResults(this.getOptions(options));
    }

    /**
     * @since 2.1.0
     */
    public teams(options?: Prettify<TeamOptions>): PendingRequest<Team> {
        return this.api.teams(this.getOptions(options));
    }

    /**
     * @since 2.1.0
     */
    private getOptions<T>(options: T): T & { driver: string } {
        return { driver: this.id, ...options };
    }
}
