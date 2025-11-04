import { SuccessResponse } from './common.d.js';

interface LocationApiData {
    lat: `${number}`;
    long: `${number}`;
    locality: string;
    country: string;
}

interface CircuitApiData {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: LocationApiData;
}

type CircuitsResponse = SuccessResponse<{
    CircuitTable: {
        Circuits: CircuitApiData[];
    };
}>;

export type { CircuitApiData, CircuitsResponse, LocationApiData };
