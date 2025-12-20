import type { Api } from '../Api';
import type { QualifyingResultApiData, RaceApiData } from '../types';
import { Driver } from './Driver';
import { Race } from './Race';
import { Team } from './Team';

/**
 * @since 2.0.0
 */
export class QualifyingResult {
    public readonly number: number;
    public readonly position: number | null;
    public readonly driver: Driver;
    public readonly team: Team;
    public readonly q1: string | null;
    public readonly q2: string | null;
    public readonly q3: string | null;
    public readonly race: Race;

    public constructor(
        data: QualifyingResultApiData,
        raceData: RaceApiData,
        protected readonly api: Api,
    ) {
        this.number = Number(data.number);
        this.position = data.position !== undefined ? Number(data.position) : null;
        this.driver = new Driver(data.Driver, this.api);
        this.team = new Team(data.Constructor, this.api);
        this.q1 = data.Q1 ?? null;
        this.q2 = data.Q2 ?? null;
        this.q3 = data.Q3 ?? null;
        this.race = new Race(raceData, this.api);
    }
}
