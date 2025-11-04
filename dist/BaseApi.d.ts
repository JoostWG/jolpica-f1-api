import { Pagination, SuccessResponse } from './types/api/common.d.js';
import { ApiCache } from './types/ApiCache.d.js';

declare class BaseApi {
    private readonly cache?;
    private readonly axios;
    constructor(cache?: ApiCache | undefined);
    get<T extends SuccessResponse>(path: string, pagination?: Pagination): Promise<T>;
    private responseIsBadRequest;
}

export { BaseApi };
