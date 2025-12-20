import { LocationApiData } from '../types/api/circuit.d.js';
import '../types/api/common.d.js';

/**
 * @category Models
 *
 * @since 2.0.0
 */
declare class Location {
    readonly latitude: number;
    readonly longitude: number;
    readonly locality: string;
    readonly country: string;
    constructor(data: LocationApiData);
}

export { Location };
