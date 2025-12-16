import { AverageSpeedApiData } from '../types/api/common.d.js';

declare class AverageSpeed {
    readonly units: string;
    readonly speed: number;
    constructor(data: AverageSpeedApiData);
}

export { AverageSpeed };
