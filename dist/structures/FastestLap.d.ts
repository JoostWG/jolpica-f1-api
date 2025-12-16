import { AverageSpeed } from './AverageSpeed.js';
import { FastestLapTime } from './FastestLapTime.js';
import { FastestLapApiData } from '../types/api/common.d.js';

declare class FastestLap {
    readonly rank: number;
    readonly lap: number;
    readonly time: FastestLapTime;
    readonly averageSpeed: AverageSpeed | null;
    constructor(data: FastestLapApiData);
}

export { FastestLap };
