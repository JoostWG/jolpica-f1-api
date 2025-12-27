import type { Api } from '../Api';
import type { ConstructorApiData } from '../types';
import { Model } from './Model';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class Team extends Model {
    public readonly id: string | null;
    public readonly wikiUrl: string | null;
    public readonly name: string;
    public readonly nationality: string | null;

    public constructor(data: ConstructorApiData, api: Api) {
        super(api);

        this.id = data.constructorId ?? null;
        this.wikiUrl = data.url ?? null;
        this.name = data.name;
        this.nationality = data.nationality ?? null;
    }
}
