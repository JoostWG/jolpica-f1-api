import type { SeasonApiData } from '../types';

export class Season {
    public readonly year: number;
    public readonly wikiUrl: string;

    public constructor(data: SeasonApiData) {
        this.year = Number(data.season);
        this.wikiUrl = data.url;
    }
}
