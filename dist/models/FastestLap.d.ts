import { AverageSpeed } from './AverageSpeed.js';
import { FastestLapTime } from './FastestLapTime.js';
import { FastestLapApiData } from '../types/api/common.d.js';

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class FastestLap {
    readonly rank: number;
    readonly lap: number;
    readonly time: FastestLapTime;
    readonly averageSpeed: AverageSpeed | null;
    constructor(data: FastestLapApiData);
}

export { FastestLap };
