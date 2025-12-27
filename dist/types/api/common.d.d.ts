/**
 * @category Api data
 *
 * @since 1.0.1
 */
interface FinishingTimeApiData {
    millis: string;
    time: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
interface FastestLapTimeApiData {
    time: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
interface AverageSpeedApiData {
    units: string;
    speed: string;
}

/**
 * @category Api data
 *
 * @since 1.0.1
 */
interface FastestLapApiData {
    rank: string;
    lap: string;
    Time: FastestLapTimeApiData;
    AverageSpeed?: AverageSpeedApiData;
}

/**
 * @category Base
 *
 * @since 1.0.1
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

/**
 * The root object of the json response.
 *
 * @since 1.0.1
 *
 * @see https://github.com/jolpica/jolpica-f1/tree/main/docs#common-response-fields
 */
type MRData<T> = T & {
    /**
     * Blank, provided for compatibility with legacy ergast API.
     */
    xmlns: '';
    /**
     * The racing series of the results (always f1).
     */
    series: 'f1';
    /**
     * The API URL that the returned data was retrieved from (without query parameters).
     */
    url: string;
    /**
     * The limit used for this call. May be different from the query parameter set in some cases.
     */
    limit: `${number}`;
    /**
     * The result offset of this call.
     */
    offset: `${number}`;
    /**
     * The total number of items available from the endpoint.
     */
    total: `${number}`;
};

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
interface SuccessResponse<T = unknown> {
    MRData: MRData<T>;
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
interface BadRequestResponse {
    detail: string;
}

export type { AverageSpeedApiData, BadRequestResponse, FastestLapApiData, FastestLapTimeApiData, FinishingTimeApiData, MRData, Pagination, SuccessResponse };
