import axios, {
    AxiosHeaders,
    type AxiosInstance,
    type AxiosRequestConfig,
    type AxiosResponse,
    type CreateAxiosDefaults,
} from 'axios';
import { BadRequest, HttpError, NotFound } from './errors';
import type { ApiCache, BadRequestResponse, Pagination, SuccessResponse } from './types';

/**
 * @category Base
 *
 * @since 1.0.1
 */
export class BaseApi {
    public readonly baseUrl: string;
    private readonly axios: AxiosInstance;
    private readonly cache?: ApiCache;

    public constructor({ cache, config }: {
        cache?: ApiCache;
        config?: Omit<CreateAxiosDefaults, 'baseUrl'>;
    } = {}) {
        this.baseUrl = 'https://api.jolpi.ca/ergast/f1';

        this.axios = axios.create({
            baseURL: this.baseUrl,
            validateStatus: (status) =>
                (status >= 200 && status <= 299) || (status >= 400 && status <= 499),
            headers: new AxiosHeaders().setAccept('application/json'),
            ...config,
        });

        this.cache = cache;
    }

    // Multiple

    public async get<T extends SuccessResponse>(
        path: string,
        pagination?: Pagination,
        config?: AxiosRequestConfig,
    ): Promise<T> {
        if (this.cache) {
            const data = await this.cache.get<T>(path, pagination);

            if (data !== null) {
                return data;
            }
        }

        const response = await this.axios.get<T | BadRequestResponse>(`${path}.json`, {
            params: pagination,
            ...config,
        });

        if (response.status === 404) {
            throw new NotFound(response);
        }

        if (this.responseIsBadRequest(response)) {
            throw new BadRequest(response.data.detail);
        }

        if (response.status !== 200) {
            throw new HttpError(response.status);
        }

        const data = response.data as T;

        if (this.cache) {
            await this.cache.set(data, response.headers['Cache-Control'], path, pagination);
        }

        return data;
    }

    private responseIsBadRequest(
        response: AxiosResponse,
    ): response is AxiosResponse<BadRequestResponse> {
        return response.status === 400;
    }
}
