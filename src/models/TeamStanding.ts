import type { Api } from '../Api';
import type { ConstructorStandingApiData } from '../types';
import { Model } from './Model';
import { Team } from './Team';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class TeamStanding extends Model {
    public readonly season: number;
    public readonly round: number;
    public readonly position: string | null;
    public readonly positionText: string;
    public readonly points: number;
    public readonly wins: number;
    public readonly team: Team;

    public constructor(data: ConstructorStandingApiData, season: string, round: string, api: Api) {
        super(api);

        this.season = Number(season);
        this.round = Number(round);
        this.position = data.position ?? null;
        this.positionText = data.positionText;
        this.points = Number(data.points);
        this.wins = Number(data.wins);
        this.team = new Team(data.Constructor, this.api);
    }
}
