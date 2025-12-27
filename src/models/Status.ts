import type { Api } from '../Api';
import type { StatusType } from '../enums';
import type { StatusApiData } from '../types';
import { Model } from './Model';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class Status extends Model {
    public readonly id: StatusType;
    public readonly count: number;
    public readonly name: string;

    public constructor(data: StatusApiData, api: Api) {
        super(api);

        this.id = data.statusId;
        this.count = Number(data.count);
        this.name = data.status;
    }
}
