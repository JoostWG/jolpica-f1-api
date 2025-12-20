import { CreateAxiosDefaults, AxiosRequestConfig } from 'axios';
import { SuccessResponse, Pagination } from './types/api/common.d.js';
import { ApiCache } from './types/ApiCache.d.js';

/**
 * @category Base
 *
 * @since 1.0.1
 */
declare class BaseApi {
    private readonly axios;
    private readonly cache?;
    constructor({ cache, config }?: {
        cache?: ApiCache;
        config?: Omit<CreateAxiosDefaults, 'baseUrl'>;
    });
    get<T extends SuccessResponse>(path: string, pagination?: Pagination, config?: AxiosRequestConfig): Promise<T>;
    private responseIsBadRequest;
}

export { BaseApi };
