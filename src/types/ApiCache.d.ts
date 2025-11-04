import type { Pagination } from './api';

export interface ApiCache {
    get: <T>(path: string, pagination?: Pagination) => Promise<T | null>;
    set: (data: unknown, path: string, pagination?: Pagination) => Promise<void>;
}
