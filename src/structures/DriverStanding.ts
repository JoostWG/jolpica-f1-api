import type { Api } from '../Api';
import type { DriverStandingApiData } from '../types';
import { Driver } from './Driver';
import { Team } from './Team';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class DriverStanding {
    public readonly season: number;
    public readonly round: number;
    public readonly position: number | null;
    public readonly positionText: string;
    public readonly points: number;
    public readonly wins: number;
    public readonly driver: Driver;
    public readonly teams: readonly Team[];

    public constructor(
        data: DriverStandingApiData,
        season: string,
        round: string,
        protected readonly api: Api,
    ) {
        this.season = Number(season);
        this.round = Number(round);
        this.position = data.position !== undefined ? Number(data.position) : null;
        this.positionText = data.positionText;
        this.points = Number(data.points);
        this.wins = Number(data.wins);
        this.driver = new Driver(data.Driver, this.api);
        this.teams = data.Constructors.map((teamData) => new Team(teamData, this.api));
    }
}
