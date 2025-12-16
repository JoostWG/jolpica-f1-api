import type { ConstructorApiData } from '../types';

export class Team {
    public readonly id: string | null;
    public readonly wikiUrl: string | null;
    public readonly name: string;
    public readonly nationality: string | null;

    public constructor(data: ConstructorApiData) {
        this.id = data.constructorId ?? null;
        this.wikiUrl = data.url ?? null;
        this.name = data.name;
        this.nationality = data.nationality ?? null;
    }
}
