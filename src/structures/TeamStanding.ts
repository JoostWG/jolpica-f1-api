import type { Api } from '../Api';
import type { ConstructorStandingApiData } from '../types';
import { Team } from './Team';

export class TeamStanding {
    public readonly season: number;
    public readonly round: number;
    public readonly position: string | null;
    public readonly positionText: string;
    public readonly points: number;
    public readonly wins: number;
    public readonly team: Team;

    // eslint-disable-next-line @typescript-eslint/max-params
    public constructor(
        data: ConstructorStandingApiData,
        season: string,
        round: string,
        protected readonly api: Api,
    ) {
        this.season = Number(season);
        this.round = Number(round);
        this.position = data.position ?? null;
        this.positionText = data.positionText;
        this.points = Number(data.points);
        this.wins = Number(data.wins);
        this.team = new Team(data.Constructor, this.api);
    }
}
