import type { Api } from '../Api';
import type { FastestLapApiData } from '../types';
import { AverageSpeed } from './AverageSpeed';
import { FastestLapTime } from './FastestLapTime';
import { Model } from './Model';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class FastestLap extends Model {
    public readonly rank: number;
    public readonly lap: number;
    public readonly time: FastestLapTime;
    public readonly averageSpeed: AverageSpeed | null;

    public constructor(data: FastestLapApiData, api: Api) {
        super(api);

        this.rank = Number(data.rank);
        this.lap = Number(data.lap);
        this.time = new FastestLapTime(data.Time, this.api);
        this.averageSpeed = data.AverageSpeed !== undefined
            ? new AverageSpeed(data.AverageSpeed, this.api)
            : null;
    }
}
