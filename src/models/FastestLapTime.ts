import type { Api } from '../Api';
import type { FastestLapTimeApiData } from '../types';
import { Model } from './Model';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class FastestLapTime extends Model {
    public readonly time: string;

    public constructor(data: FastestLapTimeApiData, api: Api) {
        super(api);

        this.time = data.time;
    }
}
