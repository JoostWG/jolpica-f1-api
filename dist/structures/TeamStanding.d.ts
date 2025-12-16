import { Team } from './Team.js';
import { ConstructorStandingApiData } from '../types/api/constructor-standing.d.js';
import '../types/api/constructor.d.js';
import '../types/api/common.d.js';

declare class TeamStanding {
    readonly season: number;
    readonly round: number;
    readonly position: string | null;
    readonly positionText: string;
    readonly points: number;
    readonly wins: number;
    readonly team: Team;
    constructor(data: ConstructorStandingApiData, season: string, round: string);
}

export { TeamStanding };
