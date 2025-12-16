import { FinishingTimeApiData } from '../types/api/common.d.js';

declare class FinishingTime {
    readonly milliseconds: number;
    readonly time: string;
    constructor(data: FinishingTimeApiData);
}

export { FinishingTime };
