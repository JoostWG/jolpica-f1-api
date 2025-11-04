import axios, { AxiosHeaders, type AxiosInstance, type AxiosResponse } from 'axios';
import { BadRequest, HttpError, NotFound } from './errors';
import type { ApiCache, BadRequestResponse, Pagination, SuccessResponse } from './types';

/**
 * Minimal API implementation. Please use `Api` instead
 *
 * ```ts
 * const api = new BaseApi();
 *
 * const racesResponse = await api.get<RacesResponse>('/drivers/hamilton/races', { limit: 10 });
 *
 * const races = racesResponse.MRData.RaceTable.Races;
 *
 * for (const race of races) {
 *     console.log(`${race.season} ${race.raceName}`);
 * }
 * ```
 */

export class BaseApi {
    private readonly axios: AxiosInstance;

    public constructor(private readonly cache?: ApiCache) {
        this.axios = axios.create({
            baseURL: 'https://api.jolpi.ca/ergast/f1',
            headers: new AxiosHeaders().setContentType('application/json'),
        });
    }

    // Multiple

    public async get<T extends SuccessResponse>(path: string, pagination?: Pagination): Promise<T> {
        if (this.cache) {
            const data = await this.cache.get<T>(path, pagination);

            if (data !== null) {
                return data;
            }
        }

        const response = await this.axios.get<T | BadRequestResponse>(`${path}.json`, {
            params: pagination,
        });

        if (response.status === 404) {
            throw new NotFound();
        }

        if (this.responseIsBadRequest(response)) {
            throw new BadRequest(response.data.detail);
        }

        if (response.status !== 200) {
            throw new HttpError(response.status);
        }

        const data = response.data as T;

        if (this.cache) {
            await this.cache.set(data, path, pagination);
        }

        return data;
    }

    private responseIsBadRequest(
        response: AxiosResponse,
    ): response is AxiosResponse<BadRequestResponse> {
        return response.status === 400;
    }
}
