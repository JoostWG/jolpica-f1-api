import { Driver } from './Driver.js';
import { Team } from './Team.js';
import { Race } from './Race.js';
import { QualifyingResultApiData } from '../types/api/qualifying-result.d.js';
import { RaceApiData } from '../types/api/race.d.js';
import '../types/api/driver.d.js';
import '../types/api/common.d.js';
import '../types/api/constructor.d.js';
import './Circuit.js';
import './Location.js';
import '../types/api/circuit.d.js';
import './SessionDateTime.js';

declare class QualifyingResult {
    readonly number: number;
    readonly position: number | null;
    readonly driver: Driver;
    readonly team: Team;
    readonly q1: string | null;
    readonly q2: string | null;
    readonly q3: string | null;
    readonly race: Race;
    constructor(data: QualifyingResultApiData, raceData: RaceApiData);
}

export { QualifyingResult };
