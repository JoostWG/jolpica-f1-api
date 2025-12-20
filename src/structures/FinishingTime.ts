import type { FinishingTimeApiData } from '../types';

/**
 * @since 2.0.0
 */
export class FinishingTime {
    public readonly milliseconds: number;
    public readonly time: string;

    public constructor(data: FinishingTimeApiData) {
        this.milliseconds = Number(data.millis);
        this.time = data.time;
    }
}
