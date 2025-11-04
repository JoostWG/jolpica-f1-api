import { Pagination } from './api/common.d.js';

interface ApiCache {
    get: <T>(path: string, pagination?: Pagination) => Promise<T | null>;
    set: (data: unknown, path: string, pagination?: Pagination) => Promise<void>;
}

export type { ApiCache };
