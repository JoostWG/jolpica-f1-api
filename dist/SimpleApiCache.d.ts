import axios from 'axios';
import { Pagination } from './types/api/index.d.js';
import { ApiCache } from './types/ApiCache.d.js';
import './types/api/data.d.js';
import './enums/StatusType.js';

/**
 * A simple cache. Can also serve as an example.
 *
 * @category Base
 *
 * @since 3.0.0
 *
 * @experimental
 */
declare class SimpleApiCache implements ApiCache {
    protected readonly data: Map<string, {
        timestamp: number;
        data: unknown;
    }>;
    constructor();
    get<T>(path: string, pagination?: Pagination): Promise<T | null>;
    set(data: unknown, cacheControl: axios.AxiosHeaderValue | undefined, path: string, pagination?: Pagination): Promise<void>;
    private getCacheKey;
}

export { SimpleApiCache };
