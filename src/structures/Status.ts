import type { StatusType } from '../enums';
import type { StatusApiData } from '../types';

export class Status {
    public readonly id: StatusType;
    public readonly count: number;
    public readonly name: string;

    public constructor(data: StatusApiData) {
        this.id = data.statusId;
        this.count = Number(data.count);
        this.name = data.status;
    }
}
