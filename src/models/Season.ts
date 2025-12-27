import type { Api } from '../Api';
import type { SeasonApiData } from '../types';
import { Model } from './Model';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class Season extends Model {
    public readonly year: number;
    public readonly wikiUrl: string;

    public constructor(data: SeasonApiData, api: Api) {
        super(api);

        this.year = Number(data.season);
        this.wikiUrl = data.url;
    }
}
