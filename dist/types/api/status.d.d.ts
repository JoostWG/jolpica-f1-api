import { StatusType } from '../../enums/StatusType.js';
import { SuccessResponse } from './common.d.js';

/**
 * @category Api data
 *
 * @since 1.0.1
 */
interface StatusApiData {
    statusId: StatusType;
    count: string;
    status: string;
}

/**
 * @category Api responses
 *
 * @since 1.0.1
 */
type StatusesResponse = SuccessResponse<{
    StatusTable: {
        Status: StatusApiData[];
    };
}>;

export type { StatusApiData, StatusesResponse };
