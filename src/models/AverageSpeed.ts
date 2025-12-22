import type { AverageSpeedApiData } from '../types';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class AverageSpeed {
    /**
     * The units the speed was measured in
     */
    public readonly units: string;
    /**
     * The average speed
     */
    public readonly speed: number;

    public constructor(data: AverageSpeedApiData) {
        this.units = data.units;
        this.speed = Number(data.speed);
    }
}
