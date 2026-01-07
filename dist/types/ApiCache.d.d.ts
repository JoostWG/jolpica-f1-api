import axios from 'axios';
import { Pagination } from './api/index.d.js';
import './api/data.d.js';
import '../enums/StatusType.js';

/**
 * @category Base
 *
 * @since 1.0.1
 */
interface ApiCache {
    get<T>(path: string, pagination?: Pagination): Promise<T | null>;

    set(
        data: unknown,
        /**
         * @since 2.0.0
         */
        cacheControl: axios.AxiosHeaderValue | undefined,
        path: string,
        pagination?: Pagination,
    ): Promise<void>;
}

export type { ApiCache };
