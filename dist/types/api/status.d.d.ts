import { StatusType } from '../../enums/StatusType.js';
import { SuccessResponse } from './common.d.js';

interface StatusApiData {
    statusId: StatusType;
    count: string;
    status: string;
}

type StatusesResponse = SuccessResponse<{
    StatusTable: {
        Status: StatusApiData[];
    };
}>;

export type { StatusApiData, StatusesResponse };
