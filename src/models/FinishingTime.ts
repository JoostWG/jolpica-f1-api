import type { Api } from '../Api';
import type { FinishingTimeApiData } from '../types';
import { Model } from './Model';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class FinishingTime extends Model {
    public readonly milliseconds: number;
    public readonly time: string;

    public constructor(data: FinishingTimeApiData, api: Api) {
        super(api);

        this.milliseconds = Number(data.millis);
        this.time = data.time;
    }
}
