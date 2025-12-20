import type { FastestLapTimeApiData } from '../types';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class FastestLapTime {
    public readonly time: string;

    public constructor(data: FastestLapTimeApiData) {
        this.time = data.time;
    }
}
