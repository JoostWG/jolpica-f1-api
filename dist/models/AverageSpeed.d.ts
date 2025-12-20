import { AverageSpeedApiData } from '../types/api/common.d.js';

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class AverageSpeed {
    readonly units: string;
    readonly speed: number;
    constructor(data: AverageSpeedApiData);
}

export { AverageSpeed };
