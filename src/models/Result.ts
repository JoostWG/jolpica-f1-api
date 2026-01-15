import type { Api } from '../Api';
import type { RaceApiData, ResultApiData } from '../types';
import { Driver } from './Driver';
import { FastestLap } from './FastestLap';
import { FinishingTime } from './FinishingTime';
import { Model } from './Model';
import { Race } from './Race';
import { Team } from './Team';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class Result extends Model {
    public readonly number: number;
    public readonly position: string;
    public readonly positionText: string;
    public readonly points: number;
    public readonly driver: Driver;
    public readonly team: Team | null;
    public readonly grid: number | null;
    public readonly laps: number | null;
    public readonly status: string | null;
    public readonly fastestLap: FastestLap | null;
    public readonly finishingTime: FinishingTime | null;
    public readonly race: Race;

    public constructor(data: ResultApiData, raceData: RaceApiData, api: Api) {
        super(api);

        this.number = Number(data.number);
        this.position = data.position;
        this.positionText = data.positionText;
        this.points = Number(data.points);
        this.driver = new Driver(data.Driver, this.api);
        this.team = data.Constructor !== undefined
            ? new Team(data.Constructor, this.api)
            : null;
        this.grid = data.grid !== undefined ? Number(data.grid) : null;
        this.laps = data.laps !== undefined ? Number(data.laps) : null;
        this.status = data.status ?? null;
        this.fastestLap = data.FastestLap !== undefined
            ? new FastestLap(data.FastestLap, this.api)
            : null;
        this.finishingTime = data.Time !== undefined
            ? new FinishingTime(data.Time, this.api)
            : null;
        this.race = new Race(raceData, this.api);
    }

    /**
     * Returns the driver's age at the time of the race
     *
     * @since 3.0.0
     */
    public get driverAge(): number | null {
        return this.driver.ageAt(this.race.dateTime);
    }

    /**
     * Calculates the circuit length in meters based of the fastest lap time and average speed.
     *
     * @since 3.0.0
     */
    public calculateCircuitLength(): number | null {
        if (!this.fastestLap?.averageSpeed) {
            return null;
        }

        const match = this.fastestLap.time.time.match(/(?<minutes>\d+):(?<seconds>\d+.\d+)/u);

        if (!match?.groups) {
            return null;
        }

        return (Number(match.groups.minutes) / 60 + Number(match.groups.seconds) / 3600)
            * this.fastestLap.averageSpeed.kph * 1000;
    }
}
