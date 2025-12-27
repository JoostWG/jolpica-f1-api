import type { Api } from '../Api';
import type { DateTimeApiData } from '../types';
import { Model } from './Model';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class SessionDateTime extends Model {
    /**
     * The date this session was held
     */
    public readonly date: string | null;
    /**
     * The time the session started
     */
    public readonly time: string | null;

    public constructor(data: DateTimeApiData, api: Api) {
        super(api);

        this.date = data.date ?? null;
        this.time = data.time ?? null;
    }
}
