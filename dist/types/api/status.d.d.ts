import { StatusType } from '../../enums/StatusType.js';
import { SuccessResponse } from './common.d.js';

/**
 * @category Api data
 */
interface StatusApiData {
    statusId: StatusType;
    count: string;
    status: string;
}

/**
 * @category Api responses
 */
type StatusesResponse = SuccessResponse<{
    StatusTable: {
        Status: StatusApiData[];
    };
}>;

export type { StatusApiData, StatusesResponse };
