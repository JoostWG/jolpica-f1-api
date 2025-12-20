import type { DateTimeApiData } from '../types';

/**
 * @since 2.0.0
 */
export class SessionDateTime {
    public readonly date: string | null;
    public readonly time: string | null;

    public constructor(data: DateTimeApiData) {
        this.date = data.date ?? null;
        this.time = data.time ?? null;
    }
}
