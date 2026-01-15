import type { Api } from '../Api';
import type { AverageSpeedApiData } from '../types';
import { Model } from './Model';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class AverageSpeed extends Model {
    /**
     * The units the speed was measured in
     */
    public readonly units: string;
    /**
     * The average speed
     */
    public readonly speed: number;

    public constructor(data: AverageSpeedApiData, api: Api) {
        super(api);

        this.units = data.units;
        this.speed = Number(data.speed);
    }

    /**
     * The average speed in kilometers per hour
     *
     * @since 3.0.0
     */
    public get kph(): number {
        if (this.units === 'kph') {
            return this.speed;
        }

        throw new Error('Invalid speed unit');
    }

    /**
     * The average speed in miles per hour
     *
     * @since 3.0.0
     */
    public get mph(): number {
        return this.kph * 0.621371192;
    }
}
