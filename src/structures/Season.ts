import type { Api } from '../Api';
import type { SeasonApiData } from '../types';

/**
 * @since 2.0.0
 */
export class Season {
    public readonly year: number;
    public readonly wikiUrl: string;

    public constructor(data: SeasonApiData, protected readonly api: Api) {
        this.year = Number(data.season);
        this.wikiUrl = data.url;
    }
}
