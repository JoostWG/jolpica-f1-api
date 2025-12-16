import { Race } from './Race.js';
import { PitStopApiData } from '../types/api/pit-stop.d.js';
import { RaceApiData } from '../types/api/race.d.js';
import './Circuit.js';
import './Location.js';
import '../types/api/circuit.d.js';
import '../types/api/common.d.js';
import './SessionDateTime.js';

declare class PitStop {
    readonly driverId: string;
    readonly lap: number | null;
    readonly stop: number | null;
    readonly time: string | null;
    readonly duration: number | null;
    readonly race: Race;
    constructor(data: PitStopApiData, raceData: RaceApiData);
}

export { PitStop };
