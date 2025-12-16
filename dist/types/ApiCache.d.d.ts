import axios from 'axios';
import { Pagination } from './api/common.d.js';

interface ApiCache {
    get: <T>(path: string, pagination?: Pagination) => Promise<T | null>;
    // eslint-disable-next-line @typescript-eslint/max-params
    set: (
        data: unknown,
        cacheControl: axios.AxiosHeaderValue | undefined,
        path: string,
        pagination?: Pagination,
    ) => Promise<void>;
}

export type { ApiCache };
