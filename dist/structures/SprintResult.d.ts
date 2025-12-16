import { Driver } from './Driver.js';
import { Team } from './Team.js';
import { FastestLap } from './FastestLap.js';
import { FinishingTime } from './FinishingTime.js';
import { Race } from './Race.js';
import { RaceApiData } from '../types/api/race.d.js';
import { SprintResultApiData } from '../types/api/sprint-result.d.js';
import '../types/api/driver.d.js';
import '../types/api/common.d.js';
import '../types/api/constructor.d.js';
import './AverageSpeed.js';
import './FastestLapTime.js';
import './Circuit.js';
import './Location.js';
import '../types/api/circuit.d.js';
import './SessionDateTime.js';

declare class SprintResult {
    readonly number: number;
    readonly position: string;
    readonly positionText: string;
    readonly points: number;
    readonly driver: Driver;
    readonly team: Team | null;
    readonly grid: number | null;
    readonly laps: number | null;
    readonly status: string | null;
    readonly finishingTime: FinishingTime | null;
    readonly fastestLap: FastestLap | null;
    readonly race: Race;
    constructor(data: SprintResultApiData, raceData: RaceApiData);
}

export { SprintResult };
