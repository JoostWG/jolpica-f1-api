import { StatusType } from '../enums/StatusType.js';
import { StatusApiData } from '../types/api/status.d.js';
import '../types/api/common.d.js';

declare class Status {
    readonly id: StatusType;
    readonly count: number;
    readonly name: string;
    constructor(data: StatusApiData);
}

export { Status };
