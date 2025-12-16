import type axios from 'axios';
import type { Pagination } from './api';

export interface ApiCache {
    get: <T>(path: string, pagination?: Pagination) => Promise<T | null>;
    // eslint-disable-next-line @typescript-eslint/max-params
    set: (
        data: unknown,
        cacheControl: axios.AxiosHeaderValue | undefined,
        path: string,
        pagination?: Pagination,
    ) => Promise<void>;
}
