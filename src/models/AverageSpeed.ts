import type { AverageSpeedApiData } from '../types';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class AverageSpeed {
    /**
     * The units
     */
    public readonly units: string;
    /**
     * tests
     */
    public readonly speed: number;

    public constructor(data: AverageSpeedApiData) {
        this.units = data.units;
        this.speed = Number(data.speed);
    }
}
