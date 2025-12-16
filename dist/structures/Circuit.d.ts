import { Location } from './Location.js';
import { CircuitApiData } from '../types/api/circuit.d.js';
import '../types/api/common.d.js';

declare class Circuit {
    readonly id: string;
    readonly wikiUrl: string;
    readonly name: string;
    readonly location: Location;
    constructor(data: CircuitApiData);
}

export { Circuit };
