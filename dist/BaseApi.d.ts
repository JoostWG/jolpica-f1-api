import { CreateAxiosDefaults, AxiosRequestConfig } from 'axios';
import { SuccessResponse, Pagination } from './types/api/common.d.js';
import { ApiCache } from './types/ApiCache.d.js';

interface BaseApiConstructorOptions {
    cache?: ApiCache;
    config: Omit<CreateAxiosDefaults, 'baseUrl'>;
}
declare class BaseApi {
    private readonly axios;
    private readonly cache?;
    constructor({ cache, config }: BaseApiConstructorOptions);
    get<T extends SuccessResponse>(path: string, pagination?: Pagination, config?: AxiosRequestConfig): Promise<T>;
    private responseIsBadRequest;
}

export { BaseApi, type BaseApiConstructorOptions };
