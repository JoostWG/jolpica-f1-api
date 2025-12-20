import type { Api } from '../Api';
import type { ConstructorApiData } from '../types';

/**
 * @since 2.0.0
 */
export class Team {
    public readonly id: string | null;
    public readonly wikiUrl: string | null;
    public readonly name: string;
    public readonly nationality: string | null;

    public constructor(data: ConstructorApiData, protected readonly api: Api) {
        this.id = data.constructorId ?? null;
        this.wikiUrl = data.url ?? null;
        this.name = data.name;
        this.nationality = data.nationality ?? null;
    }
}
