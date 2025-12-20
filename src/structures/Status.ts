import type { Api } from '../Api';
import type { StatusType } from '../enums';
import type { StatusApiData } from '../types';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class Status {
    public readonly id: StatusType;
    public readonly count: number;
    public readonly name: string;

    public constructor(data: StatusApiData, protected readonly api: Api) {
        this.id = data.statusId;
        this.count = Number(data.count);
        this.name = data.status;
    }
}
