import type { StatusType } from '../../enums';
import type { SuccessResponse } from '.';

/**
 * @category Api data
 */
export interface StatusApiData {
    statusId: StatusType;
    count: string;
    status: string;
}

/**
 * @category Api responses
 */
export type StatusesResponse = SuccessResponse<{
    StatusTable: {
        Status: StatusApiData[];
    };
}>;
