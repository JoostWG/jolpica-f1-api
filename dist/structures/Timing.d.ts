import { TimingApiData } from '../types/api/lap.d.js';
import '../types/api/common.d.js';
import '../types/api/race.d.js';
import '../types/api/circuit.d.js';

declare class Timing {
    readonly driverId: string;
    readonly position: number;
    readonly time: string;
    constructor(data: TimingApiData);
}

export { Timing };
