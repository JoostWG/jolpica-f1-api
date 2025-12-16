import { ConstructorApiData } from '../types/api/constructor.d.js';
import '../types/api/common.d.js';

declare class Team {
    readonly id: string | null;
    readonly wikiUrl: string | null;
    readonly name: string;
    readonly nationality: string | null;
    constructor(data: ConstructorApiData);
}

export { Team };
