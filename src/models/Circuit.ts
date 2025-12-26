import type { Api } from '../Api';
import type { CircuitApiData } from '../types';
import { Location } from './Location';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class Circuit {
    /**
     * The ID of this circuit used by the Jolpica API
     */
    public readonly id: string;
    /**
     * The name of this circuit
     */
    public readonly name: string;
    /**
     * URL to the wikipedia page about this circuit
     */
    public readonly wikiUrl: string;
    /**
     * The location of the circuit.
     */
    public readonly location: Location;

    public constructor(data: CircuitApiData, protected readonly api: Api) {
        this.id = data.circuitId;
        this.wikiUrl = data.url;
        this.name = data.circuitName;
        this.location = new Location(data.Location);
    }
}
