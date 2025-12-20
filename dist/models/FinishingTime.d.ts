import { FinishingTimeApiData } from '../types/api/common.d.js';

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class FinishingTime {
    readonly milliseconds: number;
    readonly time: string;
    constructor(data: FinishingTimeApiData);
}

export { FinishingTime };
