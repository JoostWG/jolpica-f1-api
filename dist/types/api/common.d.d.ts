/**
 * @category Api data
 */
interface FinishingTimeApiData {
    millis: string;
    time: string;
}

/**
 * @category Api data
 */
interface FastestLapTimeApiData {
    time: string;
}

/**
 * @category Api data
 */
interface AverageSpeedApiData {
    units: string;
    speed: string;
}

/**
 * @category Api data
 */
interface FastestLapApiData {
    rank: string;
    lap: string;
    Time: FastestLapTimeApiData;
    AverageSpeed?: AverageSpeedApiData;
}

/**
 * @category Base
 */
interface Pagination {
    /**
     * Maximum number of results results returned. Defaults to 30. Max is 100
     */
    limit?: number;
    /**
     * Allows you to offset the results by the specified number for pagination. Defaults to 0.
     */
    offset?: number;
}

type MRData<T> = T & {
    xmlns: '';
    series: 'f1';
    url: string;
    limit: `${number}`;
    offset: `${number}`;
    total: `${number}`;
};

/**
 * @category Api responses
 */
interface SuccessResponse<T = unknown> {
    MRData: MRData<T>;
}

/**
 * @category Api responses
 */
interface BadRequestResponse {
    detail: string;
}

export type { AverageSpeedApiData, BadRequestResponse, FastestLapApiData, FastestLapTimeApiData, FinishingTimeApiData, MRData, Pagination, SuccessResponse };
