import type { SuccessResponse } from '.';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface LocationApiData {
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
export interface CircuitApiData {
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
export type CircuitsResponse = SuccessResponse<{
    CircuitTable: {
        Circuits: CircuitApiData[];
    };
}>;
