import type axios from 'axios';
import type { ApiCache, Pagination } from './types';

// TODO Test
/**
 * A simple cache. Can also serve as an example.
 *
 * @category Base
 *
 * @since 3.0.0
 *
 * @experimental
 */
export class SimpleApiCache implements ApiCache {
    protected readonly data: Map<string, { timestamp: number; data: unknown }>;

    public constructor() {
        this.data = new Map();
    }

    public async get<T>(path: string, pagination?: Pagination): Promise<T | null> {
        const cacheValue = this.data.get(this.getCacheKey(path, pagination));

        if (!cacheValue) {
            return null;
        }

        if ((Date.now() - cacheValue.timestamp) >= 86400) {
            return null;
        }

        return cacheValue.data as T;
    }

    public async set(
        data: unknown,
        cacheControl: axios.AxiosHeaderValue | undefined,
        path: string,
        pagination?: Pagination,
    ): Promise<void> {
        // TODO: Implement cache control
        this.data.set(this.getCacheKey(path, pagination), { timestamp: Date.now(), data });
    }

    private getCacheKey(path: string, pagination?: Pagination): string {
        return path
            .split('/')
            .filter((part) => part)
            .concat([
                String(pagination?.limit ?? 'null'),
                String(pagination?.offset ?? 'null'),
            ])
            .join('-');
    }
}
