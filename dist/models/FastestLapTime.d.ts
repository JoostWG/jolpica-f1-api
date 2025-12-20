import { FastestLapTimeApiData } from '../types/api/common.d.js';

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class FastestLapTime {
    readonly time: string;
    constructor(data: FastestLapTimeApiData);
}

export { FastestLapTime };
