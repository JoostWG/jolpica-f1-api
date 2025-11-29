export interface FinishingTimeApiData {
    millis: string;
    time: string;
}

export interface FastestLapTimeApiData {
    time: string;
}

export interface AverageSpeedApiData {
    units: string;
    speed: string;
}

export interface FastestLapApiData {
    rank: string;
    lap: string;
    Time: FastestLapTimeApiData;
    AverageSpeed?: AverageSpeedApiData;
}

export interface Pagination {
    /**
     * Maximum number of results results returned. Defaults to 30. Max is 100
     */
    limit?: number;
    /**
     * Allows you to offset the results by the specified number for pagination. Defaults to 0.
     */
    offset?: number;
}

export type MRData<T> = T & {
    xmlns: '';
    series: 'f1';
    url: string;
    limit: `${number}`;
    offset: `${number}`;
    total: `${number}`;
};

export interface SuccessResponse<T = unknown> {
    MRData: MRData<T>;
}

export interface BadRequestResponse {
    detail: string;
}
