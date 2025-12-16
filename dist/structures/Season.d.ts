import { SeasonApiData } from '../types/api/season.d.js';
import '../types/api/common.d.js';

declare class Season {
    readonly year: number;
    readonly wikiUrl: string;
    constructor(data: SeasonApiData);
}

export { Season };
