import { FastestLapTimeApiData } from '../types/api/common.d.js';

declare class FastestLapTime {
    readonly time: string;
    constructor(data: FastestLapTimeApiData);
}

export { FastestLapTime };
