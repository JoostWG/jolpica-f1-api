import { SuccessResponse } from './common.d.js';

/**
 * @category Api data
 */
interface LocationApiData {
    lat: `${number}`;
    long: `${number}`;
    locality: string;
    country: string;
}

/**
 * @category Api data
 */
interface CircuitApiData {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: LocationApiData;
}

/**
 * @category Api responses
 */
type CircuitsResponse = SuccessResponse<{
    CircuitTable: {
        Circuits: CircuitApiData[];
    };
}>;

export type { CircuitApiData, CircuitsResponse, LocationApiData };
