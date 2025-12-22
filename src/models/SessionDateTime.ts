import type { DateTimeApiData } from '../types';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class SessionDateTime {
    /**
     * The date this session was held
     */
    public readonly date: string | null;
    /**
     * The time the session started
     */
    public readonly time: string | null;

    public constructor(data: DateTimeApiData) {
        this.date = data.date ?? null;
        this.time = data.time ?? null;
    }
}
