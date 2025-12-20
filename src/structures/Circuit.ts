import type { Api } from '../Api';
import type { CircuitApiData } from '../types';
import { Location } from './Location';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class Circuit {
    public readonly id: string;
    public readonly wikiUrl: string;
    public readonly name: string;
    public readonly location: Location;

    public constructor(data: CircuitApiData, protected readonly api: Api) {
        this.id = data.circuitId;
        this.wikiUrl = data.url;
        this.name = data.circuitName;
        this.location = new Location(data.Location);
    }
}
