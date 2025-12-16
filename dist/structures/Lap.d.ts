import { Race } from './Race.js';
import { Timing } from './Timing.js';
import { LapApiData } from '../types/api/lap.d.js';
import { RaceApiData } from '../types/api/race.d.js';
import './Circuit.js';
import './Location.js';
import '../types/api/circuit.d.js';
import '../types/api/common.d.js';
import './SessionDateTime.js';

declare class Lap {
    readonly number: number;
    readonly timings: readonly Timing[];
    readonly race: Race;
    constructor(data: LapApiData, raceData: RaceApiData);
}

export { Lap };
