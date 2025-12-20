import { TimingApiData } from '../types/api/lap.d.js';
import '../types/api/common.d.js';
import '../types/api/race.d.js';
import '../types/api/circuit.d.js';

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class Timing {
    readonly driverId: string;
    readonly position: number;
    readonly time: string;
    constructor(data: TimingApiData);
}

export { Timing };
