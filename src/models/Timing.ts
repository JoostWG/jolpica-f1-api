import type { Api } from '../Api';
import type { TimingApiData } from '../types';
import { Model } from './Model';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class Timing extends Model {
    public readonly driverId: string;
    public readonly position: number;
    public readonly time: string;

    public constructor(data: TimingApiData, api: Api) {
        super(api);

        this.driverId = data.driverId;
        this.position = Number(data.position);
        this.time = data.time;
    }
}
