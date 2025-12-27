import { SuccessResponse } from './common.d.js';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
interface LocationApiData {
    lat: `${number}`;
    long: `${number}`;
    locality: string;
    country: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 *
 * @see https://github.com/jolpica/jolpica-f1/blob/main/docs/endpoints/circuits.md#circuits-object-fields
 */
interface CircuitApiData {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: LocationApiData;
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type CircuitsResponse = SuccessResponse<{
    CircuitTable: {
        Circuits: CircuitApiData[];
    };
}>;

export type { CircuitApiData, CircuitsResponse, LocationApiData };
