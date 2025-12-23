import type { StatusType } from '../../enums';
import type { SuccessResponse } from '.';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
export interface StatusApiData {
    statusId: StatusType;
    count: string;
    status: string;
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
export type StatusesResponse = SuccessResponse<{
    StatusTable: {
        Status: StatusApiData[];
    };
}>;
