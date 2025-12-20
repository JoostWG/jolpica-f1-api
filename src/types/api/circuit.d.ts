import type { SuccessResponse } from '.';

/**
 * @category Api data
 */
export interface LocationApiData {
    lat: `${number}`;
    long: `${number}`;
    locality: string;
    country: string;
}

/**
 * @category Api data
 */
export interface CircuitApiData {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: LocationApiData;
}

/**
 * @category Api responses
 */
export type CircuitsResponse = SuccessResponse<{
    CircuitTable: {
        Circuits: CircuitApiData[];
    };
}>;
