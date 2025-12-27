import type { Api } from '../Api';
import type { CircuitApiData, Unsure } from '../types';
import { Location } from './Location';
import { Model } from './Model';

/**
 * @category Models
 *
 * @since 2.0.0
 */
export class Circuit extends Model {
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

    public constructor(data: Unsure<CircuitApiData>, api: Api) {
        super(api);

        this.id = this.validator.ensure('string', data, 'circuitId', true);
        this.wikiUrl = this.validator.ensure('string', data, 'url', true);
        this.name = this.validator.ensure('string', data, 'circuitName', true);
        this.location = new Location(
            this.validator.ensure('object', data, 'Location', true),
            this.api,
        );
    }
}
