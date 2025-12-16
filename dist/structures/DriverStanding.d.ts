import { Driver } from './Driver.js';
import { Team } from './Team.js';
import { DriverStandingApiData } from '../types/api/driver-standing.d.js';
import '../types/api/driver.d.js';
import '../types/api/common.d.js';
import '../types/api/constructor.d.js';

declare class DriverStanding {
    readonly season: number;
    readonly round: number;
    readonly position: number | null;
    readonly positionText: string;
    readonly points: number;
    readonly wins: number;
    readonly driver: Driver;
    readonly teams: readonly Team[];
    constructor(data: DriverStandingApiData, season: string, round: string);
}

export { DriverStanding };
