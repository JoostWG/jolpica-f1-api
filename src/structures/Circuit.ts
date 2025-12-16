import type { CircuitApiData } from '../types';
import { Location } from './Location';

export class Circuit {
    public readonly id: string;
    public readonly wikiUrl: string;
    public readonly name: string;
    public readonly location: Location;

    public constructor(data: CircuitApiData) {
        this.id = data.circuitId;
        this.wikiUrl = data.url;
        this.name = data.circuitName;
        this.location = new Location(data.Location);
    }
}
