import type axios from 'axios';
import type { Pagination } from './api';

/**
 * @category Base
 *
 * @since 1.0.1
 */
export interface ApiCache {
    get: <T>(path: string, pagination?: Pagination) => Promise<T | null>;

    set: (
        data: unknown,
        /**
         * @since 2.0.0
         */
        cacheControl: axios.AxiosHeaderValue | undefined,
        path: string,
        pagination?: Pagination,
    ) => Promise<void>;
}
