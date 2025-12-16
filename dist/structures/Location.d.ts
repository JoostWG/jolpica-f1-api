import { LocationApiData } from '../types/api/circuit.d.js';
import '../types/api/common.d.js';

declare class Location {
    readonly latitude: number;
    readonly longitude: number;
    readonly locality: string;
    readonly country: string;
    constructor(data: LocationApiData);
}

export { Location };
